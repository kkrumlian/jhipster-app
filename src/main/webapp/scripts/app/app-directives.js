'use strict';
module.exports = angular.module('ppDirectives', [])
    .directive('activeMenu', function($translate, $locale, tmhDynamicLocale) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs, controller) {
                var language = attrs.activeMenu;

                scope.$watch(function() {
                    return $translate.use();
                }, function(selectedLanguage) {
                    if (language === selectedLanguage) {
                        tmhDynamicLocale.set(language);
                        element.addClass('active');
                    } else {
                        element.removeClass('active');
                    }
                });
            }
        };
    })
    .directive('activeLink', function(location) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs, controller) {
                var clazz = attrs.activeLink;
                var path = attrs.href;
                path = path.substring(1); //hack because path does bot return including hashbang
                scope.location = location;
                scope.$watch('location.path()', function(newPath) {
                    if (path === newPath) {
                        element.addClass(clazz);
                    } else {
                        element.removeClass(clazz);
                    }
                });
            }
        };
    })
    .directive('passwordStrengthBar', function() {
        return {
            replace: true,
            restrict: 'E',
            template: '<div id="strength">' +
                      '<small translate="global.messages.validate.newpassword.strength">Password strength:</small>' +
                      '<ul id="strengthBar">' +
                        '<li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li>' +
                      '</ul>' +
                    '</div>',
            link: function(scope, iElement, attr) {
                var strength = {
                    colors: ['#F00', '#F90', '#FF0', '#9F0', '#0F0'],
                    mesureStrength: function (p) {

                        var _force = 0;
                        var _regex = /[$-/:-?{-~!"^_`\[\]]/g; // "

                        var _lowerLetters = /[a-z]+/.test(p);
                        var _upperLetters = /[A-Z]+/.test(p);
                        var _numbers = /[0-9]+/.test(p);
                        var _symbols = _regex.test(p);

                        var _flags = [_lowerLetters, _upperLetters, _numbers, _symbols];
                        var _passedMatches = $.grep(_flags, function (el) { return el === true; }).length;

                        _force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
                        _force += _passedMatches * 10;

                        // penality (short password)
                        _force = (p.length <= 6) ? Math.min(_force, 10) : _force;

                        // penality (poor variety of characters)
                        _force = (_passedMatches == 1) ? Math.min(_force, 10) : _force;
                        _force = (_passedMatches == 2) ? Math.min(_force, 20) : _force;
                        _force = (_passedMatches == 3) ? Math.min(_force, 40) : _force;

                        return _force;

                    },
                    getColor: function (s) {

                        var idx = 0;
                        if (s <= 10) { idx = 0; }
                        else if (s <= 20) { idx = 1; }
                        else if (s <= 30) { idx = 2; }
                        else if (s <= 40) { idx = 3; }
                        else { idx = 4; }

                        return { idx: idx + 1, col: this.colors[idx] };
                    }
                };
                scope.$watch(attr.passwordToCheck, function(password) {
                    if (password) {
                        var c = strength.getColor(strength.mesureStrength(password));
                        iElement.removeClass('ng-hide');
                        iElement.find('ul').children('li')
                            .css({ "background": "#DDD" })
                            .slice(0, c.idx)
                            .css({ "background": c.col });
                    }
                });
            }
        }
    })

    .directive('customBackground', function() {
        return {
            restrict: "A",
            controller: [
                '$scope', '$element', '$location', 
                function($scope, $element, $location) {
                    var addBg, path;
                    
                    path = function() {
                        return $location.path();
                    };
                    
                    addBg = function(path) {
                        $element.removeClass('body-home body-special body-tasks body-lock');
                        switch (path) {
                            case '/':
                                if ($scope.authenticated) {
                                    return $element.addClass('body-home');
                                } else {
                                    return $element.addClass('body-home body-special');
                                }
                                break;
                            case '/404':
                            case '/pages/500':
                            case '/pages/signin':
                            case '/pages/signup':
                            case '/login':
                            case '/register':
                                return $element.addClass('body-special');
                            case '/pages/lock-screen':
                                return $element.addClass('body-special body-lock');
                            case '/tasks':
                                return $element.addClass('body-tasks');
                        }
                    };

                    addBg($location.path());

                    return $scope.$watch(path, function(newVal, oldVal) {
                        if (newVal === oldVal) {
                            return;
                        }
                        return addBg($location.path());
                    });
                }
            ]
        };
    })

    .directive('toggleMinNav', [
        '$rootScope',
        function($rootScope) {
            return {
                restrict: 'A',
                link: function(scope, ele, attrs) {
                    var $window, Timer, app, updateClass;
                    app = $('#ParticipantPortal');
                    $window = $(window);
                    ele.on('click', function(e) {
                        if (app.hasClass('nav-min')) {
                            app.removeClass('nav-min');
                        } else {
                            app.addClass('nav-min');
                            $rootScope.$broadcast('minNav:enabled');
                        }
                        return e.preventDefault();
                    });
                    Timer = void 0;
                    updateClass = function() {
                        var width;
                        width = $window.width();
                        if (width < 992) {
                            return app.removeClass('nav-min');
                        }
                    };
                    return $window.resize(function() {
                        var t;
                        clearTimeout(t);
                        return t = setTimeout(updateClass, 300);
                    });
                }
            };
        }
    ])

    .directive('collapseNav', [
        function() {
            return {
                restrict: 'A',
                link: function(scope, ele, attrs) {
                    var $a, $aRest, $lists, $listsRest, app;
                    $lists = ele.find('ul').parent('li');
                    $lists.append('<i class="fa fa-caret-right icon-has-ul"></i>');
                    $a = $lists.children('a');
                    $listsRest = ele.children('li').not($lists);
                    $aRest = $listsRest.children('a');
                    app = $('#ParticipantPortal');
                    $a.on('click', function(event) {
                        var $parent, $this;
                        if (app.hasClass('nav-min')) {
                            return false;
                        }
                        $this = $(this);
                        $parent = $this.parent('li');
                        $lists.not($parent).removeClass('open').find('ul').slideUp();
                        $parent.toggleClass('open').find('ul').slideToggle();
                        return event.preventDefault();
                    });
                    $aRest.on('click', function(event) {
                        return $lists.removeClass('open').find('ul').slideUp();
                    });
                    return scope.$on('minNav:enabled', function(event) {
                        return $lists.removeClass('open').find('ul').slideUp();
                    });
                }
            };
        }
    ])

    .directive('highlightActive', [
        function() {
            return {
                restrict: "A",
                controller: [
                    '$scope', '$element', '$attrs', '$location',
                    function($scope, $element, $attrs, $location) {
                        var highlightActive, links, path;
                        links = $element.find('a');
                        path = function() {
                            return $location.path();
                        };
                        highlightActive = function(links, path) {
                            path = '#' + path;
                            return angular.forEach(links, function(link) {
                                var $li, $link, href;
                                $link = angular.element(link);
                                $li = $link.parent('li');
                                href = $link.attr('href');
                                if ($li.hasClass('active')) {
                                    $li.removeClass('active');
                                }
                                if (path.indexOf(href) === 0) {
                                    return $li.addClass('active');
                                }
                            });
                        };
                        highlightActive(links, $location.path());
                        return $scope.$watch(path, function(newVal, oldVal) {
                            if (newVal === oldVal) {
                                return;
                            }
                            return highlightActive(links, $location.path());
                        });
                    }
                ]
            };
        }
    ])

    .directive('toggleOffCanvas', [
        function() {
            return {
                restrict: 'A',
                link: function(scope, ele, attrs) {
                    return ele.on('click', function() {
                        return $('#ParticipantPortal').toggleClass('on-canvas');
                    });
                }
            };
        }
    ])

    .directive('slimScroll', [
        function() {
            return {
                restrict: 'A',
                link: function(scope, ele, attrs) {
                    return ele.slimScroll({
                        height: '100%'
                    });
                }
            };
        }
    ])
;

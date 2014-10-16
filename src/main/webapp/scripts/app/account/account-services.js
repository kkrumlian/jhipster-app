'use strict';

require('angular-resource');
require('../http-auth-interceptor');

module.exports = angular.module('ppAccountServices', [
        'ngResource',
        'http-auth-interceptor'
	])

    .factory('CurrentSessionService', function() {
        this.create = function(login, firstName, lastName, email, userRoles) {
            this.login = login;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.userRoles = userRoles;
        };
        this.invalidate = function() {
            this.login = null;
            this.firstName = null;
            this.lastName = null;
            this.email = null;
            this.userRoles = null;
        };
        return this;
    })

    .factory('AccountService', ['$resource',
        function($resource) {
            return $resource('app/rest/account', {}, {});
        }
    ])

    .factory('AuthenticationSharedService', ['$rootScope', '$http', 'authService', 'CurrentSessionService', 'AccountService',
        function($rootScope, $http, authSvc, CurrentSessionSvc, AccountSvc) {
            return {
                login: function(param) {
                    var data ="j_username=" + param.username +"&j_password=" + param.password +"&_spring_security_remember_me=" + param.rememberMe +"&submit=Login";
                    $http.post('app/authentication', data, {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        ignoreAuthModule: 'ignoreAuthModule'
                    }).success(function(data, status, headers, config) {
                        AccountSvc.get(function(data) {
                            CurrentSessionSvc.create(data.login, data.firstName, data.lastName, data.email, data.roles);
                            $rootScope.account = CurrentSessionSvc;
                            authSvc.loginConfirmed(data);
                        });
                    }).error(function(data, status, headers, config) {
                        $rootScope.authenticationError = true;
                        CurrentSessionSvc.invalidate();
                    });
                },
                valid: function(authorizedRoles) {

                    $http.get('protected/authentication_check.gif', {
                        ignoreAuthModule: 'ignoreAuthModule'
                    }).success(function(data, status, headers, config) {
                        if (!CurrentSessionSvc.login) {
                            AccountSvc.get(function(data) {
                                CurrentSessionSvc.create(data.login, data.firstName, data.lastName, data.email, data.roles);
                                $rootScope.account = CurrentSessionSvc;

                                if (!$rootScope.isAuthorized(authorizedRoles)) {
                                    event.preventDefault();
                                    // user is not allowed
                                    $rootScope.$broadcast("event:auth-notAuthorized");
                                }

                                $rootScope.authenticated = true;
                            });
                        }
                        $rootScope.authenticated = !!CurrentSessionSvc.login;
                    }).error(function(data, status, headers, config) {
                        $rootScope.authenticated = false;
                    });
                },
                isAuthorized: function(authorizedRoles) {
                    if (!angular.isArray(authorizedRoles)) {
                        if (authorizedRoles == '*') {
                            return true;
                        }

                        authorizedRoles = [authorizedRoles];
                    }

                    var isAuthorized = false;
                    angular.forEach(authorizedRoles, function(authorizedRole) {
                        var authorized = (!!CurrentSessionSvc.login &&
                            CurrentSessionSvc.userRoles.indexOf(authorizedRole) !== -1);

                        if (authorized || authorizedRole == '*') {
                            isAuthorized = true;
                        }
                    });

                    return isAuthorized;
                },
                logout: function() {
                    $rootScope.authenticationError = false;
                    $rootScope.authenticated = false;
                    $rootScope.account = null;

                    $http.get('app/logout');
                    CurrentSessionSvc.invalidate();
                    authSvc.loginCancelled();
                }
            };
        }
    ]);
module.exports = angular.module('ppManageUsers',[
    ])

    .config(['$routeProvider', 'USER_ROLES',
        function ($routeProvider, USER_ROLES) {
            $routeProvider.when('/manage-users', {
                templateUrl: 'scripts/app/manageUsers/manageUsers-view.html',
                controller: 'ManageUserController',
                resolve:{
                    resolvedUser: ['User', function (User) {
                        return User.query();
                    }]
                },
                access: {
                    authorizedRoles: [USER_ROLES.all]
                }
            })
        }
    ])

    .factory('User', ['$resource',
        function ($resource) {
            return $resource('app/rest/users/:login', {}, {
                'query': { method: 'GET', isArray: true},
                'get': { method: 'GET'}
            });
        }
    ])

    .factory('Update', ['$resource',
        function ($resource) {
            return $resource('app/rest/update_info', {}, {});
        }
    ])

    .factory('ManagePassword', ['$resource',
        function ($resource) {
            return $resource('app/rest/manage_password', {}, {});
        }
    ])

    .controller('ManageUserController', ['$scope', 'resolvedUser', 'User', 'Account', 'Password', 'Update', 'ManagePassword', 'Register', '$translate',
        function ($scope, resolvedUser, User, Account, Password, Update, ManagePassword, Register, $translate) {
            $scope.show = true;
            $scope.users = resolvedUser;
            $scope.showEditPassword = true;
            $scope.showCreateUser = true;

            $scope.save = function () {
                $scope.user = {
                    login: $scope.user.login,
                    firstName: $scope.user.firstName,
                    lastName: $scope.user.lastName,
                    email: $scope.user.email
                };
                Update.save($scope.user, 
                    function() {
                        $scope.users = User.query();
                        $scope.show = true;
                    });
            };

            $scope.updatePassword = function () {
                $scope.password = {
                    login: $scope.user.login,
                    password: $scope.password
                }
                ManagePassword.save($scope.password, 
                    function() {
                        $scope.users = User.query();
                        $scope.showEditPassword = true;
                        $scope.confirmPassword = null;
                    });
            };

            $scope.match = function () {
                if ($scope.password != $scope.confirmPassword) {
                    return false;
                }
                return true;
            };

            $scope.update = function (login) {
                $scope.user = User.get({login: login});
                $scope.show = false;
            };

            $scope.delete = function (login) {
                User.delete({login: login},
                    function () {
                        $scope.users = User.query();
                    });
            };

            $scope.cancel = function () {
                $scope.show = true;
            };

            $scope.cancelPassword = function () {
                $scope.showEditPassword = true;
                $scope.show = false;
                $scope.password = null;
                $scope.confirmPassword = null;
            };

            $scope.changePassword = function () {
                $scope.showEditPassword = false;
                $scope.show = true;
            }

            $scope.formUser = function () {
                $scope.showCreateUser = false;
            }

            $scope.matchNewUser = function () {
                if ($scope.newUser.password != $scope.newUserconfirmPassword) {
                    return false;
                }
                return true;
            }

            $scope.createUser = function () {
                $scope.newUser.langKey = $translate.use();
                Register.save($scope.newUser, 
                    function() {
                        $scope.users = User.query();
                        $scope.clearNewUser();
                        $scope.error = null;
                        $scope.success = 'OK';
                    },
                    function (httpResponse) {
                        $scope.success = null;
                        $scope.error = "ERROR";
                    });
            }                

            $scope.back = function () {
                $scope.showCreateUser = true;
                $scope.clearNewUser();
                $scope.error = null;
                $scope.success = null;
            }

            $scope.clearNewUser = function () {
                $scope.newUser = {login: null};
                $scope.newUserconfirmPassword = null;
                $scope.error = null;
                $scope.success = null;
            }
        }
    ]);
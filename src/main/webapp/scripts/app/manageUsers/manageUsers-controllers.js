'use strict';

require('angular-route');
require('angular-translate');
require('angular-translate-storage-cookie');
require('angular-translate-loader-static-files');

module.exports = angular.module('ppManageUsersControllers',[
        'ngRoute',
        'pascalprecht.translate',
        require('../account/register/register-services').name,
        require('./manageUsers-services').name
    ])

    .controller('ManageUserController', ['$scope', '$route', '$translate', 'RegisterService', 'UserService', 'UpdateService', 'ManagePasswordService',
        function($scope, $route, $translate, RegisterSvc, UserSvc, UpdateSvc, ManagePasswordSvc) {
            $scope.show = true;
            $scope.users = $route.current.locals.resolvedUser;
            $scope.showEditPassword = true;
            $scope.showCreateUser = true;

            $scope.save = function () {
                $scope.user = {
                    login: $scope.user.login,
                    firstName: $scope.user.firstName,
                    lastName: $scope.user.lastName,
                    email: $scope.user.email
                };
                UpdateSvc.save($scope.user, 
                    function() {
                        $scope.users = UserSvc.query();
                        $scope.show = true;
                    });
            };

            $scope.updatePassword = function () {
                $scope.password = {
                    login: $scope.user.login,
                    password: $scope.password
                }
                ManagePasswordSvc.save($scope.password, 
                    function() {
                        $scope.users = UserSvc.query();
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
                $scope.user = UserSvc.get({login: login});
                $scope.show = false;
            };

            $scope.delete = function (login) {
                UserSvc.delete({login: login},
                    function () {
                        $scope.users = UserSvc.query();
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
                RegisterSvc.save($scope.newUser, 
                    function() {
                        $scope.users = UserSvc.query();
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
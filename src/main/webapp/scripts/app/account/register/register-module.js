'use strict';

define([
        'angular'
    ], function( angular ) {

        return angular.module('PP-account-register', ['ngRoute', 'jhipsterAppConstants'])

            .config(['$routeProvider', 'USER_ROLES', 
                function ($routeProvider, USER_ROLES) {
                    $routeProvider.when('/register', {
                        templateUrl: 'scripts/app/account/register/register-view.html',
                        controller: 'RegisterController',
                        access: {
                            authorizedRoles: [USER_ROLES.all]
                        }
                    })
                }
            ])

            .factory('Register', function ($resource) {
                return $resource('app/rest/register', {}, {});
            })

            .controller('RegisterController', ['$scope','$translate','Register',
                function ($scope, $translate, Register) {
                    $scope.success = null;
                    $scope.error = null;
                    $scope.doNotMatch = null;
                    $scope.errorUserExists = null;
                    $scope.register = function () {
                        if ($scope.registerAccount.password != $scope.confirmPassword) {
                            $scope.doNotMatch = "ERROR";
                        } else {
                            $scope.registerAccount.langKey = $translate.use();
                            $scope.doNotMatch = null;
                            Register.save($scope.registerAccount,
                                function (value, responseHeaders) {
                                    $scope.error = null;
                                    $scope.errorUserExists = null;
                                    $scope.success = 'OK';
                                },
                                function (httpResponse) {
                                    $scope.success = null;
                                    if (httpResponse.status === 304 &&
                                            httpResponse.data.error && httpResponse.data.error === "Not Modified") {
                                        $scope.error = null;
                                        $scope.errorUserExists = "ERROR";
                                    } else {
                                        $scope.error = "ERROR";
                                        $scope.errorUserExists = null;
                                    }
                                }
                            );
                        }
                    }
                }
            ]);
    });
'use strict';

define([
        'angular'
    ], function( angular ) {

    return angular.module('PP-account-login', ['ngRoute', 'jhipsterAppConstants'])

        .config(['$routeProvider', 'USER_ROLES',
            function ($routeProvider, USER_ROLES) {
                $routeProvider.when('/login', {
                    templateUrl: 'scripts/app/account/login/login-view.html',
                    controller: 'LoginController',
                    access: {
                        authorizedRoles: [USER_ROLES.all]
                    }
                })
            }
        ])

        .controller('LoginController', ['$scope', 'AuthenticationSharedService',
            function ($scope, AuthenticationSharedService) {
                $scope.rememberMe = true;
                $scope.login = function () {
                    AuthenticationSharedService.login({
                        username: $scope.username,
                        password: $scope.password,
                        rememberMe: $scope.rememberMe
                    });
                }
            }
        ]);
    });
'use strict';

module.exports = angular.module('ppAccountLoginControllers', [
        require('../account-services').name
    ])

    .controller('LoginController', ['$scope', 'AuthenticationSharedService',
        function($scope, AuthenticationSharedSvc) {
            $scope.rememberMe = true;
            $scope.login = function () {
                AuthenticationSharedSvc.login({
                    username: $scope.username,
                    password: $scope.password,
                    rememberMe: $scope.rememberMe
                });
            }
        }
    ]);

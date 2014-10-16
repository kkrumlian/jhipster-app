'use strict';

require('angular-route');

module.exports = angular.module('ppAccountActivateControllers', [
        'ngRoute',
        require('./activate-services').name
    ])

    .controller('ActivationController', ['$scope', '$routeParams', 'ActivateService',
        function($scope, $routeParams, ActivateSvc) {
            ActivateSvc.get({key: $routeParams.key},
                function (value, responseHeaders) {
                    $scope.error = null;
                    $scope.success = 'OK';
                },
                function (httpResponse) {
                    $scope.success = null;
                    $scope.error = "ERROR";
                });
        }
    ]);
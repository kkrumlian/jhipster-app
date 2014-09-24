'use strict';

define([
    'angular'
    ], function( angular ) {

    return angular.module('PP-account-activate', ['ngRoute', 'jhipsterAppConstants'])

        .config(['$routeProvider', 'USER_ROLES',
            function ($routeProvider, USER_ROLES) {
                $routeProvider.when('/activate', {
                    templateUrl: 'scripts/app/account/activate/activate-view.html',
                    controller: 'ActivationController',
                    access: {
                        authorizedRoles: [USER_ROLES.all]
                    }
                })
            }
        ])

        .factory('Activate', function ($resource) {
            return $resource('app/rest/activate', {}, {
                'get': { method: 'GET', params: {}, isArray: false}
            });
        })
        
        .controller('ActivationController', ['$scope', '$routeParams', 'Activate',
            function ($scope, $routeParams, Activate) {
                Activate.get({key: $routeParams.key},
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
});
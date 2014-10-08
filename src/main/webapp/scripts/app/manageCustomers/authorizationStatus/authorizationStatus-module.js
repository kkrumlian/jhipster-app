'use strict';

require('angular-route');

module.exports = angular.module('ppManageCustomerAuthorizationStatus', [
        'ngRoute',
        require('../../app-constants').name
    ])

    .config(['$routeProvider', '$httpProvider', '$translateProvider', 'USER_ROLES',
        function ($routeProvider, $httpProvider, $translateProvider, USER_ROLES) {
            $routeProvider
                .when('/authorization_status', {
                    templateUrl: 'scripts/app/manageCustomers/authorizationStatus/authorizationStatus.html',
                    controller: 'AuthorizationStatusController',
                    resolve:{
                        resolvedAuthorizationStatus: ['AuthorizationStatus', function (AuthorizationStatus) {
                            return AuthorizationStatus.query();
                        }]
                    },
                    access: {
                        authorizedRoles: [USER_ROLES.all]
                    }
                })
        }])

	.controller('AuthorizationStatusController', ['$scope', 'resolvedAuthorizationStatus', 'AuthorizationStatus',
    function ($scope, resolvedAuthorizationStatus, AuthorizationStatus) {

        $scope.authorizationStatuses = resolvedAuthorizationStatus;
        $scope.show = true;

        $scope.create = function () {
            AuthorizationStatus.save($scope.authorizationStatus,
                function () {
                    $scope.authorizationStatuses = AuthorizationStatus.query();
                    $scope.show = true;
                    $scope.clear();
                });
        };

        $scope.update = function (id) {
            $scope.authorizationStatus = AuthorizationStatus.get({id: id});
            $scope.show = false;
        };

        $scope.delete = function (id) {
            AuthorizationStatus.delete({id: id},
                function () {
                    $scope.authorizationStatuses = AuthorizationStatus.query();
                });
        };

        $scope.clear = function () {
            $scope.authorizationStatus = {id: null};
        };

        $scope.newStatus = function () {
            $scope.show = false;
        }
    }]);
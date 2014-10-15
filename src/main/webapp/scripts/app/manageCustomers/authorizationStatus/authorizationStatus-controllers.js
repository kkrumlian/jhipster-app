'use strict';

require('angular-route');

module.exports = angular.module('ppManageCustomersAuthorizationStatusController',[
        'ngRoute',
        require('./authorizationStatus-services.js').name
    ])

    .controller('AuthorizationStatusController', ['$scope', '$route', 'AuthorizationStatusService', 'Responsive',
        function($scope, $route, AuthorizationStatusSvc, Responsive) {

            $scope.authorizationStatuses = $route.current.locals.resolvedAuthorizationStatus;
            $scope.show = true;

            $scope.create = function () {
                AuthorizationStatusSvc.save($scope.authorizationStatus,
                    function () {
                        $scope.authorizationStatuses = AuthorizationStatusSvc.query();
                        $scope.show = true;
                        Responsive.updateTables();
                        $scope.clear();
                    });
            };

            $scope.update = function (id) {
                $scope.authorizationStatus = AuthorizationStatusSvc.get({id: id});
                $scope.show = false;
            };

            $scope.delete = function (id) {
                AuthorizationStatusSvc.delete({id: id},
                    function () {
                        $scope.authorizationStatuses = AuthorizationStatusSvc.query();
                    });
            };

            $scope.clear = function () {
                $scope.authorizationStatus = {id: null};
            };

            $scope.newStatus = function () {
                $scope.show = false;
            }
        }
    ])
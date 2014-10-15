'use strict';

require('angular-route');

module.exports = angular.module('ppManageCustomersOrganizationControllers',[
        'ngRoute',
        require('./organization-services').name
    ])

	.controller('OrganizationController', ['$scope', '$route', 'OrganizationService', 'Account', 'Responsive',
        function($scope, $route, OrganizationSvc, Account, Responsive) {

            $scope.organizations = $route.current.locals.resolvedOrganization;
            $scope.show = true;

            $scope.create = function () {
                $scope.organization = {
                    id: $scope.organization.id,
                    name: $scope.organization.name,
                    customerNumber: $scope.organization.customerNumber,
                    createdBy: $scope.organization.createdBy,
                    createdDate: $scope.organization.createdDate != undefined ? $scope.organization.createdDate.millis : $scope.organization.createdDate
                }

                OrganizationSvc.save($scope.organization, function (val) {
                    $scope.organizations = OrganizationSvc.query();
                    $scope.show = true;
                    Responsive.updateTables();
                    $scope.clear();
                });
            };

            $scope.update = function (id) {
                $scope.organization = OrganizationSvc.get({id: id});
                $scope.show = false;
            };

            $scope.delete = function (id) {
                OrganizationSvc.delete({id: id},
                    function () {
                        $scope.organizations = OrganizationSvc.query();
                    });
            };

            $scope.clear = function () {
                $scope.organization = {id: null};
            };

            $scope.newOrganization = function () {
                $scope.show = false;
            }
        }
    ])
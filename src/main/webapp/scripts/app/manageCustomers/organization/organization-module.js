'use strict';

angular.module('PP-manageCustomer-organization', ['ngRoute', 'jhipsterAppConstants'])
    
     .config(['$routeProvider', '$httpProvider', '$translateProvider', 'USER_ROLES',
        function ($routeProvider, $httpProvider, $translateProvider, USER_ROLES) {
            $routeProvider
                .when('/organization', {
                    templateUrl: 'scripts/app/manageCustomers/organization/organization.html',
                    controller: 'OrganizationController',
                    resolve:{
                        resolvedOrganization: ['Organization', function (Organization) {
                            return Organization.query();
                        }]
                    },
                    access: {
                        authorizedRoles: [USER_ROLES.all]
                    }
                })
        }])

	.controller('OrganizationController', ['$scope', 'resolvedOrganization', 'Organization', 'Account',
    function ($scope, resolvedOrganization, Organization, Account) {

        $scope.organizations = resolvedOrganization;
        $scope.show = true;

        $scope.create = function () {
            $scope.organization = {
                id: $scope.organization.id,
                name: $scope.organization.name,
                customerNumber: $scope.organization.customerNumber,
                createdBy: $scope.organization.createdBy,
                createdDate: $scope.organization.createdDate != undefined ? $scope.organization.createdDate.millis : $scope.organization.createdDate
            }
            Organization.save($scope.organization,
                function (val) {
                    $scope.organizations = Organization.query();
                    $scope.show = true;
                    $scope.clear();
                });
        };

        $scope.update = function (id) {
            $scope.organization = Organization.get({id: id});
            $scope.show = false;
        };

        $scope.delete = function (id) {
            Organization.delete({id: id},
                function () {
                    $scope.organizations = Organization.query();
                });
        };

        $scope.clear = function () {
            $scope.organization = {id: null};
        };

        $scope.newOrganization = function () {
            $scope.show = false;
        }
    }]);
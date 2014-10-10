'use strict';

require('angular-route');

module.exports = angular.module('ppManageCustomerAuthorization', [
        'ngRoute',
        require('../../app-constants').name
    ])
    
    .config(['$routeProvider', '$httpProvider', '$translateProvider', 'USER_ROLES',
        function ($routeProvider, $httpProvider, $translateProvider, USER_ROLES) {
            $routeProvider
                .when('/authorization', {
                    templateUrl: 'scripts/app/manageCustomers/authorization/authorization.html',
                    controller: 'AuthorizationController',
                    resolve:{
                        resolvedAuthorization: ['Authorization', function (Authorization) {
                            return Authorization.query();
                        }],
                        resolvedAuthorizationStatus: ['AuthorizationStatus', function (AuthorizationStatus) {
                            return AuthorizationStatus.query();
                        }], 
                        resolvedStudy: ['Study', function (Study) {
                            return Study.query();
                        }]
                    },
                    access: {
                        authorizedRoles: [USER_ROLES.all]
                    }
                })
        }])

	.controller('AuthorizationController', ['$scope', 'resolvedAuthorization', 'Authorization', 'resolvedAuthorizationStatus', 'resolvedStudy', 'Responsive',
    function ($scope, resolvedAuthorization, Authorization, resolvedAuthorizationStatus, resolvedStudy, Responsive) {

        $scope.authorizations = resolvedAuthorization;
        $scope.show = true;
        $scope.studies = resolvedStudy;
        $scope.authorizationStatuses = resolvedAuthorizationStatus;

        $scope.$watch('authorization.study', function() {
            if (!$scope.show) {
                Responsive.updateTables();
            }
        });

        $scope.$watch('authorization.authorizationStatus', function() {
            if (!$scope.show) {
                Responsive.updateTables();
            }
        });

        $scope.create = function () {
            var organization = {
                id: $scope.authorization.study.organization.id,
                name: $scope.authorization.study.organization.name,
                customerNumber: $scope.authorization.study.organization.customerNumber,
                createdBy: $scope.authorization.study.organization.createdBy,
                createdDate: $scope.authorization.study.organization.createdDate != undefined ? $scope.authorization.study.organization.createdDate.millis : $scope.authorization.study.organization.createdDate
            };
            var study = {
                id: $scope.authorization.study.id,
                createdBy: $scope.authorization.study.createdBy,
                createdDate: $scope.authorization.study.createdDate != undefined ? $scope.authorization.study.createdDate.millis : $scope.authorization.study.createdDate,
                instanceUrl: $scope.authorization.study.instanceUrl,
                studyOid: $scope.authorization.study.studyOid,
                organization: organization
            };
            $scope.authorization = {
                id: $scope.authorization.id,
                createdBy: $scope.authorization.createdBy,
                createdDate: $scope.authorization.createdDate != undefined ? $scope.authorization.createdDate.millis : $scope.authorization.createdDate,
                pformUrl: $scope.authorization.pformUrl,
                pformApiKey: $scope.authorization.pformApiKey,
                study: study,
                authorizationStatus: $scope.authorization.authorizationStatus
            }
            Authorization.save($scope.authorization,
                function () {
                    $scope.authorizations = Authorization.query();
                    $scope.show = true;
                    $scope.clear();
                });
        };

        $scope.update = function (id) {
            $scope.authorization = Authorization.get({id: id});
            $scope.show = false;
        };

        $scope.delete = function (id) {
            Authorization.delete({id: id},
                function () {
                    $scope.authorizations = Authorization.query();
                });
        };

        $scope.clear = function () {
            $scope.authorization = {id: null};
        };

        $scope.newAuthorization = function () {
            $scope.show = false;
        }
    }]);
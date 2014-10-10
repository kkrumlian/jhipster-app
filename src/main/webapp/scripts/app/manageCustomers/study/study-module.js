'use strict';

require('angular-route');

module.exports = angular.module('ppManageCustomerStudy', [
        'ngRoute',
        require('../../app-constants').name
    ])
    
    .config(['$routeProvider', '$httpProvider', '$translateProvider', 'USER_ROLES',
        function ($routeProvider, $httpProvider, $translateProvider, USER_ROLES) {
            $routeProvider
                .when('/study', {
                    templateUrl: 'scripts/app/manageCustomers/study/study.html',
                    controller: 'StudyController',
                    resolve:{
                        resolvedStudy: ['Study', function (Study) {
                            return Study.query();
                        }],
                        resolvedOrganization: ['Organization', function (Organization) {
                            return Organization.query();
                        }]
                    },
                    access: {
                        authorizedRoles: [USER_ROLES.all]
                    }
                })
        }])

	.controller('StudyController', ['$scope', 'resolvedStudy', 'Study', 'resolvedOrganization', 'Account', 'Responsive',
    function ($scope, resolvedStudy, Study, resolvedOrganization, Account, Responsive) {

        $scope.studies = resolvedStudy;
        $scope.organizations = resolvedOrganization;
        $scope.show = true;

        $scope.$watch('study.organization', function() {
            if (!$scope.show) {
                Responsive.updateTables();
            }
        });

        $scope.create = function () {
            var organization = {
                id: $scope.study.organization.id,
                name: $scope.study.organization.name,
                customerNumber: $scope.study.organization.customerNumber,
                createdBy: $scope.study.organization.createdBy,
                createdDate: $scope.study.organization.createdDate != undefined ? $scope.study.organization.createdDate.millis : $scope.study.organization.createdDate
            }
            $scope.study = {
                id: $scope.study.id,   
                instanceUrl: $scope.study.instanceUrl,
                studyOid: $scope.study.studyOid,
                createdBy: $scope.study.createdBy,
                createdDate: $scope.study.createdDate != undefined ? $scope.study.createdDate.millis : $scope.study.createdDate
            }
            $scope.study.organization = organization;
            Study.save($scope.study,
                function (val) {
                    $scope.studies = Study.query();
                    $scope.show = true;
                    $scope.clear();
                });
        };

        $scope.update = function (id) {
            $scope.study = Study.get({id: id});
            $scope.show = false;
        };

        $scope.delete = function (id) {
            Study.delete({id: id},
                function () {
                    $scope.studies = Study.query();
                });
        };

        $scope.clear = function () {
            $scope.study = {id: null};
        };

        $scope.newStudy = function () {
            $scope.show = false;
        }
    }]);

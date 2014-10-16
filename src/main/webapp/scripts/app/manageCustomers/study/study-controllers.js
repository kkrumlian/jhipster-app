'use strict';

require('angular-route');

module.exports = angular.module('ppManageCustomerStudyControllers',[
        'ngRoute',
        require('./study-services').name
    ])
    .controller('StudyController', ['$scope', '$route', 'StudyService', 'Responsive',
        function($scope, $route, StudySvc, Responsive) {
            $scope.studies = $route.current.locals.resolvedStudy;
            $scope.organizations = $route.current.locals.resolvedOrganization;
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

                StudySvc.save($scope.study, function (val) {
                    $scope.studies = StudySvc.query();
                    $scope.show = true;
                    $scope.clear();
                });
            };

            $scope.update = function (id) {
                $scope.study = StudySvc.get({id: id});
                $scope.show = false;
            };

            $scope.delete = function (id) {
                StudySvc.delete({id: id},
                    function () {
                        $scope.studies = StudySvc.query();
                    });
            };

            $scope.clear = function () {
                $scope.study = {id: null};
            };

            $scope.newStudy = function () {
                $scope.show = false;
            }
        }
    ])
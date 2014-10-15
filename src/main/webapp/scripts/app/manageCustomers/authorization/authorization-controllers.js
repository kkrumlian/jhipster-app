'user strict';

require('angular-route');

module.exports = angular.module('ppManageCustomerAuthorizationControllers',[
        'ngRoute',
        require('./authorization-services').name,
    ])

    .controller('AuthorizationController', ['$scope', '$route', 'AuthorizationService', 'Responsive',
        function($scope, $route, AuthorizationSvc, Responsive) {

            $scope.authorizations = $route.current.locals.resolvedAuthorization;
            $scope.show = true;
            $scope.studies = $route.current.locals.resolvedStudy;
            $scope.authorizationStatuses = $route.current.locals.resolvedAuthorizationStatus;

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
                AuthorizationSvc.save($scope.authorization,
                    function () {
                        $scope.authorizations = AuthorizationSvc.query();
                        $scope.show = true;
                        $scope.clear();
                    });
            };

            $scope.update = function (id) {
                $scope.authorization = AuthorizationSvc.get({id: id});
                $scope.show = false;
            };

            $scope.delete = function (id) {
                AuthorizationSvc.delete({id: id},
                    function () {
                        $scope.authorizations = AuthorizationSvc.query();
                    });
            };

            $scope.clear = function () {
                $scope.authorization = {id: null};
            };

            $scope.newAuthorization = function () {
                $scope.show = false;
            }
        }
    ])
'use strict';

define([
        'angular'
    ], function( angular ) {

        return angular.module('PP-admin-audits', ['ngRoute', 'jhipsterAppConstants'])

            .config(['$routeProvider', 'USER_ROLES',
                function ($routeProvider, USER_ROLES) {
                    $routeProvider.when('/audits', {
                        templateUrl: 'scripts/app/admin/audits/audits-view.html',
                        controller: 'AuditsController',
                        access: {
                            authorizedRoles: [USER_ROLES.admin]
                        }
                    })
                }
            ])
            
            .factory('AuditsService', function ($http) {
                return {
                    findAll: function() {
                        var promise = $http.get('app/rest/audits/all').then(function (response) {
                            return response.data;
                        });
                        return promise;
                    },
                    findByDates: function(fromDate, toDate) {
                        var promise = $http.get('app/rest/audits/byDates', {params: {fromDate: fromDate, toDate: toDate}}).then(function (response) {
                            return response.data;
                        });
                        return promise;
                    }
                }
            })

            .controller('AuditsController', ['$scope', '$translate', '$filter', 'AuditsService',
                function ($scope, $translate, $filter, AuditsService) {
                    $scope.onChangeDate = function() {
                        AuditsService.findByDates($scope.fromDate, $scope.toDate).then(function(data){
                            $scope.audits = data;
                        });
                    };

                    // Date picker configuration
                    $scope.today = function() {
                        // Today + 1 day - needed if the current day must be included
                        var today = new Date();
                        var tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1); // create new increased date

                        $scope.toDate = $filter('date')(tomorrow, "yyyy-MM-dd");
                    };

                    $scope.previousMonth = function() {
                        var fromDate = new Date();
                        if (fromDate.getMonth() == 0) {
                            fromDate = new Date(fromDate.getFullYear() - 1, 0, fromDate.getDate());
                        } else {
                            fromDate = new Date(fromDate.getFullYear(), fromDate.getMonth() - 1, fromDate.getDate());
                        }

                        $scope.fromDate = $filter('date')(fromDate, "yyyy-MM-dd");
                    };

                    $scope.today();
                    $scope.previousMonth();

                    AuditsService.findByDates($scope.fromDate, $scope.toDate).then(function(data){
                        $scope.audits = data;
                    });
                }
            ]);
    });
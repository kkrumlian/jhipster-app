'use strict';

require('angular-route');

module.exports = angular.module('ppAdminMetrics', [
        'ngRoute',
        require('../../app-constants').name
    ])

    .config(['$routeProvider', 'USER_ROLES',
        function ($routeProvider, USER_ROLES) {
            $routeProvider.when('/metrics', {
                templateUrl: 'scripts/app/admin/metrics/metrics-view.html',
                controller: 'MetricsController',
                access: {
                    authorizedRoles: [USER_ROLES.admin]
                }
            })
        }
    ])
    
    .factory('MetricsService', function ($resource) {
        return $resource('metrics/metrics', {}, {
            'get': { method: 'GET'}
        });
    })

    .factory('ThreadDumpService', function ($http) {
        return {
            dump: function() {
                var promise = $http.get('dump').then(function(response){
                    return response.data;
                });
                return promise;
            }
        };
    })

    .factory('HealthCheckService', function ($rootScope, $http) {
        return {
            check: function() {
                var promise = $http.get('health').then(function(response){
                    return response.data;
                });
                return promise;
            }
        };
    })

    .controller('MetricsController', ['$scope', 'MetricsService', 'HealthCheckService', 'ThreadDumpService',
        function ($scope, MetricsService, HealthCheckService, ThreadDumpService) {

            $scope.refresh = function() {
                HealthCheckService.check().then(function(promise) {
                    $scope.healthCheck = promise.data;
                },function(promise) {
                    $scope.healthCheck = promise.data;
                });

                $scope.metrics = MetricsService.get();

                $scope.metrics.$get({}, function(items) {

                    $scope.servicesStats = {};
                    $scope.cachesStats = {};
                    angular.forEach(items.timers, function(value, key) {
                        if (key.indexOf("web.rest") != -1 || key.indexOf("service") != -1) {
                            $scope.servicesStats[key] = value;
                        }

                        if (key.indexOf("net.sf.ehcache.Cache") != -1) {
                            // remove gets or puts
                            var index = key.lastIndexOf(".");
                            var newKey = key.substr(0, index);

                            // Keep the name of the domain
                            index = newKey.lastIndexOf(".");
                            $scope.cachesStats[newKey] = {
                                'name': newKey.substr(index + 1),
                                'value': value
                            };
                        }
                    });
                });
            };

            $scope.refresh();

            $scope.threadDump = function() {
                ThreadDumpService.dump().then(function(data) {
                    $scope.threadDump = data;

                    $scope.threadDumpRunnable = 0;
                    $scope.threadDumpWaiting = 0;
                    $scope.threadDumpTimedWaiting = 0;
                    $scope.threadDumpBlocked = 0;

                    angular.forEach(data, function(value, key) {
                        if (value.threadState == 'RUNNABLE') {
                            $scope.threadDumpRunnable += 1;
                        } else if (value.threadState == 'WAITING') {
                            $scope.threadDumpWaiting += 1;
                        } else if (value.threadState == 'TIMED_WAITING') {
                            $scope.threadDumpTimedWaiting += 1;
                        } else if (value.threadState == 'BLOCKED') {
                            $scope.threadDumpBlocked += 1;
                        }
                    });

                    $scope.threadDumpAll = $scope.threadDumpRunnable + $scope.threadDumpWaiting +
                        $scope.threadDumpTimedWaiting + $scope.threadDumpBlocked;

                });
            };

            $scope.getLabelClass = function(threadState) {
                if (threadState == 'RUNNABLE') {
                    return "label-success";
                } else if (threadState == 'WAITING') {
                    return "label-info";
                } else if (threadState == 'TIMED_WAITING') {
                    return "label-warning";
                } else if (threadState == 'BLOCKED') {
                    return "label-danger";
                }
            };
        }
    ]);
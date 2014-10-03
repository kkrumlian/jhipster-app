'use strict';

require('angular-route');

module.exports = angular.module('ppAdminLogs', [
        'ngRoute',
        require('../../app-constants').name
    ])

    .config(['$routeProvider', 'USER_ROLES',
        function ($routeProvider, USER_ROLES) {
            $routeProvider.when('/logs', {
                templateUrl: 'scripts/app/admin/logs/logs-view.html',
                controller: 'LogsController',
                resolve:{
                    resolvedLogs:['LogsService', function (LogsService) {
                        return LogsService.findAll();
                    }]
                },
                access: {
                    authorizedRoles: [USER_ROLES.admin]
                }
            })
        }
    ])
    
    .factory('LogsService', function ($resource) {
        return $resource('app/rest/logs', {}, {
            'findAll': { method: 'GET', isArray: true},
            'changeLevel':  { method: 'PUT'}
        });
    })

    .controller('LogsController', ['$scope', 'resolvedLogs', 'LogsService',
        function ($scope, resolvedLogs, LogsService) {
            $scope.loggers = resolvedLogs;

            $scope.changeLevel = function (name, level) {
                LogsService.changeLevel({name: name, level: level}, function () {
                    $scope.loggers = LogsService.findAll();
                });
            }
        }
    ]);

'use strict';

require('angular-route');

module.exports = angular.module('ppAccountSessions', [
        'ngRoute',
        require('../../app-constants').name
    ])

    .config(['$routeProvider', 'USER_ROLES',
    	function ($routeProvider, USER_ROLES) {
            $routeProvider.when('/sessions', {
                templateUrl: 'scripts/app/account/sessions/sessions-view.html',
                controller: 'SessionsController',
                resolve:{
                    resolvedSessions:['Sessions', function (Sessions) {
                        return Sessions.get();
                    }]
                },
                access: {
                    authorizedRoles: [USER_ROLES.all]
                }
            })
    	}
	])

	.factory('Sessions', function ($resource) {
        return $resource('app/rest/account/sessions/:series', {}, {
            'get': { method: 'GET', isArray: true}
        });
    })

	.controller('SessionsController', ['$scope', 'resolvedSessions', 'Sessions',
		function ($scope, resolvedSessions, Sessions) {
	        $scope.success = null;
	        $scope.error = null;
	        $scope.sessions = resolvedSessions;
	        $scope.invalidate = function (series) {
	            Sessions.delete({series: encodeURIComponent(series)},
	                function (value, responseHeaders) {
	                    $scope.error = null;
	                    $scope.success = "OK";
	                    $scope.sessions = Sessions.get();
	                },
	                function (httpResponse) {
	                    $scope.success = null;
	                    $scope.error = "ERROR";
	                });
	        };
	    }
   	]);
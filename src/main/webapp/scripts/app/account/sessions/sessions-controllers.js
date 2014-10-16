'use strict';

require('angular-route');

module.exports = angular.module('ppAccountSessionsControllers', [
		'ngRoute',
		require('./sessions-services').name
	])

	.controller('SessionsController', ['$scope', '$route', 'SessionsService',
		function($scope, $route, SessionsSvc) {
	        $scope.success = null;
	        $scope.error = null;
	        $scope.sessions = $route.current.locals.resolvedSessions;
	        $scope.invalidate = function (series) {
	            SessionsSvc.delete({series: encodeURIComponent(series)},
	                function (value, responseHeaders) {
	                    $scope.error = null;
	                    $scope.success = "OK";
	                    $scope.sessions = SessionsSvc.get();
	                },
	                function (httpResponse) {
	                    $scope.success = null;
	                    $scope.error = "ERROR";
	                });
	        };
	    }
   	]);
'use strict';

module.exports = angular.module('ppAccountSettingsControllers', [
		require('../account-services').name
	])

	.controller('SettingsController', ['$scope', 'AccountService',
		function($scope, AccountSvc) {
	        $scope.success = null;
	        $scope.error = null;
	        $scope.settingsAccount = AccountSvc.get();

	        $scope.save = function () {
	            AccountSvc.save($scope.settingsAccount,
	                function (value, responseHeaders) {
	                    $scope.error = null;
	                    $scope.success = 'OK';
	                    $scope.settingsAccount = AccountSvc.get();
	                },
	                function (httpResponse) {
	                    $scope.success = null;
	                    $scope.error = "ERROR";
	                });
	        };
	    }
    ]);
'use strict';

define([
		'angular'
	], function( angular ) {
		
		return angular.module('PP-account-settings', ['ngRoute', 'jhipsterAppConstants'])

		    .config(['$routeProvider', 'USER_ROLES',
		    	function ($routeProvider, USER_ROLES) {
		            $routeProvider.when('/settings', {
		                templateUrl: 'scripts/app/account/settings/settings-view.html',
		                controller: 'SettingsController',
		                access: {
		                    authorizedRoles: [USER_ROLES.all]
		                }
		            })
		    	}
			])

			.controller('SettingsController', ['$scope', 'Account',
				function ($scope, Account) {
			        $scope.success = null;
			        $scope.error = null;
			        $scope.settingsAccount = Account.get();

			        $scope.save = function () {
			            Account.save($scope.settingsAccount,
			                function (value, responseHeaders) {
			                    $scope.error = null;
			                    $scope.success = 'OK';
			                    $scope.settingsAccount = Account.get();
			                },
			                function (httpResponse) {
			                    $scope.success = null;
			                    $scope.error = "ERROR";
			                });
			        };
			    }
		    ]);
	});
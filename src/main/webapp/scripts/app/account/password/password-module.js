'use strict';

angular.module('PP-account-password', ['ngRoute', 'jhipsterAppConstants'])

    .config(['$routeProvider', 'USER_ROLES',
    	function ($routeProvider, USER_ROLES) {
            $routeProvider.when('/password', {
		        templateUrl: 'scripts/app/account/password/password-view.html',
		        controller: 'PasswordController',
		        access: {
		            authorizedRoles: [USER_ROLES.all]
		        }
            })
    	}
	])
	
	.factory('Password', function ($resource) {
	    return $resource('app/rest/account/change_password', {}, {});
	})

	.controller('PasswordController', ['$scope', 'Password',
		function ($scope, Password) {
	        $scope.success = null;
	        $scope.error = null;
	        $scope.doNotMatch = null;
	        $scope.changePassword = function () {
	            if ($scope.password != $scope.confirmPassword) {
	                $scope.doNotMatch = "ERROR";
	            } else {
	                $scope.doNotMatch = null;
	                Password.save($scope.password,
	                    function (value, responseHeaders) {
	                        $scope.error = null;
	                        $scope.success = 'OK';
	                    },
	                    function (httpResponse) {
	                        $scope.success = null;
	                        $scope.error = "ERROR";
	                    });
	            }
	        };
	    }
    ]);

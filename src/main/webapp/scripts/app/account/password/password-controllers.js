'use strict';

module.exports = angular.module('ppAccountPasswordControllers', [
        require('./password-services').name
    ])

	.controller('PasswordController', ['$scope', 'PasswordService',
		function($scope, PasswordSvc) {
	        $scope.success = null;
	        $scope.error = null;
	        $scope.doNotMatch = null;
	        $scope.changePassword = function () {
	            if ($scope.password != $scope.confirmPassword) {
	                $scope.doNotMatch = "ERROR";
	            } else {
	                $scope.doNotMatch = null;
	                PasswordSvc.save($scope.password,
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

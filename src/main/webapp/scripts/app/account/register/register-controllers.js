'use strict';

require('angular-translate');
require('angular-translate-storage-cookie');
require('angular-translate-loader-static-files');

module.exports = angular.module('ppAccountRegisterControllers', [
        'pascalprecht.translate',
		require('./register-services').name
    ])

    .controller('RegisterController', ['$scope','$translate','RegisterService',
        function($scope, $translate, RegisterSvc) {
            $scope.success = null;
            $scope.error = null;
            $scope.doNotMatch = null;
            $scope.errorUserExists = null;
            $scope.register = function () {
                if ($scope.registerAccount.password != $scope.confirmPassword) {
                    $scope.doNotMatch = "ERROR";
                } else {
                    $scope.registerAccount.langKey = $translate.use();
                    $scope.doNotMatch = null;
                    RegisterSvc.save($scope.registerAccount,
                        function (value, responseHeaders) {
                            $scope.error = null;
                            $scope.errorUserExists = null;
                            $scope.success = 'OK';
                        },
                        function (httpResponse) {
                            $scope.success = null;
                            if (httpResponse.status === 304 &&
                                    httpResponse.data.error && httpResponse.data.error === "Not Modified") {
                                $scope.error = null;
                                $scope.errorUserExists = "ERROR";
                            } else {
                                $scope.error = "ERROR";
                                $scope.errorUserExists = null;
                            }
                        }
                    );
                }
            }
        }
    ]);
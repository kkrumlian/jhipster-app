'use strict';

module.exports = angular.module('ppAccountLogoutControllers', [
        require('../account-services').name
    ])

    .controller('LogoutController', ['AuthenticationSharedService',
        function(AuthenticationSharedSvc) {
            AuthenticationSharedSvc.logout();
        }
    ]);

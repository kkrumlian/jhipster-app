'use strict';

require('angular-route');

module.exports = angular.module('ppAccountLogout', [
        'ngRoute',
        require('../../app-constants').name,
        require('./logout-controllers').name
    ])

    .config(['$routeProvider', 'USER_ROLES',
        function($routeProvider, USER_ROLES) {
            $routeProvider.when('/logout', {
                templateUrl: 'scripts/app/app-main-view.html',
                controller: 'LogoutController',
                access: {
                    authorizedRoles: [USER_ROLES.all]
                }
            })
        }
    ]);
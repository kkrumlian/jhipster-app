'use strict';

require('angular-route');

module.exports = angular.module('ppAccountLogin', [
        'ngRoute',
        require('../../app-constants').name,
        require('./login-controllers').name
    ])

    .config(['$routeProvider', 'USER_ROLES',
        function($routeProvider, USER_ROLES) {
            $routeProvider.when('/login', {
                templateUrl: 'scripts/app/account/login/login-view.html',
                controller: 'LoginController',
                access: {
                    authorizedRoles: [USER_ROLES.all]
                }
            })
        }
    ]);
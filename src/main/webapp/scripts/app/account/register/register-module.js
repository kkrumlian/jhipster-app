'use strict';

require('angular-route');

module.exports = angular.module('ppAccountRegister', [
        'ngRoute',
        require('../../app-constants').name,
        require('./register-services').name,
        require('./register-controllers').name
    ])

    .config(['$routeProvider', 'USER_ROLES', 
        function ($routeProvider, USER_ROLES) {
            $routeProvider.when('/register', {
                templateUrl: 'scripts/app/account/register/register-view.html',
                controller: 'RegisterController',
                access: {
                    authorizedRoles: [USER_ROLES.all]
                }
            })
        }
    ]);
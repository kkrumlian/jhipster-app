'use strict';

require('angular-route');

module.exports = angular.module('ppAccountActivate', [
        'ngRoute',
        require('../../app-constants').name,
        require('./activate-services').name,
        require('./activate-controllers').name
    ])

    .config(['$routeProvider', 'USER_ROLES',
        function($routeProvider, USER_ROLES) {
            $routeProvider.when('/activate', {
                templateUrl: 'scripts/app/account/activate/activate-view.html',
                controller: 'ActivationController',
                access: {
                    authorizedRoles: [USER_ROLES.all]
                }
            })
        }
    ]);
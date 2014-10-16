'use strict';

require('angular-route');

module.exports = angular.module('ppAccountSettings', [
        'ngRoute',
        require('../../app-constants').name,
        require('./settings-controllers').name
    ])

    .config(['$routeProvider', 'USER_ROLES',
    	function($routeProvider, USER_ROLES) {
            $routeProvider.when('/settings', {
                templateUrl: 'scripts/app/account/settings/settings-view.html',
                controller: 'SettingsController',
                access: {
                    authorizedRoles: [USER_ROLES.all]
                }
            })
    	}
	]);
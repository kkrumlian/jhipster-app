'use strict';

require('angular-route');

module.exports = angular.module('ppAccountPassword', [
        'ngRoute',
        require('../../app-constants').name,
        require('./password-services').name,
        require('./password-controllers').name
    ])

    .config(['$routeProvider', 'USER_ROLES',
    	function($routeProvider, USER_ROLES) {
            $routeProvider.when('/password', {
		        templateUrl: 'scripts/app/account/password/password-view.html',
		        controller: 'PasswordController',
		        access: {
		            authorizedRoles: [USER_ROLES.all]
		        }
            })
    	}
	]);

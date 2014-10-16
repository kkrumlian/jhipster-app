'use strict';

require('angular-route');

module.exports = angular.module('ppAccountSessions', [
        'ngRoute',
        require('../../app-constants').name,
        require('./sessions-services').name,
        require('./sessions-controllers').name
    ])

    .config(['$routeProvider', 'USER_ROLES',
    	function($routeProvider, USER_ROLES) {
            $routeProvider.when('/sessions', {
                templateUrl: 'scripts/app/account/sessions/sessions-view.html',
                controller: 'SessionsController',
                resolve:{
                    resolvedSessions:['SessionsService', function(SessionsSvc) {
                        return SessionsSvc.get();
                    }]
                },
                access: {
                    authorizedRoles: [USER_ROLES.all]
                }
            })
    	}
	]);
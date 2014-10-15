'use strict';

require('angular-route');

module.exports = angular.module('ppManageCustomerAuthorizationStatus', [
        'ngRoute',
        require('../../app-constants').name,
        require('./authorizationStatus-services').name,
        require('./authorizationStatus-controllers').name
    ])

    .config(['$routeProvider', '$httpProvider', '$translateProvider', 'USER_ROLES',
        function($routeProvider, $httpProvider, $translateProvider, USER_ROLES) {
            $routeProvider
                .when('/authorization_status', {
                    templateUrl: 'scripts/app/manageCustomers/authorizationStatus/authorizationStatus.html',
                    controller: 'AuthorizationStatusController',
                    resolve:{
                        resolvedAuthorizationStatus: ['AuthorizationStatusService', function(AuthorizationStatusSvc) {
                            return AuthorizationStatusSvc.query();
                        }]
                    },
                    access: {
                        authorizedRoles: [USER_ROLES.all]
                    }
                })
        }
    ]);
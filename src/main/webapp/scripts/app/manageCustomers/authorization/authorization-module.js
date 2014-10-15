'use strict';

require('angular-route');

module.exports = angular.module('ppManageCustomerAuthorization', [
        'ngRoute',
        require('../../app-constants').name,
        require('../study/study-services').name,
        require('../authorizationStatus/authorizationStatus-services').name,
        require('./authorization-services').name,
        require('./authorization-controllers').name
    ])
    
    .config(['$routeProvider', '$httpProvider', '$translateProvider', 'USER_ROLES',
        function ($routeProvider, $httpProvider, $translateProvider, USER_ROLES) {
            $routeProvider
                .when('/authorization', {
                    templateUrl: 'scripts/app/manageCustomers/authorization/authorization.html',
                    controller: 'AuthorizationController',
                    resolve: {
                        resolvedAuthorization: ['AuthorizationService', function(AuthorizationSvc) {
                            return AuthorizationSvc.query();
                        }],
                        resolvedAuthorizationStatus: ['AuthorizationStatusService', function(AuthorizationStatusSvc) {
                            return AuthorizationStatusSvc.query();
                        }], 
                        resolvedStudy: ['StudyService', function(StudySvc) {
                            return StudySvc.query();
                        }]
                    },
                    access: {
                        authorizedRoles: [USER_ROLES.all]
                    }
                })
        }
    ]);
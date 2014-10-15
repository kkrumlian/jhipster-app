'use strict';

require('angular-route');

module.exports = angular.module('ppManageCustomerOrganization', [
        'ngRoute',
        require('../../app-constants').name,
        require('./organization-services').name,
        require('./organization-controllers').name
    ])
    
     .config(['$routeProvider', '$httpProvider', '$translateProvider', 'USER_ROLES',
        function($routeProvider, $httpProvider, $translateProvider, USER_ROLES) {
            $routeProvider
                .when('/organization', {
                    templateUrl: 'scripts/app/manageCustomers/organization/organization.html',
                    controller: 'OrganizationController',
                    resolve:{
                        resolvedOrganization: ['OrganizationService', function(OrganizationSvc) {
                            return OrganizationSvc.query();
                        }]
                    },
                    access: {
                        authorizedRoles: [USER_ROLES.all]
                    }
                })
        }
    ]);
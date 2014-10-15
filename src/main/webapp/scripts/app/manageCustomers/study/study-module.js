'use strict';

require('angular-route');

module.exports = angular.module('ppManageCustomerStudy', [
        'ngRoute',
        require('../../app-constants').name,
        require('../organization/organization-services').name,
        require('./study-services').name,
        require('./study-controllers').name
    ])
    
    .config(['$routeProvider', '$httpProvider', '$translateProvider', 'USER_ROLES',
        function ($routeProvider, $httpProvider, $translateProvider, USER_ROLES) {
            $routeProvider
                .when('/study', {
                    templateUrl: 'scripts/app/manageCustomers/study/study.html',
                    controller: 'StudyController',
                    resolve:{
                        resolvedStudy: ['StudyService', function(StudySvc) {
                            return StudySvc.query();
                        }],
                        resolvedOrganization: ['OrganizationService', function(OrganizationSvc) {
                            return OrganizationSvc.query();
                        }]
                    },
                    access: {
                        authorizedRoles: [USER_ROLES.all]
                    }
                })
        }]);

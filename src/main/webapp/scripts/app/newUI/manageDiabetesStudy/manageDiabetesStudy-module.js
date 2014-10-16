'use strict';

require('angular-route');

module.exports = angular.module('ppManageDiabetesStudy', [
        'ngRoute',
        require('../../app-constants').name,
        require('./manageDiabetesStudy-services').name,
        require('./manageDiabetesStudy-controllers').name
    ])

    .config(['$routeProvider', '$httpProvider', '$translateProvider', 'USER_ROLES',
        function($routeProvider, $httpProvider, $translateProvider, USER_ROLES) {
            $routeProvider
                .when('/diabetes-study', {
                    templateUrl: 'scripts/app/newUI/manageDiabetesStudy/manageDiabetesStudy.html',
                    controller: 'DiabetesStudyController',
                    resolve:{},
                    access: {
                        authorizedRoles: [USER_ROLES.all]
                    }
                })
        }
    ]);
'use strict';

/* App Module */

var jhipsterApp = angular.module('jhipsterApp', [
        'ngResource',
        'ngRoute',
        'ngCookies',
        'jhipsterAppConstants',
        'jhipsterAppUtils',
        'truncate',
        'PP-language',
        'PP-account',
        'PP-admin'
    ])

    .config(function ($routeProvider, $httpProvider, USER_ROLES) {
        $routeProvider
            .when('/error', {
                templateUrl: 'scripts/app/error-view.html',
                access: {
                    authorizedRoles: [USER_ROLES.all]
                }
            })
            .otherwise({
                templateUrl: 'scripts/app/app-view.html',
                controller: 'MainController',
                access: {
                    authorizedRoles: [USER_ROLES.all]
                }
            });
    })

    .controller('MainController', function ($scope) {
    })

    .controller('MenuController', function ($scope) {
    })

    .run(function() {
    });

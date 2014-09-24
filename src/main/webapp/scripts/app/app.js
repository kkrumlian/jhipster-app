'use strict';

define([
        'angularAMD',
        'angular-route',
        'angular-resource',
        'angular-cookies',
        'angular-sanitize',
        'bootstrap-affix',
        'bootstrap-alert',
        'bootstrap-dropdown',
        'bootstrap-tooltip',
        'bootstrap-modal',
        'bootstrap-transition',
        'bootstrap-button',
        'bootstrap-popover',
        'bootstrap-carousel',
        'bootstrap-scrollspy',
        'bootstrap-collapse',
        'bootstrap-tab',
        'utils',
        'truncate',
        'app-constants',
        'language/language-module',
        'account/account-module',
        'admin/admin-module'
    ], function( angularAMD ) {

        /* App Module */
        var app = angular.module('jhipsterApp', [
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
                console.log('MainController');
            })

            .controller('MenuController', function ($scope) {
                console.log('MenuController');
            });



        return angularAMD.bootstrap(app);
});
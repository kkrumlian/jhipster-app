'use strict';

/* App Module */

require('angular');
require('angular-resource');
require('angular-route');
require('angular-cookies');

module.exports = angular.module('ParticipantPortal', [
        'ngRoute',
        'ngResource',
        'ngCookies',
        require('./utils').name,
        require('./truncate').name,
        require('./app-constants').name,
        require('./app-directives').name,
        require('./language/language-module').name,
        require('./admin/admin-module').name,
        require('./account/account-module').name,
        require('./manageCustomers/manageCustomer-module').name
    ])

    .config(function($routeProvider, $httpProvider, USER_ROLES) {
        $routeProvider
            .otherwise({
                templateUrl: 'scripts/app/app-view.html',
                controller: 'MainController',
                access: {
                    authorizeRoles: ''
                }
            })
    })

    .controller('MainController', function ($scope) {
        console.log('MainController');
    })

    .controller('MenuController', function ($scope) {
        console.log('MenuController');
    })

    .run(function() {
        console.log('Run');
    });

'use strict';

/* App Module */

require('angular');
require('angular-resource');
require('angular-route');
require('angular-cookies');

// Flatify Angular dependencies
require('angular-animate'); 
require('angular-bootstrap');

module.exports = angular.module('ParticipantPortal', [
        // Angular Modules
        'ngRoute',
        'ngResource',
        'ngCookies',
        'ngAnimate',

        // 3rd Party Modules
        'ui.bootstrap',

        // Helper Modules
        require('./utils').name,
        require('./truncate').name,

        // Custom App Modules
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
                templateUrl: 'scripts/app/app-main-view.html',
                controller: 'MainController',
                access: {
                    authorizeRoles: ''
                }
            })
    })

    .controller('MainController', function ($rootScope, $scope, $location) {
        $scope.isSpecificPage = function() {
            var path = $location.path();
            return _.contains( ['/', '/login', '/register', '/404', '/pages/500', '/pages/login', '/pages/signin', '/pages/signin1', '/pages/signin2', '/pages/signup', '/pages/signup1', '/pages/signup2', '/pages/lock-screen'], path ) && !$rootScope.authenticated;
        };
    })

    .controller('MenuController', function ($scope) {
    })

    .controller('NavCtrl', function($scope) {
    })

    .run(function() {
        console.log('Run');
    });

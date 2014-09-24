'use strict';

define([
        'angular'
    ], function( angular ) {

        return angular.module('PP-account-logout', ['ngRoute', 'jhipsterAppConstants'])

            .config(['$routeProvider', 'USER_ROLES',
                function ($routeProvider, USER_ROLES) {
                    $routeProvider.when('/logout', {
                        templateUrl: 'scripts/app/app-view.html',
                        controller: 'LogoutController',
                        access: {
                            authorizedRoles: [USER_ROLES.all]
                        }
                    })
                }
            ])

            .controller('LogoutController', ['AuthenticationSharedService',
                function (AuthenticationSharedService) {
                    AuthenticationSharedService.logout();
                }
            ]);
    });

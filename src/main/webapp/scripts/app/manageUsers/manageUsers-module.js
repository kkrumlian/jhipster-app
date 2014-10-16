'use strict';

require('angular-route');

module.exports = angular.module('ppManageUsers',[
        'ngRoute',
        require('../app-constants').name,
        require('./manageUsers-services').name,
        require('./manageUsers-controllers').name
    ])

    .config(['$routeProvider', 'USER_ROLES',
        function($routeProvider, USER_ROLES) {
            $routeProvider.when('/manage-users', {
                templateUrl: 'scripts/app/manageUsers/manageUsers-view.html',
                controller: 'ManageUserController',
                resolve:{
                    resolvedUser: ['UserService', function(UserSvc) {
                        return UserSvc.query();
                    }]
                },
                access: {
                    authorizedRoles: [USER_ROLES.all]
                }
            })
        }
    ]);
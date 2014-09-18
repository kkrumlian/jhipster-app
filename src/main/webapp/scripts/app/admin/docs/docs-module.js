'use strict';

angular.module('PP-admin-docs', ['ngRoute', 'jhipsterAppConstants'])

    .config(['$routeProvider', 'USER_ROLES',
        function ($routeProvider, USER_ROLES) {
            $routeProvider.when('/docs', {
                templateUrl: 'scripts/app/admin/docs/docs-view.html',
                access: {
                    authorizedRoles: [USER_ROLES.admin]
                }
            })
        }
    ])
    
    .controller('DocsController', ['$scope',
        function ($scope) {}
    ]);

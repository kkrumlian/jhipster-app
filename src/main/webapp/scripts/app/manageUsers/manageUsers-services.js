'use strict';

require('angular-resource');

module.exports = angular.module('ppManageUsersServices',[
        'ngResource'
    ])

    .factory('UserService', ['$resource',
        function($resource) {
            return $resource('app/rest/users/:login', {}, {
                'query': { method: 'GET', isArray: true},
                'get': { method: 'GET'}
            });
        }
    ])

    .factory('UpdateService', ['$resource',
        function($resource) {
            return $resource('app/rest/update_info', {}, {});
        }
    ])

    .factory('ManagePasswordService', ['$resource',
        function($resource) {
            return $resource('app/rest/manage_password', {}, {});
        }
    ]);
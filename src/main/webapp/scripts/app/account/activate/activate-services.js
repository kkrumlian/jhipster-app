'use strict';

require('angular-resource');

module.exports = angular.module('ppAccountActivateServices', [
        'ngResource'
    ])

    .factory('ActivateService',['$resource',
        function($resource) {
            return $resource('app/rest/activate', {}, {
                'get': { method: 'GET', params: {}, isArray: false}
            });
        }
    ]);

'use strict';

require('angular-resource');

module.exports = angular.module('ppAccountSessionsServices', [
		'ngResource'
	])

	.factory('SessionsService', ['$resource',
        function($resource) {
            return $resource('app/rest/account/sessions/:series', {}, {
                'get': { method: 'GET', isArray: true}
            });
        }
    ]);
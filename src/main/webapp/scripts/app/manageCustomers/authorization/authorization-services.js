'use strict';

module.exports = angular.module('ppManageCustomersAuthorizationServices',[])
	.factory('AuthorizationService', ['$resource',
		function($resource) {
			return $resource('app/rest/authorizations/:id', {}, {
				'query': { method: 'GET', isArray: true},
				'get': { method: 'GET'}
			});
		}
	])


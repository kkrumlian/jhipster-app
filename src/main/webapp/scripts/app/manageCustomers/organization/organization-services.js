'use strict';

module.exports = angular.module('ppManageCustomerOrganizationServices',[])
	.factory('OrganizationService', ['$resource',
		function($resource) {
			return $resource('app/rest/organizations/:id', {}, {
				'query': { method: 'GET', isArray: true},
				'get': { method: 'GET'}
			});
		}
	]);
'user strict';

module.exports = angular.module('ppManageCustomersAuthorizationStatusServices',[])
	.factory('AuthorizationStatusService', ['$resource',
		function($resource) {
			return $resource('app/rest/authorization_statuses/:id', {}, {
				'query': { method: 'GET', isArray: true},
				'get': { method: 'GET'}
			});
		}
	]);
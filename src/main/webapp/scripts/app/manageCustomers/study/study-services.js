'use strict';

module.exports = angular.module('ppManageCustomerStudyServices',[])
	.factory('StudyService', ['$resource',
		function($resource) {
			return $resource('app/rest/studys/:id', {}, {
				'query': { method: 'GET', isArray: true},
				'get': { method: 'GET'}
			});
		}
	]);
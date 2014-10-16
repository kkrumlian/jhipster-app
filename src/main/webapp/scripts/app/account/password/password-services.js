'use strict';

require('angular-resource');

module.exports = angular.module('ppAccountPasswordServices', [
        'ngResource'
    ])
	
	.factory('PasswordService', ['$resource',
		function($resource) {
	    	return $resource('app/rest/account/change_password', {}, {});
		}
	]);

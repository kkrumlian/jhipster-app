'use strict';

require('angular-resource');

module.exports = angular.module('ppAccountRegisterServices', [
		'ngResource'
    ])

    .factory('RegisterService', ['$resource',
    	function($resource) {
        	return $resource('app/rest/register', {}, {});
    	}
	]);
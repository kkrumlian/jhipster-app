define([
		'angular',
		'admin/metrics/metrics-module',
		'admin/audits/audits-module',
		'admin/logs/logs-module',
		'admin/docs/docs-module'
	], function( angular ) {
		
		return angular.module('PP-admin', [
		        'PP-admin-metrics',
		        'PP-admin-audits',
		        'PP-admin-logs',
		        'PP-admin-docs'
			])

		    .controller('AdminController', function ($scope) {
		    });
	});
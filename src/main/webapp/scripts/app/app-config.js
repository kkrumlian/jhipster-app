'user strict';

require.config({
	baseUrl: 'scripts/app',
	paths: {
		'modernizr': '../../bower_components/modernizr/modernizr',
		'jquery': '../../bower_components/jquery/dist/jquery',
		'angular': '../../bower_components/angular/angular',
		'angularAMD': '../../bower_components/angularAMD/angularAMD',
		'angular-route': '../../bower_components/angular-route/angular-route',
		'angular-resource': '../../bower_components/angular-resource/angular-resource',
		'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
		'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
		'angular-translate': '../../bower_components/angular-translate/angular-translate',
		'angular-translate-storage-cookie': '../../bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie',
		'angular-translate-loader-static-files': '../../bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files',
		'tmhDinamicLocale': '../../bower_components/angular-dynamic-locale/src/tmhDinamicLocale',
        'bootstrap-affix': '../../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/affix',
        'bootstrap-alert': '../../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/alert',
        'bootstrap-dropdown': '../../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/dropdown',
        'bootstrap-tooltip': '../../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/tooltip',
        'bootstrap-modal': '../../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/modal',
        'bootstrap-transition': '../../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/transition',
        'bootstrap-button': '../../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/button',
        'bootstrap-popover': '../../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/popover',
        'bootstrap-carousel': '../../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/carousel',
        'bootstrap-scrollspy': '../../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/scrollspy',
        'bootstrap-collapse': '../../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/collapse',
        'bootstrap-tab': '../../bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/tab'
	},
	shim: {
		'angular': {
			deps: [
				'jquery'
			],
			exports: 'angular'
		},
		'angularAMD': ['angular'],
		'angular-route': ['angular'],
		'angular-resource': ['angular'],
		'angular-cookies': ['angular'],
		'angular-sanitize': ['angular'],
		'angular-translate': ['angular'],
		'angular-translate-storage-cookie': ['angular', 'angular-translate'],
		'angular-translate-loader-static-files': ['angular', 'angular-translate'],
		'tmhDinamicLocale': ['angular'],
		'http-auth-interceptor': ['angular'],
		'bootstrap-affix': ['jquery'],
		'bootstrap-alert': ['jquery'],
		'bootstrap-dropdown': ['jquery'],
		'bootstrap-tooltip': ['jquery'],
		'bootstrap-modal': ['jquery'],
		'bootstrap-transition': ['jquery'],
		'bootstrap-button': ['jquery'],
		'bootstrap-popover': ['jquery'],
		'bootstrap-carousel': ['jquery'],
		'bootstrap-scrollspy': ['jquery'],
		'bootstrap-collapse': ['jquery'],
		'bootstrap-tab': ['jquery']
	},
	deps: ['app']
});
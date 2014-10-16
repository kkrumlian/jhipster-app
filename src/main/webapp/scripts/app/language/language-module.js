'use strict';

require('angular-translate');
require('angular-translate-storage-cookie');
require('angular-translate-loader-static-files');
require('angular-dynamic-locale/src/tmhDinamicLocale');

module.exports = angular.module('ppLanguage', [
        'tmh.dynamicLocale',
        'pascalprecht.translate',
        require('./language-services.js').name,
        require('./language-controllers.js').name
    ])

    .config(['$translateProvider', 'tmhDynamicLocaleProvider',
        function($translateProvider, tmhDynamicLocaleProvider) {
            // Initialize angular-translate
            $translateProvider.useStaticFilesLoader({
                prefix: 'i18n/',
                suffix: '.json'
            });
    
            $translateProvider.preferredLanguage('en');
    
            $translateProvider.useCookieStorage();
    
            tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
            tmhDynamicLocaleProvider.useCookieStorage('NG_TRANSLATE_LANG_KEY');
        }
    ]);
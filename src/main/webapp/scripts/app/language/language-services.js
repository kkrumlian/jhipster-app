'use strict';

require('angular-translate');
require('angular-translate-storage-cookie');
require('angular-translate-loader-static-files');

module.exports = angular.module('ppLanguageServices', [
        'pascalprecht.translate',
        require('../app-constants').name
    ])

    .factory('LanguageService', ['$http', '$translate', 'LANGUAGES',
        function($http, $translate, LANGUAGES) {
            return {
                getBy: function(language) {
                    if (language == undefined) {
                        language = $translate.storage().get('NG_TRANSLATE_LANG_KEY');
                    }
    
                    var promise =  $http.get('/i18n/' + language + '.json').then(function(response) {
                        return LANGUAGES;
                    });

                    return promise;
                }
            };
        }
    ]);
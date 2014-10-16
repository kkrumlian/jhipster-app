'use strict';

require('angular-translate');
require('angular-translate-storage-cookie');
require('angular-translate-loader-static-files');
require('angular-dynamic-locale/src/tmhDinamicLocale');

module.exports = angular.module('ppLanguageControllers', [
        'pascalprecht.translate',
        require('../app-constants').name,
        require('./language-services').name
    ])

    .controller('LanguageController', ['$scope', '$translate', 'LanguageService',
        function($scope, $translate, LanguageService) {
            $scope.changeLanguage = function (languageKey) {
                $translate.use(languageKey);

                LanguageService.getBy(languageKey).then(function(languages) {
                    $scope.languages = languages;
                });
            };

            LanguageService.getBy().then(function (languages) {
                $scope.languages = languages;
            });
        }
    ]);
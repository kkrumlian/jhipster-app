module.exports = angular.module('ppAdmin', [
        require('./metrics/metrics-module').name,
        require('./audits/audits-module').name,
        require('./logs/logs-module').name,
        require('./docs/docs-module').name
	])

    .controller('AdminController', function ($scope) {
    });

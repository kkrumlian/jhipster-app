require('../http-auth-interceptor');

module.exports = angular.module('ppManageCustomer', [
        'http-auth-interceptor',
        require('../app-constants').name,
        require('./authorizationStatus/authorizationStatus-module').name,
        require('./organization/organization-module').name,
        require('./study/study-module').name,
        require('./authorization/authorization-module').name
    ])

    .factory('AuthorizationStatus', ['$resource',
    function ($resource) {
        return $resource('app/rest/authorization_statuses/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': { method: 'GET'}
        });
    }])

    .factory('Organization', ['$resource',
    function ($resource) {
        return $resource('app/rest/organizations/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': { method: 'GET'}
        });
    }])

    .factory('Study', ['$resource',
    function ($resource) {
        return $resource('app/rest/studys/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': { method: 'GET'}
        });
    }])

    .factory('Authorization', ['$resource',
    function ($resource) {
        return $resource('app/rest/authorizations/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': { method: 'GET'}
        });
    }])

    .controller('ManageCustomerController', function ($scope) {
    })

    .run(function() {
    });
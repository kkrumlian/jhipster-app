angular.module('PP-manageCustomer', [
        'jhipsterAppConstants',
        'http-auth-interceptor',
        'PP-manageCustomer-authorizationStatus',
        'PP-manageCustomer-organization',
        'PP-manageCustomer-study',
        'PP-manageCustomer-authorization'
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
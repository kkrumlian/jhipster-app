'use strict';

module.exports = angular.module('ppAccount', [
        require('../app-constants').name,
        require('./login/login-module').name,
        require('./logout/logout-module').name,
        require('./register/register-module').name,
        require('./settings/settings-module').name,
        require('./password/password-module').name,
        require('./sessions/sessions-module').name,
        require('./activate/activate-module').name,
        require('./account-services').name
    ])

    .run(['$rootScope', '$location', '$http', 'AuthenticationSharedService', 'CurrentSessionService', 'USER_ROLES',
        function($rootScope, $location, $http, AuthenticationSharedSvc, CurrentSessionSvc, USER_ROLES) {
            $rootScope.$on('$routeChangeStart', function(event, next) {
                $rootScope.isAuthorized = AuthenticationSharedSvc.isAuthorized;
                $rootScope.userRoles = USER_ROLES;
                AuthenticationSharedSvc.valid(next.access.authorizedRoles);
            });

            // Call when the the client is confirmed
            $rootScope.$on('event:auth-loginConfirmed', function(data) {
                $rootScope.authenticated = true;
                if ($location.path() === "/login") {
                    $location.path('/').replace();
                }
            });

            // Call when the 401 response is returned by the server
            $rootScope.$on('event:auth-loginRequired', function(rejection) {
                CurrentSessionSvc.invalidate();
                $rootScope.authenticated = false;
                if ($location.path() !== "/" && $location.path() !== "" && $location.path() !== "/register" &&
                        $location.path() !== "/activate") {
                    $location.path('/login').replace();
                }
            });

            // Call when the 403 response is returned by the server
            $rootScope.$on('event:auth-notAuthorized', function(rejection) {
                $rootScope.errorMessage = 'errors.403';
                $location.path('/error').replace();
            });

            // Call when the user logs out
            $rootScope.$on('event:auth-loginCancelled', function() {
                $location.path('');
            });
        }
    ]);

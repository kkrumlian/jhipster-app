angular.module("scripts/app/account/activate/activate-view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/app/account/activate/activate-view.html",
    "<div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2\"></div>\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <h1 translate=\"activate.title\">E-mail validation</h1>\n" +
    "\n" +
    "            <div class=\"alert alert-success\" ng-show=\"success\" translate=\"activate.messages.success\">\n" +
    "                <strong>Your username has been validated.</strong> Please authenticate.\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"alert alert-danger\" ng-show=\"error\" translate=\"activate.messages.error\">\n" +
    "                <strong>Your username could not be validated.</strong> Please use the registration form to register your username.\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"col-md-2\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/app/account/login/login-view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/app/account/login/login-view.html",
    "<div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-4\"></div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <h1 translate=\"login.title\">Authentication</h1>\n" +
    "\n" +
    "            <div class=\"alert alert-danger\" ng-show=\"authenticationError\" translate=\"login.messages.error.authentication\">\n" +
    "                <strong>Authentication failed!</strong> Please check your credentials and try again.\n" +
    "            </div>\n" +
    "            <form class=\"form\" role=\"form\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"username\" translate=\"global.form.username\">Login</label>\n" +
    "                    <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"{{'global.form.username.placeholder' | translate}}\" ng-model=\"username\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"password\" translate=\"login.form.password\">Password</label>\n" +
    "                    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"{{'login.form.password.placeholder' | translate}}\"\n" +
    "                           ng-model=\"password\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"rememberMe\">\n" +
    "                        {{\"login.form.rememberme\" | translate}}\n" +
    "                        <input type=\"checkbox\" class=\"checkbox inline_class\" id=\"rememberMe\"\n" +
    "                               ng-model=\"rememberMe\" checked>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "                <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"login()\" translate=\"login.form.button\">Authenticate</button>\n" +
    "            </form>\n" +
    "            <p></p>\n" +
    "            <div class=\"alert alert-warning\" translate=\"global.messages.info.register\">\n" +
    "                You don't have an account yet? <a href=\\\"#/register\\\">Register a new account</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/app/account/password/password-view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/app/account/password/password-view.html",
    "<div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2\"></div>\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <h2 translate=\"password.title\" translate-values=\"{username: '{{account.login}}'}\">Password for [<b>{{account.login}}</b>]</h2>\n" +
    "\n" +
    "            <div class=\"alert alert-success\" ng-show=\"success\" translate=\"password.messages.success\">\n" +
    "                <strong>Password changed!</strong>\n" +
    "            </div>\n" +
    "            <div class=\"alert alert-danger\" ng-show=\"error\"  translate=\"password.messages.error\">\n" +
    "                <strong>An error has occured!</strong> The password could not be changed.\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"alert alert-danger\" ng-show=\"doNotMatch\" translate=\"global.messages.error.dontmatch\">\n" +
    "              The password and its confirmation do not match!\n" +
    "            </div>\n" +
    "\n" +
    "            <form name=\"form\" role=\"form\" novalidate\n" +
    "                  class=\"ng-scope ng-invalid ng-invalid-required ng-dirty ng-valid-minlength\"\n" +
    "                  ng-submit=\"changePassword()\">\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label translate=\"global.form.newpassword\">New password</label>\n" +
    "                    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"{{'global.form.newpassword.placeholder' | translate}}\"\n" +
    "                           ng-model=\"password\" ng-minlength=5 ng-maxlength=50 required>\n" +
    "                    <div class=\"error\"\n" +
    "                         ng-show=\"form.password.$dirty && form.password.$invalid\">\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.password.$error.required\" translate=\"global.messages.validate.newpassword.required\">\n" +
    "                            Your password is required.\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.password.$error.minlength\" translate=\"global.messages.validate.newpassword.minlength\">\n" +
    "                            Your password is required to be at least 5 characters\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.password.$error.maxlength\" translate=\"global.messages.validate.newpassword.maxlength\">\n" +
    "                            Your password cannot be longer than 50 characters\n" +
    "                        </small>\n" +
    "                    </div>\n" +
    "                    <password-strength-bar password-to-check=\"password\"></password-strength-bar>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label translate=\"global.form.confirmpassword\">New password confirmation</label>\n" +
    "                    <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" placeholder=\"{{'global.form.confirmpassword.placeholder' | translate}}\"\n" +
    "                           ng-model=\"confirmPassword\" ng-minlength=5 ng-maxlength=50 required>\n" +
    "                    <div class=\"error\"\n" +
    "                         ng-show=\"form.confirmPassword.$dirty && form.confirmPassword.$invalid\">\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.confirmPassword.$error.required\" translate=\"global.messages.validate.confirmpassword.required\">\n" +
    "                            Your password confirmation is required.\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.confirmPassword.$error.minlength\" translate=\"global.messages.validate.confirmpassword.minlength\">\n" +
    "                            Your password confirmation is required to be at least 5 characters\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.confirmPassword.$error.maxlength\" translate=\"global.messages.validate.confirmpassword.maxlength\">\n" +
    "                            Your password confirmation cannot be longer than 50 characters\n" +
    "                        </small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-primary\" translate=\"password.form.button\">Save</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-2\"></div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("scripts/app/account/register/register-view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/app/account/register/register-view.html",
    "<div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2\"></div>\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <h1 translate=\"register.title\">Registration</h1>\n" +
    "\n" +
    "            <div class=\"alert alert-success\" ng-show=\"success\" translate=\"register.messages.success\">\n" +
    "                <strong>Registration saved!</strong> Please check your email for confirmation.\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"alert alert-danger\" ng-show=\"error\" translate=\"register.messages.error.fail\">\n" +
    "                <strong>Registration failed!</strong> Please check your input and try again.\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"alert alert-danger\" ng-show=\"errorUserExists\" translate=\"register.messages.error.userexists\">\n" +
    "                <strong>Login name already registered!</strong> Please choose another one.\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"alert alert-danger\" ng-show=\"doNotMatch\" translate=\"global.messages.error.dontmatch\">\n" +
    "                The password and its confirmation do not match!\n" +
    "            </div>\n" +
    "\n" +
    "            <form ng-show=\"!success\" name=\"form\" role=\"form\" novalidate\n" +
    "                  class=\"ng-scope ng-invalid ng-invalid-required ng-dirty ng-valid-minlength\"\n" +
    "                  ng-submit=\"register()\">\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label translate=\"global.form.username\">Login</label>\n" +
    "                    <input type=\"text\" class=\"form-control\" name=\"login\" placeholder=\"{{'global.form.username.placeholder' | translate}}\"\n" +
    "                           ng-model=\"registerAccount.login\" ng-minlength=1 ng-maxlength=50 required>\n" +
    "                    <div class=\"error\"\n" +
    "                         ng-show=\"form.login.$dirty && form.login.$invalid\">\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.login.$error.required\" translate=\"register.messages.validate.login.required\">\n" +
    "                            Your login is required.\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.login.$error.minlength\" translate=\"register.messages.validate.login.minlength\">\n" +
    "                            Your login is required to be at least 1 character\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.login.$error.maxlength\" translate=\"register.messages.validate.login.maxlength\">\n" +
    "                            Your login cannot be longer than 50 characters\n" +
    "                        </small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label translate=\"global.form.email\">E-mail</label>\n" +
    "                    <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"{{'global.form.email.placeholder' | translate}}\"\n" +
    "                           ng-model=\"registerAccount.email\" ng-minlength=5 ng-maxlength=100 required>\n" +
    "                    <div class=\"error\"\n" +
    "                         ng-show=\"form.email.$dirty && form.email.$invalid\">\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.email.$error.required\" translate=\"global.messages.validate.email.required\">\n" +
    "                            Your e-mail is required.\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.email.$error.email\" translate=\"global.messages.validate.email.invalid\">\n" +
    "                            Your e-mail is invalid.\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.email.$error.minlength\" translate=\"global.messages.validate.email.minlength\">\n" +
    "                            Your e-mail is required to be at least 5 characters\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.email.$error.maxlength\" translate=\"global.messages.validate.email.maxlength\">\n" +
    "                            Your e-mail cannot be longer than 100 characters\n" +
    "                        </small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label translate=\"global.form.newpassword\">New password</label>\n" +
    "                    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"{{'global.form.newpassword.placeholder' | translate}}\"\n" +
    "                           ng-model=\"registerAccount.password\" ng-minlength=5 ng-maxlength=50 required>\n" +
    "                    <div class=\"error\"\n" +
    "                         ng-show=\"form.password.$dirty && form.password.$invalid\">\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.password.$error.required\" translate=\"global.messages.validate.newpassword.required\">\n" +
    "                            Your password is required.\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.password.$error.minlength\" translate=\"global.messages.validate.newpassword.minlength\">\n" +
    "                            Your password is required to be at least 5 characters\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.password.$error.maxlength\" translate=\"global.messages.validate.newpassword.maxlength\">\n" +
    "                            Your password cannot be longer than 50 characters\n" +
    "                        </small>\n" +
    "                    </div>\n" +
    "                    <password-strength-bar password-to-check=\"registerAccount.password\"></password-strength-bar>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label translate=\"global.form.confirmpassword\">New password confirmation</label>\n" +
    "                    <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" placeholder=\"{{'global.form.confirmpassword.placeholder' | translate}}\"\n" +
    "                           ng-model=\"confirmPassword\" ng-minlength=5 ng-maxlength=50 required>\n" +
    "                    <div class=\"error\"\n" +
    "                         ng-show=\"form.confirmPassword.$dirty && form.confirmPassword.$invalid\">\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.confirmPassword.$error.required\" translate=\"global.messages.validate.confirmpassword.required\">\n" +
    "                            Your password confirmation is required.\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.confirmPassword.$error.minlength\" translate=\"global.messages.validate.confirmpassword.minlength\">\n" +
    "                            Your password confirmation is required to be at least 5 characters\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.confirmPassword.$error.maxlength\" translate=\"global.messages.validate.confirmpassword.maxlength\">\n" +
    "                            Your password confirmation cannot be longer than 50 characters\n" +
    "                        </small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-primary\" translate=\"register.form.button\">Register</button>\n" +
    "            </form>\n" +
    "            <p></p>\n" +
    "            <div class=\"alert alert-warning\" translate=\"global.messages.info.authenticated\">\n" +
    "                If you want to <a href=\"#/login\">authenticate</a>, you can try the default login=\"admin\" and\n" +
    "                password=\"admin\".\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-2\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/app/account/sessions/sessions-view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/app/account/sessions/sessions-view.html",
    "<div>\n" +
    "\n" +
    "    <h2 translate=\"sessions.title\" translate-values=\"{username: '{{account.login}}'}\">Active sessions for [<b>{{account.login}}</b>]</h2>\n" +
    "\n" +
    "    <div class=\"alert alert-success\" ng-show=\"success\" translate=\"sessions.messages.success\">\n" +
    "        <strong>Session invalidated!</strong>\n" +
    "    </div>\n" +
    "    <div class=\"alert alert-danger\" ng-show=\"error\" translate=\"sessions.messages.error\">\n" +
    "        <strong>An error has occured!</strong> The session could not be invalidated.\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"table-responsive\">\n" +
    "        <table class=\"table table-striped\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th translate=\"sessions.table.ipaddress\">IP Address</th>\n" +
    "                    <th translate=\"sessions.table.useragent\">User agent</th>\n" +
    "                    <th translate=\"sessions.table.date\">Date</th>\n" +
    "                    <th></th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"session in sessions\">\n" +
    "                    <td>{{session.ipAddress}}</td>\n" +
    "                    <td>{{session.userAgent}}</td>\n" +
    "                    <td>{{session.formattedTokenDate}}</td>\n" +
    "                    <td>\n" +
    "                        <button type=\"submit\"\n" +
    "                                class=\"btn btn-primary\"\n" +
    "                                ng-click=\"invalidate(session.series)\" translate=\"sessions.table.button\">\n" +
    "                                 Invalidate\n" +
    "                        </button>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/app/account/settings/settings-view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/app/account/settings/settings-view.html",
    "<div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2\"></div>\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <h2 translate=\"settings.title\" translate-values=\"{username: '{{account.login}}'}\">User settings for [<b>{{settingsAccount.login}}</b>]</h2>\n" +
    "\n" +
    "            <div class=\"alert alert-success\" ng-show=\"success\" translate=\"settings.messages.success\">\n" +
    "                <strong>Settings saved!</strong>\n" +
    "            </div>\n" +
    "            <div class=\"alert alert-danger\" ng-show=\"error\" translate=\"settings.messages.error\">\n" +
    "                <strong>An error has occured!</strong> Settings could not be saved.\n" +
    "            </div>\n" +
    "\n" +
    "            <form name=\"form\" role=\"form\" novalidate\n" +
    "                  class=\"ng-scope ng-invalid ng-invalid-required ng-dirty ng-valid-minlength\"\n" +
    "                  ng-submit=\"save()\">\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label translate=\"settings.form.firstname\">First Name</label>\n" +
    "                    <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"{{'settings.form.firstname.placeholder' | translate}}\"\n" +
    "                           ng-model=\"settingsAccount.firstName\" ng-minlength=1 ng-maxlength=50 required>\n" +
    "                    <div class=\"error\"\n" +
    "                         ng-show=\"form.firstName.$dirty && form.firstName.$invalid\">\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.firstName.$error.required\" translate=\"settings.messages.validate.firstname.required\">\n" +
    "                            Your first name is required.\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.firstName.$error.minlength\" translate=\"settings.messages.validate.firstname.minlength\">\n" +
    "                            Your first name is required to be at least 1 character\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.firstName.$error.maxlength\" translate=\"settings.messages.validate.firstname.maxlength\">\n" +
    "                            Your first name cannot be longer than 50 characters\n" +
    "                        </small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label translate=\"settings.form.lastname\">Last Name</label>\n" +
    "                    <input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"{{'settings.form.lastname.placeholder' | translate}}\"\n" +
    "                           ng-model=\"settingsAccount.lastName\" ng-minlength=1 ng-maxlength=50 required>\n" +
    "                    <div class=\"error\"\n" +
    "                         ng-show=\"form.lastName.$dirty && form.lastName.$invalid\">\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.lastName.$error.required\" translate=\"settings.messages.validate.lastname.required\">\n" +
    "                            Your last name is required.\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.lastName.$error.minlength\" translate=\"settings.messages.validate.lastname.minlength\">\n" +
    "                            Your last name is required to be at least 1 character\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.lastName.$error.maxlength\" translate=\"settings.messages.validate.lastname.maxlength\">\n" +
    "                            Your last name cannot be longer than 50 characters\n" +
    "                        </small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label translate=\"global.form.email\">E-mail</label>\n" +
    "                    <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"{{'global.form.email.placeholder' | translate}}\"\n" +
    "                           ng-model=\"settingsAccount.email\" ng-minlength=5 ng-maxlength=100 required>\n" +
    "                    <div class=\"error\"\n" +
    "                         ng-show=\"form.email.$dirty && form.email.$invalid\">\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.email.$error.required\" translate=\"global.messages.validate.email.required\">\n" +
    "                            Your e-mail is required.\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.email.$error.email\" translate=\"global.messages.validate.email.invalid\">\n" +
    "                            Your e-mail is invalid.\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.email.$error.minlength\" translate=\"global.messages.validate.email.minlength\">\n" +
    "                            Your e-mail is required to be at least 5 characters\n" +
    "                        </small>\n" +
    "                        <small class=\"error\"\n" +
    "                               ng-show=\"form.email.$error.maxlength\" translate=\"global.messages.validate.email.maxlength\">\n" +
    "                            Your e-mail cannot be longer than 100 characters\n" +
    "                        </small>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <button type=\"submit\" ng-disabled=\"form.$invalid\" class=\"btn btn-primary\" translate=\"settings.form.button\">Save</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-2\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/app/admin/audits/audits-view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/app/admin/audits/audits-view.html",
    "<div>\n" +
    "    <h2 translate=\"audits.title\">Audits</h2>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-5\">\n" +
    "            <h4 translate=\"audits.filter.title\">Filter by date</h4>\n" +
    "            <p class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\" translate=\"audits.filter.from\">from</span>\n" +
    "                <input type=\"date\" class=\"input-sm form-control\" name=\"start\" ng-model=\"fromDate\" ng-change=\"onChangeDate()\" required/>\n" +
    "                <span class=\"input-group-addon\" translate=\"audits.filter.to\">to</span>\n" +
    "                <input type=\"date\" class=\"input-sm form-control\" name=\"end\" ng-model=\"toDate\" ng-change=\"onChangeDate()\" required/>\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <table class=\"table table-condensed table-striped table-bordered table-responsive\">\n" +
    "        <thead>\n" +
    "        <tr>\n" +
    "            <th ng-click=\"predicate = 'timestamp'; reverse=!reverse\">{{'audits.table.header.date' | translate}}</th>\n" +
    "            <th ng-click=\"predicate = 'principal'; reverse=!reverse\">{{'audits.table.header.principal' | translate}}</th>\n" +
    "            <th ng-click=\"predicate = 'type'; reverse=!reverse\">{{'audits.table.header.status' | translate}}</th>\n" +
    "            <th ng-click=\"predicate = 'data.message'; reverse=!reverse\">{{'audits.table.header.data' | translate}}</th>\n" +
    "        </tr>\n" +
    "        </thead>\n" +
    "\n" +
    "        <tr ng-repeat=\"audit in audits | filter:filter | orderBy:predicate:reverse\" ng-hide=\"audit.filtered\">\n" +
    "            <td><span>{{audit.timestamp| date:'medium'}}</span></td>\n" +
    "            <td><small>{{audit.principal}}</small></td>\n" +
    "            <td>{{audit.type}}</td>\n" +
    "            <td>\n" +
    "                <span ng-show=\"audit.data.message\">{{audit.data.message}}</span>\n" +
    "                <span ng-show=\"audit.data.remoteAddress\">{{'audits.table.data.remoteAddress' | translate}} {{audit.data.remoteAddress}}</span>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>");
}]);

angular.module("scripts/app/admin/docs/docs-view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/app/admin/docs/docs-view.html",
    "<iframe src=\"swagger-ui/index.html\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\"\n" +
    "        width=\"100%\" height=\"900\" scrolling=\"auto\" target='_top'></iframe>\n" +
    "");
}]);

angular.module("scripts/app/admin/logs/logs-view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/app/admin/logs/logs-view.html",
    "<div>\n" +
    "    <h2 translate=\"logs.title\">Logs</h2>\n" +
    "\n" +
    "    <p translate=\"logs.nbloggers\" translate-values=\"{total: '{{ loggers.length }}'}\">There are {{ loggers.length }} loggers.</p>\n" +
    "\n" +
    "    {{'logs.filter' | translate}} <input type=\"text\" ng-model=\"filter\" class=\"form-control\">\n" +
    "\n" +
    "    <table class=\"table table-condensed table-striped table-bordered table-responsive\">\n" +
    "        <thead>\n" +
    "        <tr title=\"click to order\">\n" +
    "            <th ng-click=\"predicate = 'name'; reverse=!reverse\" >{{'logs.table.name' | translate}}</th>\n" +
    "            <th ng-click=\"predicate = 'level'; reverse=!reverse\">{{'logs.table.level' | translate}}</th>\n" +
    "        </tr>\n" +
    "        </thead>\n" +
    "\n" +
    "        <tr ng-repeat=\"logger in loggers | filter:filter | orderBy:predicate:reverse\">\n" +
    "            <td><small>{{logger.name | characters:140}}</small></td>\n" +
    "            <td>\n" +
    "                <button ng-click=\"changeLevel(logger.name, 'TRACE')\" ng-class=\"(logger.level=='TRACE') ? 'btn-danger' : 'btn-default'\" class=\"btn btn-default btn-xs\">TRACE</button>\n" +
    "                <button ng-click=\"changeLevel(logger.name, 'DEBUG')\" ng-class=\"(logger.level=='DEBUG') ? 'btn-warning' : 'btn-default'\" class=\"btn btn-default btn-xs\">DEBUG</button>\n" +
    "                <button ng-click=\"changeLevel(logger.name, 'INFO')\" ng-class=\"(logger.level=='INFO') ? 'btn-info' : 'btn-default'\" class=\"btn btn-default btn-xs\">INFO</button>\n" +
    "                <button ng-click=\"changeLevel(logger.name, 'WARN')\" ng-class=\"(logger.level=='WARN') ? 'btn-success' : 'btn-default'\" class=\"btn btn-default btn-xs\">WARN</button>\n" +
    "                <button ng-click=\"changeLevel(logger.name, 'ERROR')\" ng-class=\"(logger.level=='ERROR') ? 'btn-primary' : 'btn-default'\" class=\"btn btn-default btn-xs\">ERROR</button>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>");
}]);

angular.module("scripts/app/admin/metrics/metrics-view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/app/admin/metrics/metrics-view.html",
    "<div>\n" +
    "\n" +
    "<h2 translate=\"metrics.title\">Application Metrics</h2>\n" +
    "<p>\n" +
    "    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"refresh()\"><span class=\"glyphicon glyphicon-refresh\"></span>&nbsp;{{'metrics.refresh.button' | translate}}</button>\n" +
    "</p>\n" +
    "\n" +
    "<h3 translate=\"metrics.health.title\">Health Checks</h3>\n" +
    "<div id=\"healthCheck\" class=\"row\">\n" +
    "    <div class=\"col-md-3\" ng-show=\"healthCheck.db.status == 'UP'\">\n" +
    "        <div class=\"alert alert-success\"><strong translate=\"metrics.health.database\">Database: </strong>OK</div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\" ng-show=\"healthCheck.db.status != 'UP'\">\n" +
    "        <div class=\"alert alert-danger\">\n" +
    "            <strong translate=\"metrics.health.database\">Database: </strong>ERROR\n" +
    "            <span ng-show=\"healthCheck.db.error\">\n" +
    "                <a class=\"hand\" ng-click=\"showDatabaseException = !showDatabaseException\">\n" +
    "                    <i class=\"glyphicon glyphicon-eye-open\"></i>\n" +
    "                </a>\n" +
    "                <div class=\"popover\" ng-show=\"showDatabaseException\">\n" +
    "                    <div class=\"popover-title\">\n" +
    "                        <h4>{{'metrics.health.stacktrace' | translate}}<button type=\"button\" class=\"close\" ng-click=\"showDatabaseException = !showDatabaseException\">x</button></h4>\n" +
    "                    </div>\n" +
    "                    <div class=\"popover-content\">\n" +
    "                        <pre>{{healthCheck.db.error}}</pre>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </span>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-3\" ng-show=\"healthCheck.mail.status == 'UP'\" >\n" +
    "        <div class=\"alert alert-success\"><strong translate=\"metrics.health.email\">Email: </strong>OK</div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\" ng-show=\"healthCheck.mail.status != 'UP'\">\n" +
    "        <div class=\"alert alert-danger\">\n" +
    "            <strong translate=\"metrics.health.email\">Email: </strong>ERROR\n" +
    "            <span ng-show=\"healthCheck.mail.error\">\n" +
    "                <a class=\"hand\" ng-click=\"showEmailException = !showEmailException\">\n" +
    "                    <i class=\"glyphicon glyphicon-eye-open\"></i>\n" +
    "                </a>\n" +
    "                <div class=\"popover\" ng-show=\"showEmailException\">\n" +
    "                    <div class=\"popover-title\">\n" +
    "                        <h4>{{'metrics.health.stacktrace' | translate}}<button type=\"button\" class=\"close\" ng-click=\"showEmailException = !showEmailException\">x</button></h4>\n" +
    "                    </div>\n" +
    "                    <div class=\"popover-content\">\n" +
    "                        <pre>{{healthCheck.mail.error}}</pre>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<h3 translate=\"metrics.jvm.title\">JVM Metrics</h3>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <b translate=\"metrics.jvm.memory.title\">Memory</b>\n" +
    "        <p>{{'metrics.jvm.memory.total' | translate}} ({{metrics.gauges['jvm.memory.total.used'].value / 1000000 | number:0}}M / {{metrics.gauges['jvm.memory.total.max'].value / 1000000 | number:0}}M)</p>\n" +
    "        <div class=\"progress progress-striped\">\n" +
    "            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\"\n" +
    "                 aria-valuenow=\"{{metrics.gauges['jvm.memory.total.used'].value / 1000000 | number:0}}\"\n" +
    "                 aria-valuemin=\"0\"\n" +
    "                 aria-valuemax=\"{{metrics.gauges['jvm.memory.total.max'].value / 1000000 | number:0}}\"\n" +
    "                 style=\"width: {{metrics.gauges['jvm.memory.total.used'].value * 100 / metrics.gauges['jvm.memory.total.max'].value  | number:0}}%\">\n" +
    "                {{metrics.gauges['jvm.memory.total.used'].value * 100 / metrics.gauges['jvm.memory.total.max'].value  | number:0}}%\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <p>{{'metrics.jvm.memory.heap' | translate}} ({{metrics.gauges['jvm.memory.heap.used'].value / 1000000 | number:0}}M / {{metrics.gauges['jvm.memory.heap.max'].value / 1000000 | number:0}}M)</p>\n" +
    "        <div class=\"progress progress-striped\">\n" +
    "            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\"\n" +
    "                 aria-valuenow=\"{{metrics.gauges['jvm.memory.heap.used'].value / 1000000 | number:0}}\"\n" +
    "                 aria-valuemin=\"0\"\n" +
    "                 aria-valuemax=\"{{metrics.gauges['jvm.memory.heap.max'].value / 1000000 | number:0}}\"\n" +
    "                 style=\"width: {{metrics.gauges['jvm.memory.heap.usage'].value * 100 | number:0}}%\">\n" +
    "                {{(metrics.gauges['jvm.memory.heap.usage'].value * 100 | number:0)}}%\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <p>{{'metrics.jvm.memory.nonheap' | translate}} ({{metrics.gauges['jvm.memory.non-heap.used'].value / 1000000 | number:0}}M / {{metrics.gauges['jvm.memory.non-heap.max'].value / 1000000 | number:0}}M)</p>\n" +
    "        <div class=\"progress progress-striped\">\n" +
    "            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\"\n" +
    "                 aria-valuenow=\"{{metrics.gauges['jvm.memory.non-heap.used'].value / 1000000 | number:0}}\"\n" +
    "                 aria-valuemin=\"0\"\n" +
    "                 aria-valuemax=\"{{metrics.gauges['jvm.memory.non-heap.max'].value / 1000000 | number:0}}\"\n" +
    "                 style=\"width: {{metrics.gauges['jvm.memory.non-heap.usage'].value * 100 | number:0}}%\">\n" +
    "                {{(metrics.gauges['jvm.memory.non-heap.usage'].value * 100 | number:0)}}%\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <b translate=\"metrics.jvm.threads.title\">Threads</b> (Total: {{metrics.gauges['jvm.threads.count'].value}}) <a class=\"hand\" ng-click=\"threadDump()\" data-toggle=\"modal\" data-target=\"#threadDump\"><i class=\"glyphicon glyphicon-eye-open\"></i></a>\n" +
    "        <p>{{'metrics.jvm.threads.runnable' | translate}} {{metrics.gauges['jvm.threads.runnable.count'].value}}</p>\n" +
    "        <div class=\"progress progress-striped\">\n" +
    "            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\"\n" +
    "                 aria-valuenow=\"{{metrics.gauges['jvm.threads.runnable.count'].value}}\"\n" +
    "                 aria-valuemin=\"0\"\n" +
    "                 aria-valuemax=\"{{metrics.gauges['jvm.threads.count'].value}}\"\n" +
    "                 style=\"width: {{metrics.gauges['jvm.threads.runnable.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:0}}%\">\n" +
    "                {{metrics.gauges['jvm.threads.runnable.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:0}}%\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <p>{{'metrics.jvm.threads.timedwaiting' | translate}} ({{metrics.gauges['jvm.threads.timed_waiting.count'].value}})</p>\n" +
    "        <div class=\"progress progress-striped\">\n" +
    "            <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\"\n" +
    "                 aria-valuenow=\"{{metrics.gauges['jvm.threads.timed_waiting.count'].value}}\"\n" +
    "                 aria-valuemin=\"0\"\n" +
    "                 aria-valuemax=\"{{metrics.gauges['jvm.threads.count'].value}}\"\n" +
    "                 style=\"width: {{metrics.gauges['jvm.threads.timed_waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:0}}%\">\n" +
    "                {{metrics.gauges['jvm.threads.timed_waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:0}}%\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <p>{{'metrics.jvm.threads.waiting' | translate}} ({{metrics.gauges['jvm.threads.waiting.count'].value}})</p>\n" +
    "        <div class=\"progress progress-striped\">\n" +
    "            <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\"\n" +
    "                 aria-valuenow=\"{{metrics.gauges['jvm.threads.waiting.count'].value}}\"\n" +
    "                 aria-valuemin=\"0\"\n" +
    "                 aria-valuemax=\"{{metrics.gauges['jvm.threads.count'].value}}\"\n" +
    "                 style=\"width: {{metrics.gauges['jvm.threads.waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:0}}%\">\n" +
    "                {{metrics.gauges['jvm.threads.waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:0}}%\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <p>{{'metrics.jvm.threads.blocked' | translate}}  ({{metrics.gauges['jvm.threads.blocked.count'].value}})</p>\n" +
    "        <div class=\"progress progress-striped\">\n" +
    "            <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\"\n" +
    "                 aria-valuenow=\"{{metrics.gauges['jvm.threads.blocked.count'].value}}\"\n" +
    "                 aria-valuemin=\"0\"\n" +
    "                 aria-valuemax=\"{{metrics.gauges['jvm.threads.count'].value}}\"\n" +
    "                 style=\"width: {{metrics.gauges['jvm.threads.blocked.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:0}}%\">\n" +
    "                {{metrics.gauges['jvm.threads.blocked.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:0}}%\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-4\">\n" +
    "        <b translate=\"metrics.jvm.gc.title\">Garbage collections</b>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-9\" translate=\"metrics.jvm.gc.marksweepcount\">Mark Sweep count</div>\n" +
    "            <div class=\"col-md-3\">{{metrics.gauges['jvm.garbage.PS-MarkSweep.count'].value}}</div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-9\" translate=\"metrics.jvm.gc.marksweeptime\">Mark Sweep time</div>\n" +
    "            <div class=\"col-md-3\">{{metrics.gauges['jvm.garbage.PS-MarkSweep.time'].value}}ms</div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-9\" translate=\"metrics.jvm.gc.scavengecount\">Scavenge count</div>\n" +
    "            <div class=\"col-md-3\">{{metrics.gauges['jvm.garbage.PS-Scavenge.count'].value}}</div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-9\" translate=\"metrics.jvm.gc.scavengetime\">Scavenge time</div>\n" +
    "            <div class=\"col-md-3\">{{metrics.gauges['jvm.garbage.PS-Scavenge.time'].value}}ms</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<h3 translate=\"metrics.jvm.http.title\">HTTP requests (events per second)</h3>\n" +
    "<p>{{'metrics.jvm.http.active' | translate}} <b>{{metrics.counters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.activeRequests'].count | number:0}}</b> - {{'metrics.jvm.http.total' | translate}} <b>{{metrics.timers['com.codahale.metrics.servlet.AbstractInstrumentedFilter.requests'].count | number:0}}</b></p>\n" +
    "<div class=\"table-responsive\">\n" +
    "    <table class=\"table table-striped\">\n" +
    "        <thead>\n" +
    "        <tr>\n" +
    "            <th translate=\"metrics.jvm.http.table.code\">Code</th>\n" +
    "            <th translate=\"metrics.jvm.http.table.count\">Count</th>\n" +
    "            <th translate=\"metrics.jvm.http.table.mean\">Mean</th>\n" +
    "            <th>{{'metrics.jvm.http.table.average' | translate}} (1 min)</th>\n" +
    "            <th>{{'metrics.jvm.http.table.average' | translate}} (5 min)</th>\n" +
    "            <th>{{'metrics.jvm.http.table.average' | translate}} (15 min)</th>\n" +
    "        </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "        <tr>\n" +
    "            <td translate=\"metrics.jvm.http.code.ok\">OK</td>\n" +
    "            <td>\n" +
    "                <div class=\"progress progress-striped\">\n" +
    "                    <div class=\"progress-bar progress-bar-success\" role=\"progressbar\"\n" +
    "                         aria-valuenow=\"{{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.ok'].count * 100 / metrics.timers['com.codahale.metrics.servlet.AbstractInstrumentedFilter.requests'].count}}\"\n" +
    "                         aria-valuemin=\"0\"\n" +
    "                         aria-valuemax=\"{{metrics.timers['com.codahale.metrics.servlet.AbstractInstrumentedFilter.requests'].count}}\"\n" +
    "                         style=\"width: {{(metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.ok'].count * 100 / metrics.timers['com.codahale.metrics.servlet.AbstractInstrumentedFilter.requests'].count) | number:0}}%\">\n" +
    "                        {{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.ok'].count}}\n" +
    "                    </div>\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.ok'].mean_rate | number:2}}\n" +
    "            </td>\n" +
    "            <td>{{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.ok'].m1_rate | number:2}}\n" +
    "            </td>\n" +
    "            <td>{{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.ok'].m5_rate | number:2}}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.ok'].m15_rate | number:2}}\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td translate=\"metrics.jvm.http.code.notfound\">Not Found</td>\n" +
    "            <td>\n" +
    "                <div class=\"progress progress-striped\">\n" +
    "                    <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\"\n" +
    "                         aria-valuenow=\"{{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.notFound'].count * 100 / metrics.timers['com.codahale.metrics.servlet.AbstractInstrumentedFilter.requests'].count}}\"\n" +
    "                         aria-valuemin=\"0\"\n" +
    "                         aria-valuemax=\"{{metrics.timers['com.codahale.metrics.servlet.AbstractInstrumentedFilter.requests'].count}}\"\n" +
    "                         style=\"width:{{(metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.notFound'].count * 100 / metrics.timers['com.codahale.metrics.servlet.AbstractInstrumentedFilter.requests'].count) | number:0}}%\">\n" +
    "                        {{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.notFound'].count}}\n" +
    "                    </div>\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.notFound'].mean_rate | number:2}}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.notFound'].m1_rate | number:2}}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.notFound'].m5_rate | number:2}}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.notFound'].m15_rate | number:2}}\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td translate=\"metrics.jvm.http.code.servererror\">Server error</td>\n" +
    "            <td>\n" +
    "                <div class=\"progress progress-striped\">\n" +
    "                    <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\"\n" +
    "                         aria-valuenow=\"{{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.serverError'].count * 100 / metrics.timers['com.codahale.metrics.servlet.AbstractInstrumentedFilter.requests'].count}}\"\n" +
    "                         aria-valuemin=\"0\"\n" +
    "                         aria-valuemax=\"{{metrics.timers['com.codahale.metrics.servlet.AbstractInstrumentedFilter.requests'].count}}\"\n" +
    "                         style=\"width:{{(metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.serverError'].count * 100 / metrics.timers['com.codahale.metrics.servlet.AbstractInstrumentedFilter.requests'].count) | number:0}}%\">\n" +
    "                        {{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.serverError'].count}}\n" +
    "                    </div>\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.serverError'].mean_rate | number:2}}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.serverError'].m1_rate | number:2}}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.serverError'].m5_rate | number:2}}\n" +
    "            </td>\n" +
    "            <td>\n" +
    "                {{metrics.meters['com.codahale.metrics.servlet.AbstractInstrumentedFilter.responseCodes.serverError'].m15_rate | number:2}}\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>\n" +
    "\n" +
    "<h3 translate=\"metrics.servicesstats.title\">Services statistics (time in millisecond)</h3>\n" +
    "<div class=\"table-responsive\">\n" +
    "    <table class=\"table table-striped\">\n" +
    "        <thead>\n" +
    "        <tr>\n" +
    "            <th translate=\"metrics.servicesstats.table.name\">Service name</th>\n" +
    "            <th translate=\"metrics.servicesstats.table.count\">Count</th>\n" +
    "            <th translate=\"metrics.servicesstats.table.mean\">Mean</th>\n" +
    "            <th translate=\"metrics.servicesstats.table.min\">Min</th>\n" +
    "            <th translate=\"metrics.servicesstats.table.p50\">p50</th>\n" +
    "            <th translate=\"metrics.servicesstats.table.p75\">p75</th>\n" +
    "            <th translate=\"metrics.servicesstats.table.p95\">p95</th>\n" +
    "            <th translate=\"metrics.servicesstats.table.p99\">p99</th>\n" +
    "            <th translate=\"metrics.servicesstats.table.max\">Max</th>\n" +
    "        </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "        <tr ng-repeat=\"(k, v) in servicesStats\">\n" +
    "            <td>{{k}}</td>\n" +
    "            <td>{{v.count}}</td>\n" +
    "            <td>{{v.mean * 1000 | number:0}}</td>\n" +
    "            <td>{{v.min * 1000 | number:0}}</td>\n" +
    "            <td>{{v.p50 * 1000 | number:0}}</td>\n" +
    "            <td>{{v.p75 * 1000 | number:0}}</td>\n" +
    "            <td>{{v.p95 * 1000 | number:0}}</td>\n" +
    "            <td>{{v.p99 * 1000 | number:0}}</td>\n" +
    "            <td>{{v.max * 1000 | number:0}}</td>\n" +
    "        </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>\n" +
    "\n" +
    "<h3 translate=\"metrics.ehcache.title\">Ehcache statistics</h3>\n" +
    "<div class=\"table-responsive\">\n" +
    "    <table class=\"table table-striped\">\n" +
    "        <thead>\n" +
    "        <tr>\n" +
    "            <th translate=\"metrics.ehcache.cachename\">Cache name</th>\n" +
    "            <th translate=\"metrics.ehcache.objects\">Objects</th>\n" +
    "            <th translate=\"metrics.ehcache.hits\">Hits</th>\n" +
    "            <th translate=\"metrics.ehcache.misses\">Misses</th>\n" +
    "            <th translate=\"metrics.ehcache.evictioncount\">Eviction count</th>\n" +
    "            <th translate=\"metrics.ehcache.mean\">Mean get time (ms)</th>\n" +
    "        </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "        <tr ng-repeat=\"(k, v) in cachesStats\" ng-once>\n" +
    "            <td>{{v.name}}</td>\n" +
    "            <td>{{metrics.gauges[k + '.objects'].value}}</td>\n" +
    "            <td>{{metrics.gauges[k + '.hits'].value}}</td>\n" +
    "            <td>{{metrics.gauges[k + '.misses'].value}}</td>\n" +
    "            <td>{{metrics.gauges[k + '.eviction-count'].value}}</td>\n" +
    "            <td>{{metrics.gauges[k + '.mean-get-time'].value | number:2}}</td>\n" +
    "        </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>\n" +
    "\n" +
    "</div>\n" +
    "<!-- Modal used to display the threads dump -->\n" +
    "<div id=\"threadDump\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog modal-lg\">\n" +
    "        <div class=\"modal-content\">\n" +
    "\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n" +
    "                <h4 class=\"modal-title\" id=\"myModalLabel\" translate=\"metrics.jvm.threads.dump.title\">Threads dump</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body well\">\n" +
    "                <span class=\"label label-primary\" ng-click=\"threadDumpFilter = {}\">{{'metrics.jvm.threads.all' | translate}}&nbsp;<span class=\"badge\">{{threadDumpAll}}</span></span>&nbsp;\n" +
    "                <span class=\"label label-success\" ng-click=\"threadDumpFilter = {threadState: 'RUNNABLE'}\">{{'metrics.jvm.threads.waiting' | translate}}&nbsp;<span class=\"badge\">{{threadDumpRunnable}}</span></span>&nbsp;\n" +
    "                <span class=\"label label-info\" ng-click=\"threadDumpFilter = {threadState: 'WAITING'}\">{{'metrics.jvm.threads.waiting' | translate}}&nbsp;<span class=\"badge\">{{threadDumpWaiting}}</span></span>&nbsp;\n" +
    "                <span class=\"label label-warning\" ng-click=\"threadDumpFilter = {threadState: 'TIMED_WAITING'}\">{{'metrics.jvm.threads.timedwaiting' | translate}}&nbsp;<span class=\"badge\">{{threadDumpTimedWaiting}}</span></span>&nbsp;\n" +
    "                <span class=\"label label-danger\" ng-click=\"threadDumpFilter = {threadState: 'BLOCKED'}\">{{'metrics.jvm.threads.blocked' | translate}}&nbsp;<span class=\"badge\">{{threadDumpBlocked}}</span></span>&nbsp;\n" +
    "                <div class=\"voffset2\">&nbsp;</div>\n" +
    "                <div class=\"row\" ng-repeat=\"(k, v) in threadDump | filter:threadDumpFilter\">\n" +
    "                    <h5><span class=\"label\" ng-class=\"getLabelClass(v.threadState)\">&nbsp;</span>&nbsp;{{v.threadName}} ({{'metrics.jvm.threads.dump.id' | translate}} {{v.threadId}})</h5>\n" +
    "                    <table class=\"table table-condensed\">\n" +
    "                        <thead>\n" +
    "                        <tr>\n" +
    "                            <th translate=\"metrics.jvm.threads.dump.blockedtime\">Blocked Time</th>\n" +
    "                            <th translate=\"metrics.jvm.threads.dump.blockedcount\">Blocked Count</th>\n" +
    "                            <th translate=\"metrics.jvm.threads.dump.waitedtime\">Waited Time</th>\n" +
    "                            <th translate=\"metrics.jvm.threads.dump.waitedcount\">Waited Count</th>\n" +
    "                            <th translate=\"metrics.jvm.threads.dump.lockname\">Lock Name</th>\n" +
    "                            <th translate=\"metrics.jvm.threads.dump.stacktrace\">StackTrace</th>\n" +
    "                        </tr>\n" +
    "                        </thead>\n" +
    "                        <tbody>\n" +
    "                        <tr>\n" +
    "                            <td>{{v.blockedTime}}</td>\n" +
    "                            <td>{{v.blockedCount}}</td>\n" +
    "                            <td>{{v.waitedTime}}</td>\n" +
    "                            <td>{{v.waitedCount}}</td>\n" +
    "                            <td>{{v.lockName}}</td>\n" +
    "                            <td>\n" +
    "                                <a ng-click=\"show = !show\" data-placement=\"left\" >\n" +
    "                                    <span ng-show=\"!show\" translate=\"metrics.jvm.threads.dump.show\">show</span>\n" +
    "                                    <span ng-show=\"show\" translate=\"metrics.jvm.threads.dump.hide\">hide</span>\n" +
    "                                </a>\n" +
    "                                <div class=\"popover left\" ng-show=\"show\">\n" +
    "                                    <div class=\"popover-title\">\n" +
    "                                        <h4>{{'metrics.jvm.threads.dump.stacktrace' | translate}}<button type=\"button\" class=\"close\" ng-click=\"show = !show\">x</button></h4>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"popover-content\">\n" +
    "                                        <div ng-repeat=\"(stK, stV) in v.stackTrace\">\n" +
    "                                            {{stV.className}}.{{stV.methodName}}({{stV.fileName}}:{{stV.lineNumber}})\n" +
    "                                            <span class=\"voffset1\"></span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </td>\n" +
    "                        </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/app/app-view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/app/app-view.html",
    "<div ng-cloak>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <span class=\"hipster img-responsive img-rounded\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <h1 translate=\"main.title\">Welcome, Java Hipster!</h1>\n" +
    "            <p class=\"lead\" translate=\"main.subtitle\">This is your homepage</p>\n" +
    "\n" +
    "            <div ng-switch=\"authenticated\">\n" +
    "                <div class=\"alert alert-success\" ng-switch-when=\"true\"\n" +
    "                     translate=\"main.logged.message\" translate-values=\"{username: '{{account.login}}'}\">\n" +
    "                    You are logged in as user \"Admin\".\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"alert alert-warning\" ng-switch-when=\"false\" translate=\"global.messages.info.authenticated\">\n" +
    "                    If you want to <a href=\"#/login\">authenticate</a>, you can try the default login=\"admin\" and\n" +
    "                    password=\"admin\".\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"alert alert-warning\" ng-switch-when=\"false\" translate=\"global.messages.info.register\">\n" +
    "                    Don't have an account? <a href=\\\"#/register\\\">Register</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <p translate=\"main.question\">\n" +
    "                If you have any question on JHipster:\n" +
    "            </p>\n" +
    "\n" +
    "            <ul>\n" +
    "                <li><a href=\"http://jhipster.github.io/\" target=\"_blank\" translate=\"main.link.homepage\">JHipster homepage</a></li>\n" +
    "                <li><a href=\"http://stackoverflow.com/tags/jhipster/info\" target=\"_blank\" translate=\"main.link.stackoverflow\">JHipster on Stack Overflow</a></li>\n" +
    "                <li><a href=\"https://github.com/jhipster/generator-jhipster/issues?state=open\" target=\"_blank\" translate=\"main.link.bugtracker\">JHipster bug tracker</a></li>\n" +
    "                <li><a href=\"https://twitter.com/java_hipster\" target=\"_blank\"  translate=\"main.link.contact\">contact @java_hipster on Twitter</a></li>\n" +
    "            </ul>\n" +
    "\n" +
    "            <p>\n" +
    "             <span translate=\"main.like\">If you like JHipster, don't forget to give us a star on </span>&nbsp;<a href=\"https://github.com/jhipster/generator-jhipster\" target=\"_blank\" translate=\"main.github\">Github</a>!\n" +
    "            </p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("scripts/app/error-view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("scripts/app/error-view.html",
    "<div ng-cloak>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <span class=\"hipster img-responsive img-rounded\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <h1 translate=\"errors.title\">Error Page!</h1>\n" +
    "\n" +
    "            <div ng-switch=\"authenticated\" ng-show=\"errorMessage\">\n" +
    "                <div class=\"alert alert-success\" ng-switch-when=\"true\"\n" +
    "                     translate=\"{{errorMessage}}\" translate-values=\"{username: '{{account.login}}'}\">\n" +
    "                    You are logged in as user \"Admin\".\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

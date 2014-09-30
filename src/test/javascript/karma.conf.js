// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../../..',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine', 'browserify'],

        // list of files / patterns to load in the browser
        files: [
            'src/main/webapp/scripts/vendor.js',
            'src/main/webapp/scripts/app/app.js',
            'src/test/javascript/**/!(karma.conf).js'
        ],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 9876,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],

        // Browserify config (all optional)
        browserify: {
          // extensions: ['.coffee'],
          // ignore: [],
          transform: ['debowerify'],
          // debug: true,
          // noParse: ['jquery'],
          watch: true
        },

        // Add browserify to preprocessors
        preprocessors: {
            'src/main/webapp/scripts/vendor.js': ['browserify'],
            'src/main/webapp/scripts/app/app.js': ['browserify'],
            'src/test/javascript/spec/servicesSpec.js': ['browserify']
        }
    });
};

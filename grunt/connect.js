var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = function(grunt, options) {
  return {
    proxies: [
      {
        context: '/app',
        host: 'localhost',
        port: 8080,
        https: false,
        changeOrigin: false
      },
      {
        context: '/metrics',
        host: 'localhost',
        port: 8080,
        https: false,
        changeOrigin: false
      },
      {
        context: '/dump',
        host: 'localhost',
        port: 8080,
        https: false,
        changeOrigin: false
      },
      {
        context: '/api-docs',
        host: 'localhost',
        port: 8080,
        https: false,
        changeOrigin: false
      },
      {
        context: '/console',
        host: 'localhost',
        port: 8080,
        https: false,
        changeOrigin: false
       }
    ],
    options: {
      port: 9000,
      // Change this to 'localhost' to deny access to the server from outside.
      hostname: '0.0.0.0',
      livereload: 35729
    },
    livereload: {
      options: {
        open: true,
        base: [
          '.tmp',
          'src/main/webapp'
        ],
        middleware: function (connect) {
          return [
            proxySnippet,
            connect.static('.tmp'),
            connect.static('src/main/webapp')
          ];
        }
      }
    },
    test: {
      options: {
       port: 9001,
        base: [
          '.tmp',
          'test',
          'src/main/webapp'
        ]
      }
    },
    dist: {
      options: {
        base: '<%= yeoman.dist %>'
      }
    }
  };
};
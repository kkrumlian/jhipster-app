module.exports = (grunt, options) ->
  server: (target) ->
    
    if target is 'dist'
      grunt.task.run(['build', 'connect:dist:keepalive'])
    else
      grunt.task.run(['build', 'configureProxies', 'connect:livereload', 'watch']);

  test: [
    # 'clean:server'
    # 'concurrent:test'
    # 'autoprefixer'
    # 'connect:test'
    # 'karma'
  ]

  build: [
    'clean:dist'
    'browserify'
    'htmlmin'
    'ngtemplates'
    'concurrent:dist'
    'autoprefixer'
    # 'concat'
    'copy:dist'
    'includeSource'
    'ngAnnotate'
    # 'cssmin'
    'replace'
    'uglify'
    # 'rev'
  ]

  buildHeroku: [
     'test'
     'build'
     'copy:generateHerokuDirectory'
  ]

  deployHeroku: [
      'test'
      'build'
      'copy:generateHerokuDirectory'
      'buildcontrol:heroku'
  ]

  buildOpenshift: [
    'test'
    'build'
    'copy:generateOpenshiftDirectory'
  ]

  deployOpenshift: [
    'test'
    'build'
    'copy:generateOpenshiftDirectory'
    'buildcontrol:openshift'
  ]

  default: [
    'test'
    'build'
  ]
module.exports = (grunt, options) ->
  server: (target) ->
    
    if target is 'dist'
      grunt.task.run(['build', 'connect:dist:keepalive'])
    else
      grunt.task.run(['clean:server', 'concurrent:server', 'autoprefixer', 'configureProxies', 'connect:livereload', 'watch']);

  test: [
    'clean:server'
    'concurrent:test'
    'autoprefixer'
    'connect:test'
    'karma'
  ]

  build: [
    'clean:dist'
    'html2js'
    'useminPrepare'
    'concurrent:dist'
    'autoprefixer'
    'concat'
    'copy:dist'
    'ngAnnotate'
    'cssmin'
    'replace'
    'uglify'
    'rev'
    'usemin'
    'htmlmin'
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
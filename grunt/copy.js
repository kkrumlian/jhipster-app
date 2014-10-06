module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: 'src/main/webapp',
      dest: '<%= yeoman.dist %>',
      src: [
        '*.html',
        'images/{,*/}*.{png,gif,webp}',
        'fonts/*',
        'styles/*.css'
      ]
    }, {
      expand: true,
      cwd: '.tmp/images',
      dest: '<%= yeoman.dist %>/images',
      src: [
        'generated/*'
      ]
    }]
  },
  styles: {
    expand: true,
    cwd: 'src/main/webapp/styles',
    dest: '.tmp/styles/',
    src: '{,*/}*.css'
  },
  generateHerokuDirectory: {
      expand: true,
      dest: 'deploy/heroku',
      src: [
        'pom.xml',
        'src/main/**'
    ]
  },
  generateOpenshiftDirectory: {
      expand: true,
      dest: 'deploy/openshift',
      src: [
        'pom.xml',
        'src/main/**'
    ]
  },
}
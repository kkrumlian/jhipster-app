module.exports = {
  browserify: {
    files: ['src/main/webapp/scripts/**/*.js'],
    tasks: ['browserify']
  },
  compass: {
    files: ['src/main/scss/{,*/}*.{scss,sass}'],
    tasks: ['compass:server', 'autoprefixer']
  },
  styles: {
    files: ['src/main/webapp/styles/{,*/}*.css'],
    tasks: ['copy:styles', 'autoprefixer']
  },
  livereload: {
    options: {
      livereload: 35729
    },
    files: [
      'src/main/webapp/**/*.html',
      '.tmp/styles/{,*/}*.css',
      '{.tmp/,}src/main/webapp/scripts/{,*/}*.js',
      'src/main/webapp/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  }
};
module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'src/main/webapp/images',
      src: '{,*/}*.{jpg,jpeg}', // we don't optimize PNG files as it doesn't work on Linux. If you are not on Linux, feel free to use '{,*/}*.{png,jpg,jpeg}'
      dest: '<%= yeoman.dist %>/images'
    }]
  }
}
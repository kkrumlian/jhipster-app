module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'src/main/webapp/images',
      src: '{,*/}*.svg',
      dest: '<%= yeoman.dist %>/images'
    }]
  }
};
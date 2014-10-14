module.exports = {
  dist: {
    files: {
      '<%= yeoman.dist %>/scripts/vendor.js': ['.tmp/scripts/vendor.js'],
      '<%= yeoman.dist %>/scripts/app.js': ['.tmp/scripts/app.js'],
      '<%= yeoman.dist %>/scripts/app-views.js': ['.tmp/scripts/app-views.js']
    }
  }
};
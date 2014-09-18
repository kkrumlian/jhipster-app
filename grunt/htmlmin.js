module.exports = {
  dist: {
    options: {
      removeCommentsFromCDATA: true,
      // https://github.com/yeoman/grunt-usemin/issues/44
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      conservativeCollapse: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true
    },
    files: [{
      expand: true,
      cwd: '<%= yeoman.dist %>',
      src: ['*.html', 'views/*.html'],
      dest: '<%= yeoman.dist %>'
    }]
  }
}
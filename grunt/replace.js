module.exports = {
  dist: {
    src: ['<%= yeoman.dist %>/index.html'],
    overwrite: true,                 // overwrite matched source files
    replacements: [{
		from: '<div class="development"></div>',
		to: ''
    }]
  }
}
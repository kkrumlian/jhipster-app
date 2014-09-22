module.exports = {
	jhipsterApp: {
		src: '.tmp/views/app/**/*.html',
		dest: '.tmp/views/app-views.js',
		options: {
			usemin: 'scripts/app.js',
			url: function(url) {
				return url.replace('.tmp/views/','scripts/');
			}
		}
	}
};
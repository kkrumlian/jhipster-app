module.exports = {
	ParticipantPortal: {
		src: '.tmp/views/app/**/*.html',
		dest: '.tmp/scripts/app-views.js',
		options: {
			url: function(url) {
				return url.replace('.tmp/views/','scripts/');
			}
		}
	}
};
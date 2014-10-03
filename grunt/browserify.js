module.exports = {
	options: {
		transform: ['debowerify']
	},
	dist: {
		files: [
			{ '.tmp/scripts/vendor.js': ['src/main/webapp/scripts/vendor.js'] },
			{ '.tmp/scripts/app.js': ['src/main/webapp/scripts/app/app.js'] }
		]
	}
}
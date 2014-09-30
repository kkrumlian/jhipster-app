module.exports = {
	options: {
		transform: ['debowerify']
	},
	dist: {
		files: [
			{ 'src/main/webapp/dist/scripts/vendor.js': ['src/main/webapp/scripts/vendor.js'] },
			{ 'src/main/webapp/dist/scripts/app.js': ['src/main/webapp/scripts/app/app.js'] }
		]
	}
}
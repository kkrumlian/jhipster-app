module.exports = {
  dist: {
    options: {
      base: 'src/main/webapp',
      module: false
    },
    src: [ 'src/main/webapp/scripts/app/**/*.html' ],
    dest: 'src/main/webapp/scripts/app/app-views.js'
  }
};
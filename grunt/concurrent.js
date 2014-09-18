module.exports = {
  server: [
    'compass:server',
    'copy:styles'
  ],
  test: [
    'compass',
    'copy:styles'
  ],
  dist: [
    'compass:dist',
    'copy:styles',
    'imagemin',
    'svgmin'
  ]
}
module.exports = {
  options: {
    sassDir: 'src/main/scss',
    cssDir: 'src/main/webapp/styles',
    generatedImagesDir: '.tmp/images/generated',
    imagesDir: 'src/main/webapp/images',
    javascriptsDir: 'src/main/webapp/scripts',
    fontsDir: 'src/main/webapp/styles/fonts',
    importPath: 'src/main/webapp/bower_components',
    httpImagesPath: '/images',
    httpGeneratedImagesPath: '/images/generated',
    httpFontsPath: '/styles/fonts',
    relativeAssets: false
  },
  dist: {},
  server: {
    options: {
      debugInfo: true
    }
  }
}
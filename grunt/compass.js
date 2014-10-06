module.exports = {
  options: {
    sassDir: 'src/main/webapp/styles/scss',
    cssDir: 'src/main/webapp/styles',
    generatedImagesDir: '.tmp/images/generated',
    imagesDir: 'src/main/webapp/images',
    javascriptsDir: 'src/main/webapp/scripts',
    fontsDir: 'src/main/webapp/fonts',
    importPath: 'src/main/webapp/scripts/vendor',
    httpImagesPath: '/images',
    httpGeneratedImagesPath: '/images/generated',
    httpFontsPath: '/styles/fonts',
    relativeAssets: true
  },
  dist: {
    options: {
      debugInfo: false,
      noLineComments: true
    }
  },
  server: {
    options: {
      debugInfo: true
    }
  }
}
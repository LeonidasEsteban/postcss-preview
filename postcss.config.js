// const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
      // require('precss'),
      // require('autoprefixer')({
      //   grid: true,
      //   add: false
      // }),
      // autoprefixer({
      //   grid: true,
      // }),
      require('postcss-import'),
      require('postcss-cssnext')({
        features: {
          autoprefixer: {
            grid: true,
          },
          // customProperties: false,
          // calc: false,
          // customMedia: false,
          // mediaQueriesRange: false,
        }
      }),
    ]
}

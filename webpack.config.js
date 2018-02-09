module.exports = {
  entry: './js/home.js',
  output: {
    filename: './js/home.post.js',
  },
  module: {
    rules: [
      {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
              {
                  loader: 'style-loader',
              },
              {
                  loader: 'css-loader',
                  options: {
                      importLoaders: 1,
                  }
              },
              {
                  loader: 'postcss-loader'
              }
          ]
      }
    ]
  }
}

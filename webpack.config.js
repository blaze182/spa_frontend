var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    'whatwg-fetch', // https://github.com/github/fetch
    'webpack-hot-middleware/client?http://0.0.0.0:4000', // host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel!eslint-loader'
      }
    ]
  }
}

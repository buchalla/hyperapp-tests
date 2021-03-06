const path = require('path');

module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "./build/bundle.js",
    path: path.resolve(__dirname, './'),
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel-loader"
    }]
  },
  devServer: {
    historyApiFallback: true
  },
}

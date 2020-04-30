const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    // host: '0.0.0.0', // if using Docker
    // host: localhost,
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
    inline: true,
    headers: { 'Access-Control-Allow-Origin' : '*'},
    proxy: {
      '*': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // may be unnecessary
          }
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
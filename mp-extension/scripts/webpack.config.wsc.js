const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, '../src/app.json'),
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      BUILD_TARGET: JSON.stringify('wsc')
    }),
    new CopyWebpackPlugin([{
      from: 'src/icons',
      to: 'icons',
    }])
  ]
});

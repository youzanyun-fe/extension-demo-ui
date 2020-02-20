const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge')
const MiniPlugin = require('mini-program-webpack-loader').plugin;
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const baseResolve = require('./webpack.config.base.resolve');
const sharedResolve = require('./webpack.config.shared.resolve');
const baseLoaders = require('./webpack.config.base.loaders');
const baseCacheGroups = require('./webpack.config.base.cachegroups');
const { setSubPackageCacheGroup } = require('./lib/util')

const APP_TYPE = process.env.APP_NAME

const extfile = true

module.exports = {
  mode: 'development',
  target: 'node',
  devtool: false,
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000
  },
  resolve: merge(baseResolve, sharedResolve),
  module: { rules: baseLoaders },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true
          },
          output: {
            comments: false
          }
        }
      })
    ],
    concatenateModules: false,
    // minimize: false,
    concatenateModules: false,
    splitChunks: {
      cacheGroups: baseCacheGroups
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production')
    }),
    new MiniPlugin({
      extfile,
      analyze: false,
      resources: [
       // path.join(__dirname, '../shared')
      ],
      setSubPackageCacheGroup
    })
  ]
}

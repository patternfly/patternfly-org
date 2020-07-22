const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const serverConfig = () => {
  return {
    entry: {
      'ssr-bundle': './src/app.js'
    },
    output: {
      filename: 'ssr-bundle.js',
      path: path.resolve('.cache/ssr-build'),
			libraryTarget: 'commonjs2',
    },
    target: 'node',
    plugins: [
      new webpack.DefinePlugin({
        'process.env.PRERENDER': true
      }),
    ],
    optimization: {
      minimize: false
    },
    externals: ['react', 'react-dom', '@reach/router']
  };
}

module.exports = (env = {}, argv) => merge(
  baseConfig(env, argv),
  serverConfig(env, argv)
);

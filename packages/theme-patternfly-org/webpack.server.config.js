const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const serverConfig = () => {
  return {
    entry: './src/app.js',
    output: {
      path: path.resolve('.cache/ssr-build'), // Don't bloat `public` dir
			libraryTarget: 'commonjs2' // Use module.exports
    },
    target: 'node', // Load chunks using require
    plugins: [
      new webpack.DefinePlugin({
        'process.env.PRERENDER': true // In app.js don't call ReactDOM.render
      }),
      new webpack.NormalModuleReplacementPlugin(
        /d3-timer/, // This stops prerender from hanging in `yarn build:client`
        res => res.request = require.resolve('theme-patternfly-org/helpers/d3-timer.js')
      )
    ],
    optimization: {
      splitChunks: false,
      minimize: false // Faster build, easier debugging
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: 'null-loader'
        }
      ]
    },
    // Load in prerender.js instead
    externals: ['react', 'react-dom', '@reach/router']
  };
}

module.exports = (env = {}, argv) => merge(
  baseConfig(env, argv),
  serverConfig(env, argv)
);

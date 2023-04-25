const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const reactCSSRegex = /(react-[\w-]+\/dist|react-styles\/css)\/.*\.css$/;

const serverConfig = async (env, argv) => {
  const isProd = argv.mode === 'production';
  return {
    output: {
      path: path.resolve('.cache/ssr-build'), // Don't bloat `public` dir
			libraryTarget: 'commonjs2' // Use module.exports
    },
    target: 'node', // Load chunks using require
    plugins: [
      new webpack.DefinePlugin({
        'process.env.PRERENDER': true // In app.js don't call ReactDOM.render
      }),
    ],
    optimization: {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
      minimize: false // Faster build, easier debugging
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: 'null-loader'
        },
        // This does weird things to document
        {
          test: /(novnc-core|@novnc\/novnc)\/.*\.js/,
          use: 'null-loader'
        },
      ]
    },
    resolve: {
      alias: {
        // This stops prerender from hanging in `yarn build:client`
        'd3-timer': '@patternfly/documentation-framework/helpers/d3-timer',
        // The maintainer will not allow his bundle to be required from a node context
        // https://github.com/xtermjs/xterm.js/pull/3134
        'xterm':  '@patternfly/documentation-framework/helpers/xterm',
        'xterm-addon-fit':  '@patternfly/documentation-framework/helpers/xterm-addon-fit',
      },
    },
    // Load in prerender.js instead
    externals: ['react', 'react-dom', '@reach/router']
  };
}

module.exports = async (env = {}, argv) => merge(
  baseConfig(env, argv),
  await serverConfig(env, argv)
);

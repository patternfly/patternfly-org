const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const serverConfig = () => {
  return {
    entry: './src/app.js',
    output: {
      // filename: 'ssr-bundle.js', // Need consistent name to import in `prerender.js`
      path: path.resolve('.cache/ssr-build'), // Don't bloat `public` dir
			libraryTarget: 'commonjs2' // Use module.exports
    },
    target: 'node', // Load chunks using require
    plugins: [
      new webpack.DefinePlugin({
        'process.env.PRERENDER': true // In app.js don't call ReactDOM.render
      })
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
    externals: ['react', 'react-dom', '@reach/router'] // Load in prerender.js instead
  };
}

module.exports = (env = {}, argv) => merge(
  baseConfig(env, argv),
  serverConfig(env, argv)
);

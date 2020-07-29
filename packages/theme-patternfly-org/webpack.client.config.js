const path = require('path');
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base.config');
const getHtmlWebpackPlugins = require('./scripts/getHtmlWebpackPlugins');
const getRoutes = require(path.join(process.cwd(), 'src/routes'));

const pfDir = path.dirname(require.resolve('@patternfly/patternfly/package.json'));

const clientConfig = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/app.js',
    output: {
      path: path.resolve('public'),
      filename: '[name].[contenthash:8].bundle.js'
    },
    devServer: {
      historyApiFallback: true,
      port: 8003
    },
    optimization: {
      splitChunks: {
        minSize: 1500, // MTU
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            priority: 1,
          }
        },
      },
      minimize: isProd ? true : false,
      runtimeChunk: 'single',
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          // versions.json will later be copied to the root www dir
          { from: path.join(__dirname, 'versions.json'), to: 'versions.json' },
          { from: path.join(pfDir, 'assets/images/'), to: 'assets/images/' },
          { from: path.join(pfDir, 'assets/fonts/'), to: 'assets/fonts/' }
        ]
      }),
      ...getHtmlWebpackPlugins(getRoutes(false).routes, isProd), // Create an HTML page per route
      ...(env.analyze ? [new BundleAnalyzerPlugin()] : []) // webpack --env analyze
    ]
  };
}

module.exports = (env = {}, argv) => merge(
  baseConfig(env, argv),
  clientConfig(env, argv)
);

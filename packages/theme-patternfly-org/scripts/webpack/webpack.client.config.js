const path = require('path');
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base.config');
const { getHtmlWebpackPlugins } = require('./getHtmlWebpackPlugins');

const pfDir = path.dirname(require.resolve('@patternfly/patternfly/package.json'));
// Don't include PatternFly styles twice
const reactCSSRegex = /(react-[\w-]+\/dist|react-styles\/css)\/.*\.css$/;

const clientConfig = async (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/app.js',
    output: {
      path: path.resolve('public'),
      filename: '[name].[hash].bundle.js'
    },
    devServer: {
      historyApiFallback: true,
      port: 8003,
      clientLogLevel: 'info',
      stats: 'minimal'
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        // https://webpack.js.org/plugins/mini-css-extract-plugin/#extracting-all-css-in-a-single-file
        cacheGroups: {
          // We need patternfly.css to come before our styles because of selector specificity
          vendorStyles: {
            name: 'vendor-styles',
            test: /[\\/]node_modules[\\/].*\.css$/,
            priority: 2
          },
          mainStyles: {
            name: 'main-styles',
            test: /\.css$/,
            priority: 1
          }
        },
      },
      minimize: isProd ? true : false,
      minimizer: [
        new TerserPlugin({
          cache: path.join(process.cwd(), '.cache/terser'),
          ...(process.env.CI ? { parallel: 2 } : {})
        }),
      ],
      runtimeChunk: 'single',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: reactCSSRegex,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !isProd
              },
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    require('autoprefixer')({
                      env: '>0.25%, not ie 11, not op_mini all',
                      flexbox: false,
                      grid: false
                    })
                  ]
                }
              }
            }
          ]
        },
        {
          test: reactCSSRegex,
          use: 'null-loader'
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css',
      }),
      new CopyPlugin({
        patterns: [
          // versions.json will later be copied to the root www dir
          { from: path.join(__dirname, '../../versions.json'), to: 'versions.json' },
          { from: path.join(pfDir, 'assets/images/'), to: 'assets/images/' },
          { from: path.join(pfDir, 'assets/fonts/'), to: 'assets/fonts/' }
        ]
      }),
      ...await getHtmlWebpackPlugins(isProd), // Create an HTML page per route
      ...(isProd
        ? [
        ]
        : []),
      ...(env === 'analyze'
        ? [
          new BundleAnalyzerPlugin({
            generateStatsFile: true,
            statsFilename: 'webpack.stats.json'
          })
        ]
        : [])
    ]
  };
}

// https://webpack.js.org/configuration/configuration-types/#exporting-a-promise
module.exports = async (env = {}, argv) => merge(
  baseConfig(env, argv),
  await clientConfig(env, argv)
);

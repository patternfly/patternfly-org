const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SizePlugin = require('size-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const pfDir = path.dirname(require.resolve('@patternfly/patternfly/package.json'));
// Don't include PatternFly styles twice
const reactCSSRegex = /(react-[\w-]+\/dist|react-styles\/css)\/.*\.css$/;

module.exports = (_env, argv) => {
  const isDev = argv.mode === 'development'

  return {
    entry: './src/app.js',
    output: {
      path: path.resolve('public'),
      filename: '[name].[contenthash:8].bundle.js'
    },
    devtool: isDev ? 'cheap-module-source-map' : 'source-map',
    devServer: {
      historyApiFallback: true,
      port: 8003
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
    },
    module: {
      rules: [
        {
          test: /\.[tj]sx?$/,
          include: [
            path.resolve(process.cwd(), 'src'),
            path.resolve(__dirname), // Temporarily compile theme using webpack for development
            /react-[\w-]+\/src\/.*\/examples/
          ],
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: '.cache',
              cacheCompression: false,
              presets: [['@babel/preset-env', {
                loose: true,
                corejs: 3,
                useBuiltIns: 'entry',
                exclude: ['transform-regenerator', 'transform-async-to-generator'],
              }]],
              plugins: [
                '@babel/plugin-transform-react-jsx',
                '@babel/plugin-proposal-class-properties',
                ...(isDev ? [require.resolve('react-refresh/babel')] : [])
              ],
            }
          },
        },
        {
          test: /\.css$/,
          exclude: reactCSSRegex,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDev,
              },
            },
            {
              loader: 'css-loader',
            }
          ]
        },
        {
          test: reactCSSRegex,
          use: 'null-loader'
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            }
          ]
        },
        {
          test: /.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css',
      }),
      new webpack.HashedModuleIdsPlugin(),
      new CopyPlugin({
        patterns: [
          { from: path.join(__dirname, 'versions.json'), to: 'versions.json' },
          { from: path.join(pfDir, 'assets/images/'), to: 'assets/images/' },
          { from: path.join(pfDir, 'assets/fonts/'), to: 'assets/fonts/' }
        ]
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isDev ? '"development"' : '"production"'
      }),
      ...(isDev
        ? [
          new ReactRefreshWebpackPlugin()
        ]
        : [
          new CleanWebpackPlugin(),
          new SizePlugin(),
          // new BundleAnalyzerPlugin(),
        ]
      ),
    ],
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
      minimize: isDev ? false : true,
      runtimeChunk: 'single',
    },
    stats: 'minimal',
  };
}

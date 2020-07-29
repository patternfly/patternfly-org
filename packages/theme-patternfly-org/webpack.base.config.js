const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SizePlugin = require('size-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { pathPrefix } = require(`${process.cwd()}/patternfly-docs.config`);

// Don't include PatternFly styles twice
const reactCSSRegex = /(react-[\w-]+\/dist|react-styles\/css)\/.*\.css$/;

module.exports = (_env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    output: {
      publicPath: isProd ? `${pathPrefix}/` : '/'
    },
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
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
                ...(isProd ? [] : [require.resolve('react-refresh/babel')])
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
                hmr: isProd,
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
                fallback: 'file-loader',
                name: '[name]-[contenthash:5].[ext]',
                outputPath: 'images/'
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
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isProd ? "'production'" : "'development'"
      }),
      new FaviconsWebpackPlugin({
        logo: path.resolve(__dirname, 'images/patternfly-logo.svg'),
        favicons: {
          cache: true,
          background: '#4F5255',
          theme_color: '#151515',
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: false,
            coast: false,
            favicons: true,
            firefox: false,
            windows: false,
            yandex: false
          },
          start_url: '/'
        }
      }),
      ...(isProd
        ? [
          new webpack.HashedModuleIdsPlugin(), // Hashes based on module content
          new CleanWebpackPlugin(),
          new SizePlugin()
        ]
        : [
          new ReactRefreshWebpackPlugin()
        ]
      )
    ],
    stats: isProd ? 'normal' : 'minimal'
  };
}

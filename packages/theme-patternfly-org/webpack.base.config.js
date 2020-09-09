const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { pathPrefix } = require(`${process.cwd()}/patternfly-docs.config`);

module.exports = (_env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    output: {
      publicPath: isProd ? `${pathPrefix}/` : '/',
      pathinfo: false, // https://webpack.js.org/guides/build-performance/#output-without-path-info,
      hashDigestLength: 8
    },
    amd: false,
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? false : 'cheap-module-source-map',
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
              cacheDirectory: '.cache/babel',
              cacheCompression: false,
              presets: [['@babel/preset-env', {
                loose: true,
                corejs: 3,
                useBuiltIns: 'entry',
                exclude: ['transform-regenerator', 'transform-async-to-generator'],
              }]],
              plugins: [
                '@babel/plugin-transform-react-jsx',
                '@babel/plugin-proposal-class-properties'
              ],
            }
          },
        },
        {
          test: /\.(png|jpe?g|webp)$/,
          include: [
            path.resolve(process.cwd(), 'src'),
            path.resolve(__dirname), // Temporarily compile theme using webpack for development
            /react-[\w-]+\/src\/.*\/examples/
          ],
          use: [
            {
              loader: 'responsive-loader',
              options: {
                adapter: require('responsive-loader/sharp'),
                name: '[name].[contenthash].[ext]',
                outputPath: 'images/'
              },
            }
          ]
        },
        {
          test: /\.(png|jpe?g|webp|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1024,
                fallback: 'file-loader',
                name: '[name].[contenthash].[ext]',
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
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isProd ? "'production'" : "'development'"
      }),
      new FaviconsWebpackPlugin({
        logo: path.resolve(__dirname, 'images/patternfly-logo.svg'),
        favicons: {
          appDescription: 'Home of PatternFly Design.',
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
          new CleanWebpackPlugin()
        ]
        : []
      )
    ],
    stats: 'minimal'
  };
}

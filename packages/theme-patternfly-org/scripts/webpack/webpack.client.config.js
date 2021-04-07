const path = require('path');
const fs = require('fs');
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base.config');
const { getHtmlWebpackPlugins } = require('./getHtmlWebpackPlugins');

let pfDir;
try {
  pfDir = path.dirname(require.resolve('@patternfly/patternfly/package.json'));
}
catch {
  // Inside core workspace
  pfDir = path.join(process.cwd(), 'dist');
}
const staticDir = path.join(process.cwd(), 'static/');
// Don't include PatternFly styles twice
const reactCSSRegex = /(react-[\w-]+\/dist|react-styles\/css)\/.*\.css$/;
const reactJSRegex = /react-([^\\/]*)[\\/]dist[\\/].*\.js$/

const clientConfig = async (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    output: {
      path: path.resolve('public'),
      filename: '[name].[hash].bundle.js'
    },
    devServer: {
      hot: true,
      historyApiFallback: true,
      port: argv.port,
      clientLogLevel: 'info',
      stats: 'minimal'
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        // https://webpack.js.org/plugins/mini-css-extract-plugin/#extracting-all-css-in-a-single-file
        cacheGroups: {
          vendorStyles: {
            test: /[\\/]node_modules[\\/].*\.css$/,
            priority: 10
          },
          mainStyles: {
            test: /\.css$/,
            priority: 9
          },
          // This speeds up reloads 2x in React and doesn't affect org's reload times
          ...(!isProd && {
            reactPackage: {
              test: reactJSRegex,
              name(module, _chunks, cacheGroupKey) {
                const package = module.identifier().match(reactJSRegex)[1];
                return `${cacheGroupKey}-${package}`;
              },
              reuseExistingChunk: true,
              priority: 5
            },
          }),
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            enforce: true,
            reuseExistingChunk: true,
            priority: 3
          },
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
      new MiniCssExtractPlugin(!isProd ? {} : {
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css',
      }),
      new CopyPlugin({
        patterns: [
          // versions.json will later be copied to the root www dir
          { from: path.join(__dirname, '../../versions.json'), to: 'versions.json' },
          { from: path.join(pfDir, 'assets/images/'), to: 'assets/images/' },
          { from: path.join(pfDir, 'assets/fonts/'), to: 'assets/fonts/' },
          ...(fs.existsSync(staticDir) ? [{ from: staticDir, to: '' }] : [])
        ]
      }),
      ...await getHtmlWebpackPlugins({ isProd, ...argv }), // Create an HTML page per route
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

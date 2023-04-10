const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = (_env, argv) => {
  const {
    pathPrefix = '',
    mode,
    googleAnalyticsID = false,
    algolia = {},
    hasGdprBanner = false,
    hasFooter = false,
    hasVersionSwitcher = false,
    hasDesignGuidelines = false,
    hasDarkThemeSwitcher = false,
    componentsData = {},
    sideNavItems = [],
    topNavItems = [],
    includePaths = []
  } = argv;

  const isProd = mode === 'production';

  return {
    entry: path.resolve(__dirname, '../../app.js'),
    output: {
      publicPath: isProd ? `${pathPrefix}/` : '/',
      pathinfo: false, // https://webpack.js.org/guides/build-performance/#output-without-path-info,
      hashDigestLength: 8,
      clean: true, // Clean the output directory before emit.
    },
    amd: false, // We don't use any AMD modules, helps performance
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? false : 'cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.[tj]sx?$/,
          include: [
            path.resolve(process.cwd(), 'src'),
            path.resolve(process.cwd(), 'patternfly-docs'),
            path.resolve(process.cwd(), 'examples'),
            path.resolve(__dirname, '../..'), // Temporarily compile theme using webpack for development
            /react-[\w-]+\/src\/.*\/examples/,
            /react-[\w-]+\\src\\.*\\examples/, // fix for Windows
            /react-[\w-]+\/patternfly-docs\/.*\/examples/, //fixes for extensions
            /react-[\w-]+\\patternfly-docs\\.*\\examples/,
          ].concat(includePaths.map(path => new RegExp(path))),
          exclude: [
            path.resolve(__dirname, '../../node_modules'), // Temporarily compile theme using webpack for development
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
                modules: false,
                targets: "> 0.25%, not dead"
              }]],
              plugins: [
                '@babel/plugin-transform-react-jsx',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-optional-chaining',
                ["@babel/plugin-proposal-private-methods", { "loose": false }],
                ["@babel/plugin-proposal-private-property-in-object", { "loose": false }]
              ],
            }
          },
        },
        {
          test: /\.(png|jpe?g|webp)$/,
          use: {
            loader: 'responsive-loader',
            options: {
              adapter: require('responsive-loader/sharp'),
              name: '[name].[contenthash].[ext]',
              outputPath: 'images/'
            },
          }
        },
        {
          test: /\.(gif|svg)$/,
          type: 'asset/resource',
          dependency: { not: ['url'] },
          generator: {
            filename: 'images/[hash][ext][query]'
          }
        },
        {
          test: /\.(pdf)$/,
          type: 'asset/resource',
          dependency: { not: ['url'] },
          generator: {
            filename: '[hash][ext][query]'
          }
        },
        {
          test: /.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          type: 'asset/resource',
          dependency: { not: ['url'] },
          generator: {
            filename: 'fonts/[name][ext][query]'
          }
        },
      ]
    },
    resolve: {
      // Allow importing client routes
      alias: {
        'client-styles': path.resolve(process.cwd(), 'patternfly-docs/patternfly-docs.css.js'),
        './routes-client': path.resolve(process.cwd(), 'patternfly-docs/patternfly-docs.routes.js'),
        './routes-generated': path.resolve(process.cwd(), 'patternfly-docs/generated/index.js'),
        process: "process/browser"
      },
      modules: [
        'node_modules',
        ...module.paths,
      ],
      fallback: {
        "path": require.resolve("path-browserify")
      },
    },
    // Use this module's node_modules first (for use in Core/React workspaces)
    resolveLoader: {
      modules: module.paths,
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(mode),
        'process.env.pathPrefix': JSON.stringify(isProd ? pathPrefix : ''),
        'process.env.googleAnalyticsID': JSON.stringify(isProd ? googleAnalyticsID : ''),
        'process.env.algolia': JSON.stringify(algolia),
        'process.env.hasGdprBanner': JSON.stringify(hasGdprBanner),
        'process.env.hasFooter': JSON.stringify(hasFooter),
        'process.env.hasVersionSwitcher': JSON.stringify(hasVersionSwitcher),
        'process.env.hasDesignGuidelines': JSON.stringify(hasDesignGuidelines),
        'process.env.hasDarkThemeSwitcher': JSON.stringify(hasDarkThemeSwitcher),
        'process.env.componentsData': JSON.stringify(componentsData),
        'process.env.sideNavItems': JSON.stringify(sideNavItems),
        'process.env.topNavItems': JSON.stringify(topNavItems),
        'process.env.prnum': JSON.stringify(process.env.CIRCLE_PR_NUMBER || process.env.PR_NUMBER || ''),
        'process.env.prurl': JSON.stringify(process.env.CIRCLE_PULL_REQUEST || '')
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: path.join(__dirname, '../../assets'), to: 'assets' }
        ]
      }),
      new MonacoWebpackPlugin({
        globalAPI: true,
      })
    ],
    stats: 'minimal'
  };
}

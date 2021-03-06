const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // eslint-disable-line import/no-unresolved
const CleanWebpackPlugin = require('clean-webpack-plugin'); // eslint-disable-line import/no-unresolved
const webpack = require('webpack'); // eslint-disable-line import/no-unresolved
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // eslint-disable-line import/no-unresolved
const Autoprefixer = require('autoprefixer'); // eslint-disable-line import/no-unresolved, import/no-extraneous-dependencies
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const entryPoints = require('./webpack/getContent.js');
const createTopicIndex = require('./webpack/createIndex.js');
const recordBuildTime = require('./webpack/recordBuildTime.js');
const setFilesForBuild = require('./webpack/setFilesForBuild.js');
const FlaskReloaderPlugin = require('./webpack/flaskReloaderPlugin');

const buildPath = path.join(__dirname, 'app', 'app', 'static', 'dist');

// eslint-disable-next-line no-console
console.log('Record Build Time');
const buildTime = recordBuildTime(path.join(__dirname, 'app/app'));
// eslint-disable-next-line no-console
console.log(buildTime);

const envConfig = {
  prod: {
    name: 'production',
    shortName: 'prod',
    uglify: true,
    webpackMode: 'production',
    devtool: false,
    uglifySourceMap: false,
    reactDevMode: false,
    outputFilename: `[name]-[chunkhash]-${buildTime.shortDate}.js`,
    imageFileName: '[path][name].[ext]',
    cssFileName: `[name]-[contenthash]-${buildTime.shortDate}.css`,
  },
  stage: {
    name: 'stage',
    shortName: 'stage',
    uglify: true,
    webpackMode: 'production',
    devtool: 'source-map',
    uglifySourceMap: true,
    reactDevMode: false,
    outputFilename: `[name]-[chunkhash]-${buildTime.shortDate}.js`,
    imageFileName: '[path][name].[ext]',
    cssFileName: `[name]-[contenthash]-${buildTime.shortDate}.css`,
  },
  dev: {
    name: 'development',
    shortName: 'dev',
    uglify: false,
    webpackMode: 'development',
    devtool: 'cheap-eval-source-map',
    uglifySourceMap: false,
    reactDevMode: true,
    outputFilename: '[name].js',
    imageFileName: '[path][name].[ext]',
    cssFileName: '[name].css',
  },
};

module.exports = (env) => {
  // setup environmnet mode for dev, stage or prod
  let e = envConfig.dev;
  if (env !== undefined) {
    if (env.mode === 'prod') {
      e = envConfig.prod;
    }
    if (env.mode === 'stage') {
      e = envConfig.stage;
    }
    if (env.mode === 'dev') {
      e = envConfig.dev;
    }
  }

  entryPoints.updateDetailsAndVersions();

  // eslint-disable-next-line no-console
  console.log('Create Lesson Index');
  createTopicIndex(
    e.name,
    path.join(__dirname, 'src/content'),
    path.join(__dirname, 'app/app'),
  );

  // eslint-disable-next-line no-console
  console.log('Set Files for Build');
  setFilesForBuild.setBaseHTML(e.shortName);

  console.log(`Building for ${e.name}`); // eslint-disable-line no-console
  let uglify = '';

  if (e.uglify) {
    uglify = new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 8,
        warnings: false,
        // parse: { ...options },
        // compress: { ...options },
        // mangle: {
        //   ...options,
        //   properties: {
        //     // mangle property options
        //   },
        // },
        output: {
          comments: false,
          beautify: false,
          // ...options
        },
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false,
        safari10: false,
      },
      sourceMap: e.uglifySourceMap,
    });
  }
  const clean = new CleanWebpackPlugin([buildPath]);

  let define = '';
  if (envConfig.reactDevMode) {
    define = new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    });
  }

  const extract = new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    // filename: '[name].css',
    filename: e.cssFileName,
    chunkFilename: '[id].css',
  });
  // const extract = new ExtractTextPlugin({
  //   filename: '[name].css',
  //   allChunks: true,
  // });

  const copy = new CopyWebpackPlugin(
    [
      {
        from: '/opt/app/src/content/*/*/topic.png',
        to: '/opt/app/app/app/static/dist/[1][name].[ext]',
        test: /\/opt\/app\/src\/(.*)topic\.png$/,
        ignore: ['*boilerplate*'],
      },
      {
        from: '/opt/app/src/content/*/*/*/*.svg',
        to: '/opt/app/app/app/static/dist/[1][name].[ext]',
        test: /\/opt\/app\/src\/(.*)tile.*\.svg$/,
        ignore: ['*boilerplate*'],
      },
      {
        from: '/opt/app/src/content/*/*/*/*/*.svg',
        to: '/opt/app/app/app/static/dist/[1][name].[ext]',
        test: /\/opt\/app\/src\/(.*)tile.*\.svg$/,
        ignore: ['*boilerplate*'],
      },
    ],
    // { debug: 'debug' },
  );

  let cssMini = '';
  if (e.uglify) {
    cssMini = new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      // cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true,
    });
  }

  const flaskReloader = new FlaskReloaderPlugin({});

  // Make the plugin array filtering out those plugins that are null
  const pluginArray = [
    uglify,
    define,
    extract,
    copy,
    clean,
    cssMini,
    flaskReloader,
  ].filter(elem => elem !== '');

  let externals = {};
  if (e.shortName === 'prod' || e.shortName === 'stage') {
    externals = {
      react: 'React',
      'react-dom': 'ReactDOM',
      '~/figureone/index': 'Fig',
      'figureone': 'Fig',
    };
  } else if (e.shortName === 'dev') {
    externals = {
      '~/figureone/index': 'Fig',
      'figureone': 'Fig',
    };
  }
  // const p = entryPoints.entryPoints(e.name, 'Math/Trigonometry_1')
  // console.log(Object.keys(p).length)
  // console.log(p)

  return {
    entry: entryPoints.entryPoints(e.name, ''),
    output: {
      path: buildPath,
      filename: e.outputFilename,
    },

    // Delete from here after fixing diagram integration
    resolve: {
      symlinks: false,
      extensions: ['.js'],
      modules: [
        'node_modules',
        path.join(__dirname, '/src'),
      ],
      alias: {
        ['~']: path.join(__dirname, '/src'),
      },

    },
    // Delete to here
    watchOptions: {
      ignored: /.*__image_snapshots__.*png/,
    },
    externals,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: 'babel-loader',
        },
        {
          test: /\.(css|sass|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: envConfig.uglifySourceMap,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [Autoprefixer],
                sourceMap: envConfig.uglifySourceMap,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: envConfig.uglifySourceMap,
              },
            },
          ],
        },
        {
          test: /\.(md)$/,
          use: [
            'html-loader',
            // 'markdown-loader',
            {
              loader: path.join(__dirname, 'webpack', 'math-loader.js'),
            },
            {
              loader: path.join(__dirname, 'webpack', 'post-markdown-loader.js'),
            },
            {
              loader: 'markdown-loader',
            },
            {
              loader: path.join(__dirname, 'webpack', 'link-loader.js'),
            },
            {
              loader: path.join(__dirname, 'webpack', 'quiz-loader.js'),
            },
          ],
        },
        // {
        //   test: /\.(svg)$/,
        //   use: ['html-loader'],
        // },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: e.imageFileName,
                publicPath: '/static/dist/',
                context: '/opt/app/src',
              },
            },
          ],
        },
      ],
    },
    plugins: pluginArray,
    mode: e.webpackMode,
    devtool: e.devtool,
    optimization: {
      // SplitChunks docs at https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
      splitChunks: {
        chunks: 'all',
        minSize: 3000,
        cacheGroups: {
          default: {
            minChunks: 2000,
            priority: -20,
            reuseExistingChunk: true,
          },
          tools: {
            minSize: 10,
            minChunks: 2,
            priority: -10,
            reuseExistingChunk: true,
            test: /js\/(diagram|Lesson|tools|components)/,
            name: 'tools',
          },
          commoncontent: {
            minSize: 10,
            minChunks: 2,
            priority: 0,
            reuseExistingChunk: true,
            test: /content\/common/,
            name: 'commoncontent',
          },
          topicIndex: {
            minSize: 10,
            minChunks: 1,
            priority: 0,
            reuseExistingChunk: true,
            test: /content\/topicIndex.js/,
            name: 'topicIndex',
          },
          commoncss: {
            minSize: 10,
            minChunks: 2,
            priority: -10,
            reuseExistingChunk: true,
            test: /css\/*\.(css|scss|sass)$/,
            name: 'commoncss',
          },
          // bootstrap: {
          //   test: /css\/bootstrap\*.css/,
          //   name: 'bootstrap',
          //   minChunks: 1,
          //   minSize: 10,
          //   priority: -20,
          // },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendors',
          },
        },
      },
    },
  };
};

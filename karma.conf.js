const webpack = require('./webpack.config');

module.exports = (config) => {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // this invokes 'WARNING: Tried to load angular more than once.'
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './src/app/**/*.+(module|component|service|filter).+(js|ts)',
      './src/app/**/*.+(mock|spec).+(js|ts)',
    ],

    preprocessors: {
      'src/app/**/*.+(component|service|filter).+(js|ts)': [
        'webpack',
        'sourcemap',
        'coverage',
      ],
      'src/app/**/*.+(module|mock|spec).+(js|ts)': ['webpack', 'sourcemap'],
    },

    reporters: ['progress', 'coverage', 'kjhtml'],

    coverageReporter: {
      reporters: [{ type: 'html', dir: 'coverage' }, { type: 'text' }],
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity,

    webpack: {
      module: webpack.module,
      resolve: webpack.resolve,
      plugins: webpack.plugins,
      devtool: 'source-map',
    },
  });
};

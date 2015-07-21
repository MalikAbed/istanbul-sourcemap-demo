'use strict';

var extend = require('util')._extend;

// No Karma options are passed after the double dash option (`--`)
// Example : karma start --single-run -- --coverage
//        >> { _: [], polyfill: true }

var _argv = process.argv;
var argv = require('minimist')(_argv.slice(_argv.indexOf('--') + 1));

var options = extend({
  travis: process.env.TRAVIS,
  coverage: false
}, argv);

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    preprocessors: {
      'index.js': ['babel']
    },
    files: [
      'index.js'
    ],
    'plugins' : [
      'karma-mocha',
      'karma-coverage',
      'karma-chrome-launcher'
    ],
    reporters: ['progress'],
    browsers: ['Chrome'],
    singleRun: false
  });



  if (options.coverage) {
    config.set({
      reporters: ['progress', 'coverage'],
      preprocessors: {
        'index.js': ['coverage']
      },
      coverageReporter: {
        dir:'coverage',
        reporters:[
          { type: 'html' }
        ],
        instrumenterOptions: {
          istanbul: { transpiler: 'babel' }
        }
      },
      browsers: ['Chrome']
    });
  }

}

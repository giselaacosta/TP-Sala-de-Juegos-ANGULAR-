// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
<<<<<<< HEAD
    frameworks: ['jasmine', '@angular/cli'],
=======
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
>>>>>>> ccad3af3725d8b1b1de2091d207eb4e9c9baa149
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
<<<<<<< HEAD
      require('@angular/cli/plugins/karma')
=======
      require('@angular-devkit/build-angular/plugins/karma')
>>>>>>> ccad3af3725d8b1b1de2091d207eb4e9c9baa149
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
<<<<<<< HEAD
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
=======
      dir: require('path').join(__dirname, 'coverage'), reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    
>>>>>>> ccad3af3725d8b1b1de2091d207eb4e9c9baa149
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};

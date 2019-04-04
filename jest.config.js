const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  resolver: '@nrwl/builders/plugins/jest/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageReporters: ['html'],
  moduleNameMapper: {
    /**
     * We'll use commonjs version of lodash for tests
     * because we don't need to use any kind of tree shaking.
     */
    '^lodash-es$': path.resolve('./node_modules/lodash/index.js')
  }
};

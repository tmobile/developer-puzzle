module.exports = {
  name: 'stocks-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/stocks/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

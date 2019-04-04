module.exports = {
  name: 'stocks-data-access-price-query',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/stocks/data-access-price-query',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

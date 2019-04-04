module.exports = {
  name: 'stocks',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/stocks/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

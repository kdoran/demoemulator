var baseUrl = 'http://localhost:8080/'

exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'e2e/e2e-spec.js',
  ],
  capabilities: {
    browserName: 'chrome'
  },
  // multiCapabilities: [{
  //   browserName: 'firefox'
  // }, {
  //   browserName: 'chrome'
  // }]
};
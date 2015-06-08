var EmulatorPage = function() {
  this.body = element(by.tagName('body'));
  this.aboutDiv = element(by.id('about'));
  this.inputurl = element(by.model('inputurl'));
  this.inputhtml = element(by.model('inputhtml'));
  this.emulationname = element(by.model('emulation.name'));
  this.saveButton = element(by.id('saveButton'));

  this.get = function() {
    browser.get('http://localhost:8080/#/');
  };

};

module.exports = EmulatorPage;

var EmulatorPage = function() {
  this.body = element(by.tagName('body'));
  this.demoButton = element(by.id('demo'));
  this.inputurl = element(by.model('inputurl'));
  this.inputhtml = element(by.model('inputhtml'));
  this.emulationname = element(by.model('emulation.name'));
  this.saveButton = element(by.id('saveButton'));
  this.emulationlist = element(by.tagName('table'));
  this.viewFirstLink = element.all(by.css('.view')).get(0);

  this.get = function() {
    browser.get('http://localhost:8080/#/');
  };
  this.getDemo = function() {
    browser.get('http://localhost:8080/#/');
    this.demoButton.click();
  };

};

module.exports = EmulatorPage;

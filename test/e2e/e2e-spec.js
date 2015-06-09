var EmulatorPage = require('./emulator-page.js');
var page,
  demohtml = "<html><head><title>Aqueducts R Us</title></head><body><h1>aqueducts r us</h1><a href=\"2015/06/07/aqueducts-r-us-launch/\">Aqueducts R Us — Launch</a></body></html>"

describe('First viewing of page', function() {
  page = new EmulatorPage();
  beforeEach(function(){
    page.get();
  });
  it('should show an about section',function(){
    page.body.getText().then(function(text) {
      expect(text.toLowerCase()).toContain('web page emulator');
    });
  });
  it('should prompt the user to copy and paste in a URL, html, & name the emulation',function() {
    page.getDemo();
    expect(browser.getCurrentUrl()).toContain('#/demo');
    page.body.getText().then(function(text) {
      expect(text.toLowerCase()).toContain('copy', 'url','html','name');
    });
  });
});

describe('Create an emulation', function() {
  page = new EmulatorPage();
  beforeEach(function(){
    page.getDemo();
  });
  it('should allow the user to create an emulation',function() {
    page.inputurl.sendKeys("https://aqueductsrus.wordpress.com/");
    page.inputhtml.sendKeys(demohtml);
    page.emulationname.sendKeys("aqueducts r us\n");
    page.emulationlist.getText().then(function(text){
      expect(text.toLowerCase()).toContain('aqueducts r us');
    });
  });
});

ddescribe('View and edit emulations', function() {
  page = new EmulatorPage();
  it('should allow the user to view an emulation',function() {
    page.getDemo();
    page.inputurl.sendKeys("https://aqueductsrus.wordpress.com/");
    page.inputhtml.sendKeys(demohtml);
    page.emulationname.sendKeys("aqueducts r us\n");
    page.viewFirstLink.click();
    expect(browser.getCurrentUrl()).toContain('#/view');
  });
  it('should have made the URLs relative',function() {
    page.getDemo();
    page.inputurl.sendKeys("https://aqueductsrus.wordpress.com/");
    page.inputhtml.sendKeys(demohtml);
    page.emulationname.sendKeys("aqueducts r us\n");    
    page.viewFirstLink.click();
    expect(element.all(by.tagName('a')).get(0).getAttribute('href')).toContain('https://aqueductsrus.wordpress.com/2015/06/07/aqueducts-r-us-launch/');
  });
  it('should allow the user to click back from an emulation',function(){
    page.getDemo();
    page.inputurl.sendKeys("https://aqueductsrus.wordpress.com/");
    page.inputhtml.sendKeys(demohtml);
    page.emulationname.sendKeys("aqueducts r us\n");    
    page.viewFirstLink.click();
    browser.navigate().back();
    expect(browser.getCurrentUrl()).toContain('#/');
    page.body.getText().then(function(text){
      expect(text.toLowerCase()).toContain('emulator');
    });
  });
});


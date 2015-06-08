var EmulatorPage = require('./emulator-page.js');
var page;

describe('First viewing of page', function() {
  page = new EmulatorPage();
  it('should show an about section',function(){
    page.get();
    page.aboutDiv.getText().then(function(text) {
      expect(text.toLowerCase()).toContain('about');
    });
  });
  iit('should prompt the user to copy and paste in a URL, html, & name the emulation',function() {
    page.get();
    page.body.getText().then(function(text) {
      expect(text.toLowerCase()).toContain('copy', 'url','html','name');
    });
  });
  // iit('should prompt the user to copy and paste in a URL',function(){
  //   page.get();
  //   page.body.getText().then(function(text) {
  //     expect(text.toLowerCase()).toContain('copy', 'URL');
  //   });
  // });
});
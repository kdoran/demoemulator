// beforeEach(module('EmulatorApp'));

// xdescribe('First viewing of page', function() {
//   it('should prompt the user to copy and paste in a URL',function(){
//     expect(1).toBe(1);
//   });
// });


describe('EmulatorApp.StringUtilsFct', function() {
  // module('EmulatorApp.StringUtilsFct');
  it('should allow inserting (splicing) a string at a position of a string',function(){
    var message = "<html><head></head><body>stuff</body></html>";
    var messageWithBase = "<html><head><base href='stuff'/></head><body>stuff</body></html>";
    expect(message.splice(message.indexOf("</head>"),"<base href='stuff'/>")).toBe(messageWithBase);
  });
});
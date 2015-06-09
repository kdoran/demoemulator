var StringUtilsFct;

beforeEach(module('EmulatorApp'));
beforeEach(inject(function (_StringUtilsFct_) {
  StringUtilsFct = _StringUtilsFct_;
}));

describe('StringUtilsFct', function() {
  it('should allow inserting (splicing) a string at a position of a string',function(){
    var message = "<html><head lang=\"en\"></head><body>stuff</body></html>";
    var messageWithBase = "<html><head lang=\"en\"><base href='stuff'/></head><body>stuff</body></html>";
    expect(StringUtilsFct.insertAfterTag(message,"head","<base href='stuff'/>")).toBe(messageWithBase);
    var message = "<html><head><title>asdf</title></head><body>stuff</body></html>";
    var messageWithBase = "<html><head><base href='stuff'/><title>asdf</title></head><body>stuff</body></html>";
    expect(StringUtilsFct.insertAfterTag(message,"head","<base href='stuff'/>")).toBe(messageWithBase);
  });
});

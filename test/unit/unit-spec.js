var StringUtilsFct;

beforeEach(module('EmulatorApp'));
beforeEach(inject(function (_StringUtilsFct_) {
  StringUtilsFct = _StringUtilsFct_;
}));

describe('StringUtilsFct', function() {
  it('should allow inserting (splicing) a string at a position of a string',function(){
    var message = "<html><head></head><body>stuff</body></html>";
    var messageWithBase = "<html><head><base href='stuff'/></head><body>stuff</body></html>";
    expect(StringUtilsFct.insertBefore(message,"</head>","<base href='stuff'/>")).toBe(messageWithBase);
  });
});

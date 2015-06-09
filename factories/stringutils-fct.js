angular.module('EmulatorApp.StringUtilsFct', [])
.factory('StringUtilsFct', [function () {

  var fact = {};

  fact.insertAfterTag = function(s, tagName, stringToInsert ) {
    var index = s.toLowerCase().indexOf("<" + tagName) + ("<" + tagName).length + s.toLowerCase().split("<" + tagName)[1].indexOf(">");
    return s.substring(0,index+1) + stringToInsert + s.substring(index+1);
  };

  return fact;

}]);

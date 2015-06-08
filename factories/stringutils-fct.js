angular.module('EmulatorApp.StringUtilsFct', [])
.factory('StringUtilsFct', [function () {

  var fact = {};

  fact.insertBefore = function(s, insertBeforeString, stringToInsert ) {
    var splitup = s.split(insertBeforeString);
    return splitup[0] + stringToInsert + insertBeforeString + splitup[1];
  };

  return fact;

}]);

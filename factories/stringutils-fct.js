angular.module('EmulatorApp.StringUtilsFct', [])
.factory('StringUtilsFct', [function () {

  var fact = {};

  String.prototype.splice = function( idx, s ) {
    return (this.slice(0,idx) + s + this.slice(idx));
  };

  return fact;

}]);

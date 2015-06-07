angular.module('EmulatorApp.StringUtilsFct', [])
.factory('StringUtilsFct', [function () {

  var fact = {};

  String.prototype.splice = function( idx, rem, s ) {
    return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
  };

  return [emulations];

}]);

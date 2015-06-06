angular.module('EmulatorApp.InitViewsFct', [])
.factory('InitViewsFct', [function () {

  var emulation_map = function(doc) {
    if (doc.type && (doc.type == "emulation")) {
      emit([doc.name,doc._id]);
    }
  };

  var emulations = {
    _id: '_design/emulations',
    views:{
      'emulations':{
        map: emulation_map.toString(),
        reduce: '_count'
      }
    }
  };

  return [emulations];

}]);

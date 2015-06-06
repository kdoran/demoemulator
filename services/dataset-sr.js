angular.module('EmulatorApp.DatasetSr', [])
.service('DatasetSr', ['$rootScope', '$q', function ($rootScope,$q) {

  this.get_db = function(){
    return new PouchDB("emulatorapp");
  };

}]);

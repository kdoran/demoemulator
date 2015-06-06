angular.module('EmulatorApp.InitSr', [])
.service('InitSr', 
  ['$q',
  'InitViewsFct', 
  function ($q,InitViewsFct) {

    var dbname = "emulatorapp";

    var init_db = function (db){
      var defer = $q.defer();
      
      return defer.promise;
    };

    this.get_or_init_db = function(){
      var defer = $q.defer();
      var db = new PouchDB(dbname);
      db.get('_design/emulations').then(function(doc) {
        defer.resolve();
      }).catch(function (err) {
        db.bulkDocs(InitViewsFct).then(function(response){
          defer.resolve();
        });
      });
      return defer.promise;
    };

}]);

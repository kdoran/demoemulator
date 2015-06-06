angular.module('EmulatorApp.QuerySr', [])
.service('QuerySr', ['$q', 'DatasetSr',function ($q,DatasetSr) {

  var db = DatasetSr.get_db();

  this.list = function (query_name,input_ops){
    var defer = $q.defer();
    var ops = {include_docs : true, reduce : false};
    ops = _.assign(ops,input_ops);
    db.query(query_name, ops, function(err, response) {
      defer.resolve(response);
    });
    return defer.promise;
  };

  this.list_design = function (){
    var defer = $q.defer();
    db.allDocs({startkey : "_design/", endkey : "_design0", include_docs:true}, function(err, response) {
      defer.resolve(response);
    });
    return defer.promise;
  };


}]);

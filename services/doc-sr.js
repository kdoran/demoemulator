angular.module('EmulatorApp.DocSr', [])
.service('DocSr', 
  ['$q',
  'NotificationsSr',
  'DatasetSr',
  function ($q,NotificationsSr,DatasetSr) {

  var db = DatasetSr.get_db();

  this.get = function (doc_id){
    var defer = $q.defer();
    db.get(doc_id,function(err,response){
      if (err) defer.reject(err);
      defer.resolve(response);
    });
    return defer.promise;
  };

  this.getmultiple = function (docs){
    var defer = $q.defer();
    db.allDocs({"keys" : docs, "include_docs" : true},function(err,response){
      if (err) defer.reject(err);
      defer.resolve(response);
    });
    return defer.promise;
  };

  var init_doc = function(doc){
    doc.created = new Date().toISOString();
    doc.updated = doc.created;
  };

  this.update = function(doc,attachments){
    var defer = $q.defer();
    // new doc
    if (!doc._id){
      init_doc(doc);
    }
    else{
      doc.updated = new Date().toISOString();
    }
    db.post(doc,function(err,doc){
      if (err) {
        NotificationsSr.setCurrent('errors.general', 'error', {"object" : err.message});
        defer.reject(err.message);
      }
      defer.resolve(doc);
    });
    return defer.promise;
  };

  this.delete = function(doc){
    var defer = $q.defer();
    db.remove(doc,function(response){
      defer.resolve(response);
    });
    return defer.promise;
  };

}]);

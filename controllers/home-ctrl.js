angular.module('EmulatorApp.HomeCtrl', []).
controller('HomeCtrl',
  ['$scope',
  '$location',
  'QuerySr',
  'DocSr',
  'NotificationsSr',
  'StringUtilsFct',
  function($scope,$location,QuerySr,DocSr,NotificationsSr,StringUtilsFct) {

    $scope.notifications = NotificationsSr;

    $scope.createnew = function(){
      $scope.emulation = {
        "type" : "emulation"
      };
    };

    var load_emulations = function(){
      QuerySr.list('emulations').then(function(response){
        $scope.emulations = _.pluck(response.rows,"doc");
        if(!$scope.emulations.length){
          $scope.createnew();
        }
      });
    };

    load_emulations();

    $scope.edit = function(em){
      $scope.emulation = em;
      $scope.inputurl = $scope.emulation.url;
      $scope.inputhtml = $scope.emulation.html;
    };

    $scope.view = function(id){
      $location.path("view").search({"id" : id});
      window.location.reload();
    };

    $scope.deleteemulation = function(item){
      DocSr.delete(item).then(function(){
        load_emulations();
      });
    };

    $scope.save = function(){
      if (!$scope.inputurl || !$scope.inputhtml || !$scope.emulation.name)
        return;
      //add a base tag using custom string splice function to insert it after the head element
      if (!$scope.emulation._id){
        if ($scope.inputurl.lastIndexOf("/") + 1 !== $scope.inputurl.length)
          $scope.inputurl = $scope.inputurl + "/"
        $scope.emulation.url = $scope.inputurl.substring(0,$scope.inputurl.lastIndexOf('/')+1);
        $scope.emulation.html = $scope.inputhtml.splice($scope.inputhtml.indexOf('</head>'), '<base href="' + $scope.emulation.url + '"/>');
      }
      DocSr.update($scope.emulation).then(function(response){
        $scope.emulation._rev = response.rev;
        if (!$scope.emulation._id){
          $scope.emulation._id = response.id;
          $scope.emulations.push($scope.emulation);
        }
        NotificationsSr.setCurrent('resource.saved','info',
          {"resourcetype" : 'emulation',"resourcename" : $scope.emulation.name});
        $scope.emulation = null;
      }).catch(function(err){console.log(err)});
    };
  }]);

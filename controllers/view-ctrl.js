angular.module('EmulatorApp.ViewCtrl', []).
controller('ViewCtrl',
  ['$scope',
  '$routeParams',
  '$location',
  '$anchorScroll',
  'DocSr',
  function($scope,$routeParams,$location,$anchorScroll,DocSr) {
    DocSr.get($routeParams['id']).then(function(doc){
      $scope.emulation = doc;
      setTimeout(function(){
        $location.hash("top");
        $anchorScroll();
      },100);
    });
  }]);

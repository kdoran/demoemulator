angular.module('EmulatorApp.ViewCtrl', []).
controller('ViewCtrl',
  ['$scope',
  '$routeParams',
  'DocSr',
  function($scope,$routeParams,DocSr) {
    DocSr.get($routeParams['id']).then(function(doc){
      $scope.emulation = doc;
    });
  }]);

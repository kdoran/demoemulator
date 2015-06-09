angular.module('EmulatorApp.headerDr', [])
.directive('headerDr', 
    ['NotificationsSr',
    function (NotificationsSr) {
  return {
    restrict:'E',
    link:function($scope, element, attrs){
      $scope.notifications = NotificationsSr;
    },
    templateUrl:"views/directives/header-dr.html"
  };
}]);
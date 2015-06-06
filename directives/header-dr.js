angular.module('EmulatorApp.headerDr', [])
.directive('headerDr', 
    ["$http",
    '$rootScope',
    '$location',
    'NotificationsSr',
    function ($http,$rootScope,$location,NotificationsSr) {
  return {
    restrict:'A',
    link:function($scope, element, attrs){
      $scope.notifications = NotificationsSr;
      $scope.hide_admin = true,
          $scope.hide_dash = true, $scope.loggedin = false; 

      $scope.$on('$routeChangeError', function(event, current, previous, rejection){
        NotificationsSr.setCurrent('errors.route.changeError', 'error', {}, {rejection: rejection});
      });
    },
    templateUrl:"views/directives/header.html"
  };
}]);
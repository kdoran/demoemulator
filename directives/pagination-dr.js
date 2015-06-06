angular.module('EmulatorApp.paginationDr', [])
.directive('paginationDr', [function () {
  return {
    restrict:'E',
    scope: { objects : '=', visible : "="},
    link: function($scope, element, attrs){
      $scope.skip = 0;
      $scope.next_page = function(){
        $scope.skip += 100;
        $scope.visible = _.slice($scope.objects,$scope.skip,$scope.skip+100);
      };
      $scope.previous_page = function(){
        $scope.skip -= 100;
        $scope.visible = _.slice($scope.objects,$scope.skip,$scope.skip+100);
      };
    },
    templateUrl:"views/directives/pagination.html"
  };
}]);
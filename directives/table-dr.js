angular.module('EmulatorApp.tableDr', [])
.directive('tableDr', ["$location","QuerySr",function ($location,QuerySr) {
  return {
    restrict:'A',
    transclude:true,
    scope: { query:'=', response : '=', nolimit : "="},
    link: function($scope, element, attrs){
        $scope.skip = 0;
        if (!$scope.nolimit) $scope.ops = {limit : 30};
        var run_query = function(){
            $scope.running_query = true;
            $scope.err = undefined;
            QuerySr.list($scope.query,$scope.ops).then(function(response){
                $scope.response = response;
            }).catch(function(err){
                console.log(err);
                $scope.err = err.message;
            }).finally(function(){
                $scope.running_query = false;
            });
        };
        $scope.next_page = function(){
            $scope.ops = $scope.ops || {};
            $scope.skip += 20;
            $scope.ops.skip = $scope.skip;
            run_query();
        };
        $scope.previous_page = function(){
            $scope.skip -= 20;
            $scope.ops.skip = $scope.skip;
            run_query();
        };
        run_query();
    },
    templateUrl:"views/directives/table.html"
};
}]);
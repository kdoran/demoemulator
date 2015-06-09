var EmulatorApp = angular.module('EmulatorApp', [
  'ngRoute',
  'EmulatorApp.HomeCtrl',
  'EmulatorApp.DemoCtrl',
  'EmulatorApp.ViewCtrl',
  'EmulatorApp.tableDr',
  'EmulatorApp.paginationDr',
  'EmulatorApp.headerDr',
  'EmulatorApp.InitSr',
  'EmulatorApp.TemplatesSr',
  'EmulatorApp.DatasetSr',
  'EmulatorApp.NotificationsSr',
  'EmulatorApp.QuerySr',
  'EmulatorApp.DocSr',
  'EmulatorApp.LocalizedMessagesSr',
  'EmulatorApp.InitViewsFct',
  'EmulatorApp.StringUtilsFct'
  ]);

EmulatorApp.run(['$rootScope','$location','InitSr', function($rootScope,$location,InitSr) {
  InitSr.get_or_init_db();
  
  var resetURL = window.location.href.split("#/")[0];


  /* overriding the user trying to use the back button because setting
   base tag as emulated url messes up angular's routing */

  $rootScope.$on('$locationChangeSuccess', function() {
    $rootScope.actualLocation = $location.path();
  });        

  $rootScope.$watch(function () {return $location.path()}, function (newLocation, oldLocation) {
    if($rootScope.actualLocation === newLocation) {
      if($rootScope.actualLocation === "/demo")
      // console.log('back hit',$rootScope.actualLocation);
        window.location.href = resetURL;
    }
  });
}]);

EmulatorApp.config(['$routeProvider','$sceProvider', function($routeProvider,$sceProvider) {
  $sceProvider.enabled(false);
  $routeProvider
  .when('/view', { templateUrl: 'views/view.html', controller: 'ViewCtrl'})
  .when('/demo', { templateUrl: 'views/demo.html', controller: 'DemoCtrl'})
  .when('/', { templateUrl: 'views/home.html', controller: 'HomeCtrl'});
}]);

// EmulatorApp.config(['$httpProvider', function($httpProvider) {
//   $httpProvider.defaults.withCredentials = true;
// }]);

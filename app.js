var EmulatorApp = angular.module('EmulatorApp', [
  'ngRoute',
  'EmulatorApp.HomeCtrl',
  'EmulatorApp.ViewCtrl',
  'EmulatorApp.tableDr',
  'EmulatorApp.paginationDr',
  'EmulatorApp.InitSr',
  'EmulatorApp.TemplatesSr',
  'EmulatorApp.DatasetSr',
  'EmulatorApp.NotificationsSr',
  'EmulatorApp.QuerySr',
  'EmulatorApp.DocSr',
  'EmulatorApp.LocalizedMessagesSr',
  'EmulatorApp.InitViewsFct'
]);

EmulatorApp.run(['InitSr', function(InitSr) {
    InitSr.get_or_init_db();
}]);

EmulatorApp.config(['$routeProvider','$sceProvider', function($routeProvider,$sceProvider) {
  $sceProvider.enabled(false);
  $routeProvider
    .when('/view', { templateUrl: 'views/view.html', controller: 'ViewCtrl'})
    .when('/', { templateUrl: 'views/home.html', controller: 'HomeCtrl', reloadOnSearch: false});
}]);

// EmulatorApp.config(['$httpProvider', function($httpProvider) {
//   $httpProvider.defaults.withCredentials = true;
// }]);

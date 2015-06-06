angular.module('EmulatorApp.NotificationsSr', []).factory('NotificationsSr', ['$rootScope','LocalizedMessagesSr', function ($rootScope,LocalizedMessagesSr) {

  var notifications = {
    'STICKY' : [],
    'CURRENT' : [],
    'LOADING' : []
  };
  var recent = [];
  var notificationsService = {};

  var prepareNotification = function(msgKey, type, interpolateParams, otherProperties) {
    notificationsService.clearSticky();
     return angular.extend({
       message: LocalizedMessagesSr.get(msgKey, interpolateParams),
       type: type
     }, otherProperties);
  };
  notificationsService.getAll = function(){
    return [].concat(notifications.LOADING, notifications.STICKY, notifications.CURRENT);
  };
  notificationsService.setSticky = function(msgKey, type, interpolateParams, otherProperties) {
    var note = prepareNotification(msgKey, type, interpolateParams, otherProperties);
    recent.push(note);
    notifications.STICKY.push(note);
  };
  notificationsService.setCurrent = function(msgKey, type, interpolateParams, otherProperties) {
    var note = prepareNotification(msgKey, type, interpolateParams, otherProperties);
    notifications.CURRENT.push(note);
    recent.push(note);
    setTimeout(function() {
      notificationsService.clearCurrent();
      $rootScope.$apply();
    }, 3000);
  };
  notificationsService.setLoading = function(msgKey, interpolateParams, otherProperties) {
    notifications.LOADING.push(prepareNotification(msgKey, 'loading', interpolateParams, otherProperties));
  };
  notificationsService.clearLoading = function() {
    notifications.LOADING = [];
  };
  notificationsService.clearCurrent = function(){
    notifications.CURRENT = [];
  };
  notificationsService.clearSticky = function(){
    notifications.STICKY = [];
  };
  notificationsService.getRecent = function(){
    return recent;
  };

  return notificationsService;
}]);
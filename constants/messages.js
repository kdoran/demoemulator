angular.module('EmulatorApp').constant('I18N.MESSAGES', {
  'loading':'loading {{resource}}...',
  'success':'success: {{object}}...',
  'resource.saved' : "{{resourcetype}} <strong>{{resourcename}}</strong> saved.",
  'resource.deleted' : "{{resourcetype}} <strong>{{resourcename}}</strong> deleted.",
  'errors.general':'Something went wrong. {{object}}',
  'errors.server':'The database is not responding, it appears to be offline.'
});
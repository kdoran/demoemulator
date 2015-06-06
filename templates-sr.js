// During development there is no problem with creating a network request for every template, but it would add unnecessary overhead for a deployed app or website. The next task takes a folder of angular html templates and combines and compresses them. I add a 'templates' dependency to my main app:
// var app = angular.module('myapp', [ ... , 'templates']);
// Which would result in an error running in development mode, so I create a dummy app/templates.js file:

angular.module('EmulatorApp.TemplatesSr', [])
.run(function($log){
    // $log.info("Running in Development Mode");
});
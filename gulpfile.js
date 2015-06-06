var gulp = require('gulp');

// var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var templateCache = require('gulp-angular-templatecache');
var mergeStream = require('merge-stream');
var request = require("request").defaults({jar: true});
var fs = require('fs');

var appTemplates = function() {
  return gulp
  .src('views/**/*.html')
  .pipe(templateCache({
    root: 'views',
    standalone: true,
    module: 'EmulatorApp.TemplatesSr'
  }));
};

gulp.task('scripts', function() {
  var templates = appTemplates();
  var scripts = gulp.src([
    'vendor/lodash-3.8.0.js',
    'vendor/pouchdb-3.2.1.js',
    // 'vendor/pouchdb.authentication.js',
    'vendor/angular/*.js',
    'controllers/**/*.js',
    'services/**/*.js',
    'directives/**/*.js',
    'app.js'
    ]);

  return mergeStream(templates, scripts)
  .pipe(uglify())
  .pipe(concat('emulatorapp-js.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  return gulp.src([
    'css/*.css'
    ])
  .pipe(minifyCss())
  .pipe(concat('emulatorapp-css.css'))
  .pipe(gulp.dest('dist'))
});

gulp.task('pushfiles',function(){
  request({
    uri: "http://localhost:5984/_session",
    method: "POST",
    form: {
      name: "kevin",
      password: "pass"
    }
  }, function(err, response, body) {
    if(err) throw err;
    if (!JSON.parse(body)["ok"]){
      console.log(body);
      return;
    }
    request("http://localhost:5984/emulatorapp/_design/tafole",function(err,response,body){
      if (err) throw err;
      var rev = JSON.parse(body)["_rev"];
      var jsfile = fs.readFileSync('./dist/emulatorapp-js.js').toString('base64');
      var cssfile = fs.readFileSync('./dist/emulatorapp-css.css').toString('base64');
      var htmlfile = fs.readFileSync('./dist/index.html').toString('base64');
      var data = {
        "_rev" : rev,
        "_attachments" : {
          "emulatorapp-js.js":
            {
              "content_type":"application\/javascript",
              "data":  jsfile
            },
            "emulatorapp-css.css" : 
            {
              "content_type" : "text\/css",
              "data" : cssfile
            },
            "index.html" : 
            {
              "content_type" : "text\/html",
              "data" : htmlfile
            }
        }
      };
      data = JSON.stringify(data);
      request({
        uri: "http://localhost:5984/emulatorapp/_design/emulatorapp",
        method: "PUT",
        form : data
      }, function(err, response, body) {
        console.log(body);
      });
    });
  });
});
gulp.task('default',["scripts","css","pushfiles"]);
// gulp.task('default',["pushfiles"]);

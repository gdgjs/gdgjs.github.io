var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var neat = require('node-neat').includePaths;
var transform = require('vinyl-transform');

// Browserify task
gulp.task('browserify', function() {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });
});
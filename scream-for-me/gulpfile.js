var gulp = require('gulp');
var sass = require('gulp-sass');

// Browserify task
gulp.task('browserify', function() {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });
});
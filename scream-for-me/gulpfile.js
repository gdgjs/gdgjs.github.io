var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var neat = require('node-neat').includePaths;
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');

// Browserify task
gulp.task('browserify', function() {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });

  return gulp.src(['src/js/main.js'])
    .pipe(browserified)
    .pipe(uglify())
    .pipe(gulp.dest('build/js/a.js'));
});

// Sass task
gulp.task('sass', function() {
  gulp.src('src/styles/main.scss')
    .pipe(sass({
      style: 'expanded',
      includePaths: neat
    }))
    .pipe(gulp.dest('css'))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

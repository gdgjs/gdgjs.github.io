var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var neat = require('node-neat').includePaths;
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


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
    .pipe(gulp.dest('build/css'))
    .pipe(minifycss())
    .pipe(gulp.dest('build/css'));
});

// Watch task
gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
});

// Imagemin task
gulp.task('imagemin', function () {
  gulp.src('src/img/*')
    .pipe(imagemin({
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('src/img'));
});

// Default task
gulp.task('default', ['sass']);
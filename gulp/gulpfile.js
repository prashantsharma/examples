var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    gulp.src('styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./assets/map'))
        .pipe(gulp.dest('./assets'))
});

gulp.task('sass:watch', function() {
    gulp.watch('styles/*.scss', ['sass']);
});

const gulp = require('gulp')
// const htmlmin = require('gulp-htmlmin')
// const prettyData = require('gulp-pretty-data')
const viewMinify = require('gulp-view-minify')

gulp.task('minify', function (done) {
  gulp.src('dist/**/*.wxml')
    .pipe(viewMinify())
    .pipe(gulp.dest('dist'))

  done()
})

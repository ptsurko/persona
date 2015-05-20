var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./styles'));
});

gulp.task('watch', function() {
    gulp.watch('less/**', function(event) {
        gulp.run('less');
    })
});

gulp.task('default', ['less']);

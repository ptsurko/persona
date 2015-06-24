var gulp = require("gulp");
var less = require("gulp-less");
var path = require("path");
var connect = require("gulp-connect");

gulp.task("connect", function() {
  connect.server();
});

gulp.task("less", function () {
  return gulp.src("./less/**/*.less")
    .pipe(less({
      paths: [ path.join(__dirname, "less", "includes") ]
    }))
    .pipe(gulp.dest("./styles"));
});

gulp.task("watch", ["connect"], function() {
    gulp.watch("less/**", function(event) {
        gulp.run("less");
    })
});

gulp.task("default", ["less"]);

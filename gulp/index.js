var gulp = require("gulp");
var less = require("gulp-less");
var path = require("path");
var del = require("del");
var connect = require("gulp-connect");
var config = require('./config');
var runSequence = require('run-sequence');

gulp.task("cleanup", function(cb) {
  del([config.dist.root], cb);
});

gulp.task("connect", function() {
  connect.server({
    root: config.dist.root,
    livereload: true
  });
});

gulp.task("external_js", function() {
  return gulp.src(config.scripts.third_party.src)
    .pipe(gulp.dest(config.scripts.third_party.dest));
});

gulp.task("js", ["external_js"], function() {
  return gulp.src(config.scripts.src)
    .pipe(gulp.dest(config.scripts.dest));
});

gulp.task("external_css", function () {
  return gulp.src(config.styles.third_party.src)
    .pipe(gulp.dest(config.styles.third_party.dest));
});

gulp.task("css", ["external_css"], function () {
  return gulp.src(config.styles.src)
    .pipe(less())
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task("favicon", function() {
  return gulp.src("app/favicon.ico")
    .pipe(gulp.dest(config.dist.root));
});

gulp.task("images", ["favicon"], function() {
  return gulp.src(config.images.src)
    .pipe(gulp.dest(config.images.dest));
});

gulp.task("fonts", function() {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest));
});

gulp.task("views", function() {
  return gulp.src(config.views.src)
    .pipe(gulp.dest(config.views.dest));
});

gulp.task("build", ["cleanup"], function() {
  runSequence(["js", "css", "images", "fonts", "views"]);
});

gulp.task("watch", ["connect"], function() {
  gulp.watch(config.styles.src, function(event) {
    gulp.run("css");
  })
});

gulp.task("default", ["build"]);

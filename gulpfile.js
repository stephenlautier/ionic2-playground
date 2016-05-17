require("./build/main");

var gulp = require("gulp"),
  gulpWatch = require("gulp-watch"),
  del = require("del"),
  runSequence = require("run-sequence"),
  argv = process.argv;

/**
 * Ionic hooks
 * Add ":before" or ":after" to any Ionic project command name to run the specified
 * tasks before or after the command.
 */
gulp.task("serve:before", ["watch"]);
gulp.task("emulate:before", ["build"]);
gulp.task("deploy:before", ["build"]);
gulp.task("build:before", ["build"]);

// we want to "watch" when livereloading
var shouldWatch = argv.indexOf("-l") > -1 || argv.indexOf("--livereload") > -1;
gulp.task("run:before", [shouldWatch ? "watch" : "build"]);

/**
 * Ionic Gulp tasks, for more information on each see
 * https://github.com/driftyco/ionic-gulp-tasks
 *
 * Using these will allow you to stay up to date if the default Ionic 2 build
 * changes, but you are of course welcome (and encouraged) to customize your
 * build however you see fit.
 */

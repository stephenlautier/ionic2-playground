require("./build/main");

var gulp = require('gulp'),
    gulpWatch = require('gulp-watch'),
    del = require('del'),
    runSequence = require('run-sequence'),
    argv = process.argv;

var tsc = require("gulp-typescript");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");

/**
 * Ionic hooks
 * Add ':before' or ':after' to any Ionic project command name to run the specified
 * tasks before or after the command.
 */
gulp.task('serve:before', ['watch']);
gulp.task('emulate:before', ['build']);
gulp.task('deploy:before', ['build']);
gulp.task('build:before', ['build']);

// we want to 'watch' when livereloading
var shouldWatch = argv.indexOf('-l') > -1 || argv.indexOf('--livereload') > -1;
gulp.task('run:before', [shouldWatch ? 'watch' : 'build']);

/**
 * Ionic Gulp tasks, for more information on each see
 * https://github.com/driftyco/ionic-gulp-tasks
 *
 * Using these will allow you to stay up to date if the default Ionic 2 build
 * changes, but you are of course welcome (and encouraged) to customize your
 * build however you see fit.
 */
var buildBrowserify = require('ionic-gulp-browserify-typescript');
var buildSass = require('ionic-gulp-sass-build');
var copyHTML = require('ionic-gulp-html-copy');
var copyFonts = require('ionic-gulp-fonts-copy');
var copyScripts = require('ionic-gulp-scripts-copy');

var isRelease = argv.indexOf('--release') > -1;

// gulp.task('watch', ['clean'], function(done){
//   runSequence(
//     ['sass', 'html', 'fonts', 'scripts'],
//     function(){
//       gulpWatch('app/**/*.scss', function(){ gulp.start('sass'); });
//       gulpWatch('app/**/*.html', function(){ gulp.start('html'); });
//       gulpWatch('app/**/*.ts', function(){ gulp.start('compile:ts'); });
// //      buildBrowserify({ watch: true }).on('end', done);
        
//       done();
//     }
//   );
// });


gulp.task('build', ['clean'], function(done){
  runSequence(
    ['sass', 'html', 'fonts', 'scripts'],
    "compile:ts",
   done
  );
});

gulp.task('sass', buildSass);
gulp.task('html', copyHTML);
gulp.task('fonts', copyFonts);
gulp.task('scripts', copyScripts);
gulp.task('clean', function(){
  return del('www/build');
});


// // scripts
// gulp.task("compile:ts", () => {
// 	var tsProject = getTscProject();
// 	var tsResult = gulp.src(['./app/**/*.ts', './typings/main.d.ts'])
// 		.pipe(plumber())
// 	//.pipe(changed(paths.output.dist, { extension: ".js" }))
// 		.pipe(sourcemaps.init())
// 		.pipe(tsc(tsProject));

// 	return tsResult.js
// 		.pipe(sourcemaps.write("."))
// 		.pipe(gulp.dest(`www/build/js/app`));
// });

// function getTscProject() {
// 	return tsc.createProject("tsconfig.json", {
// 		typescript: require("typescript")
// 	});
// }
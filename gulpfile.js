var appConfig = require('./appConfig.json'),
		gulp = require('gulp'),
		jade = require('gulp-jade'),
		compass = require('gulp-compass'),
		karma = require('gulp-karma'),
    jshint = require('gulp-jshint');

var jadeFiles = appConfig.assets.devel.templates + '**/*.jade',
		sassFiles = appConfig.assets.devel.scss + '**/*.scss',
		jsFiles = appConfig.assets.devel.js + '**/*.js';


gulp.task('jade',function(){
	gulp.src(jadeFiles)
	.pipe(jade())
	.pipe(gulp.dest(appConfig.assets.build.pages));
});


gulp.task('compass', function() {
	gulp.src(sassFiles)
	.pipe(compass({
		appConfig_file: 'config.rb',
		sass: appConfig.assets.devel.scss,
		css:  appConfig.assets.build.css
	}))
	.pipe(gulp.dest(appConfig.assets.build.css))
});


gulp.task('karma', function () {
    gulp.src(jsFiles)
    .pipe(karma({
    	configFile: 'tests/karma/karma.conf.js'
    }));
});


gulp.task('jshint', function() {
  return gulp.src(jsFiles)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});


gulp.task('watch', function () {
	gulp.watch(jadeFiles,['jade']);
  gulp.watch(sassFiles,['compass']);
	gulp.watch(jsFiles,['jshint']);
});

gulp.task('default', ['jade','compass', 'watch']);

var config = require('./app.json'),
		gulp = require('gulp'),
		jade = require('gulp-jade'),
		compass = require('gulp-compass');


gulp.task('jade',function(){
	gulp.src(config.assets.devel.templates + '/**/*.jade')
	.pipe(jade())
	.pipe(gulp.dest(config.assets.build.pages));
});


gulp.task('compass', function() {
	gulp.src(config.assets.devel.scss + '*.scss')
	.pipe(compass({
		config_file: 'config.rb',
		css:  config.assets.build.css,
		sass: config.assets.devel.scss
	}))
	.pipe(gulp.dest(config.assets.build.css))
});
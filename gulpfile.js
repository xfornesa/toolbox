var assets = {
		'dev': 'app/assets/dev/',
		'build': 'app/assets/build/',
	},

	development = {
		'scss': assets.dev + 'scss/',
		'img': assets.dev + 'img/',
		'icons': assets.dev + 'img/icons/',
		'templates': assets.dev + 'templates/',
	},

	build = {
		'pages': 'app/',
		'css': assets.build + 'css/',
		'js':  assets.build + 'js/',
		'img': assets.build + 'img/',
	};


var gulp = require('gulp'),
	jade = require('gulp-jade'),
	compass = require('gulp-compass');


gulp.task('jade',function(){
	gulp.src(development.templates + '/**/*.jade')
	.pipe(jade())
	.pipe(gulp.dest(build.pages));
});


gulp.task('compass', function() {
	gulp.src(development.scss + '*.scss')
	.pipe(compass({
		config_file: 'config.rb',
		css:  build.css,
		sass: development.scss
	}))
	.pipe(gulp.dest(build.css))
});
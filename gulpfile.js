var environments = {
		'dev': 'app/dev/',
		'prod': 'app/prod/',
	},

	assets = {
		'dev': environments.dev + 'assets/',
		'prod': environments.prod + 'assets/',
	},

	development = {
		'scss': assets.dev + 'scss/',
		'img': assets.dev + 'img/',
		'icons': assets.dev + 'img/icons/',
		'templates': assets.dev + 'templates/',
	},

	production = {
		'pages': environments.prod + 'pages/',
		'css': assets.prod + 'css/',
		'js':  assets.prod + 'js/',
		'img': assets.prod + 'img/',
	};


var gulp = require('gulp'),
	jade = require('gulp-jade'),
	compass = require('gulp-compass');


gulp.task('jade',function(){
	gulp.src(development.templates + '/**/*.jade')
	.pipe(jade())
	.pipe(gulp.dest(production.pages));
});


gulp.task('compass', function() {
	gulp.src(development.scss + '*.scss')
	.pipe(compass({
		config_file: 'config.rb',
		css:  production.css,
		sass: development.scss
	}))
	.pipe(gulp.dest(production.css))
});


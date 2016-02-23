var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	jscs = require('gulp-jscs'),
	nodemon = require('nodemon'),
	jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function() {
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish', { 
			verbose: true 
		}))
		.pipe(jscs());
});

gulp.task('inject', function() {
	var wiredep = require('wiredep').stream;
	var options = {
		bowerJson: require('./bower.json'),
		directory: './pulic/lib'
	};
	
	return gulp.src('./src/views/*.html')
		.pipe(wiredep(options))
		.pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['style'], function() ßß{
	var options = {
		script: 'app.js',
		delayTime: 1,
		env: {
			'PORT': 5000
		},
		watch: jsFiles
	};

	return nodemon(options)
		.on('restart', function(ev) {
			console.log('Restarting...');
		});
});
var gulp = require('gulp'),
	connect = require('gulp-connect');
var srcFolder = 'src/';


gulp.task('connect', function() {
	connect.server({
		root: srcFolder,
		livereload: true,
		livereloadPort: 3000,
	    middleware: function (connect) {
	      return [connect().use("/bower_components", connect.static("bower_components"))];
	    }
	});
});

gulp.task('default', ['connect']);
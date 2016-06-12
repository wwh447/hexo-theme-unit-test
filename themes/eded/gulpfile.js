var gulp = require('gulp');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var cssmin = require('gulp-minify-css');
var connect = require('gulp-connect');

gulp.task('css', function() {
	return gulp.src('source/src/*.scss')
		.pipe(postcss([
			require('postcss-conditionals')(),
			require('postcss-simple-vars')(),  //https://www.npmjs.com/package/postcss-simple-vars
			require('postcss-each')(),
			require('postcss-for')(),
			require('postcss-mixins')(),
			require('postcss-import')(),
			require('postcss-nested')(),
			require('postcss-atroot')(),
			require('cssnext')({
				features: {rem: false}
			}),
			require('postcss-extend')()
		]))
		.pipe(rename(function(path) {
			path.extname = '.css';
		}))
		.pipe(gulp.dest('source/css'))
});

gulp.task('min', function() {
	gulp.src('source/css/*.css')
		.pipe(cssmin({
			advanced: false,
			keepBreaks: true
		}))
		.pipe(gulp.dest('source/dist'))
});

gulp.task('connect', function() {
  connect.server({
		root: '../../public',
		port: 4000,
		livereload: true
	});
});

gulp.task('watch', function() {
	gulp.watch(['source/src/*.scss'], ['css']);
});

gulp.task('default', ['watch', 'css', 'connect']);

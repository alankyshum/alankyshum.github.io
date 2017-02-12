const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('move', function() {
  gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/vue/dist/vue.min.js',
    'node_modules/vue/dist/vue.js'
  ])
  .pipe(gulp.dest('assets/vendor'));
});

gulp.task('build:scss', function() {
  gulp.src('src/scss/**')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('assets/css'));
});


// --- WORK FLOW
gulp.task('default', ['move', 'build:scss'], function() {});

gulp.task('watch', function() {
  gulp.watch('src/scss/**', ['build:scss']);
});
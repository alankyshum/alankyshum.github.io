var gulp = require('gulp');

gulp.task('move', function() {
  gulp.src(['node_modules/normalize.css/normalize.css', 'node_modules/vue/dist/vue.min.js'])
  .pipe(gulp.dest('assets/vendor'));
});
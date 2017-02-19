const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');

gulp.task('move', function() {
  gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/vue/dist/vue.min.js',
    'node_modules/vue/dist/vue.js'
  ])
  .pipe(gulp.dest('assets/vendor'));
});

gulp.task('build:scss-dev', function() {
  gulp.src('src/scss/**')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('assets/css'));
});

gulp.task('build:scss', function() {
  gulp.src('src/scss/**')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(cleanCSS({ compatibility: '*' }))
  .pipe(gulp.dest('assets/css'));
});

gulp.task('build:js-dev', function() {
  gulp.src('src/js/**')
  .pipe(gulp.dest('assets/js'));
});

gulp.task('build:js', function() {
  gulp.src('src/js/**')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('assets/js'));
});

// --- WORK FLOW
gulp.task('default', ['move', 'build:scss', 'build:js'], function() {});

gulp.task('watch', function() {
  gulp.watch('src/scss/**', ['build:scss-dev']);
  gulp.watch('src/js/**', ['build:js-dev']);
});
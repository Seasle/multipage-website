const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const pump = require('pump');

sass.compiler = require('node-sass');

gulp.task('pug:build', cb => {
    pump([
        gulp.src(['./src/pug/**/*.pug', '!./src/pug/includes/**/*.pug']),
        pug({
            pretty: '\t'
        }),
        gulp.dest('./dist/')
    ], cb);
});

gulp.task('sass:build', cb => {
    pump([
        gulp.src('./src/sass/*.scss'),
        sass({
            indentWidth: 4,
            outputStyle: 'expanded'
        })
            .on('error', sass.logError),
        autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }),
        gulp.dest('./dist/Styles/')
    ], cb);
});

gulp.task('js:build', cb => {
    pump([
        gulp.src('./src/js/*.js'),
        babel({

        }),
        gulp.dest('./dist/Scripts/')
    ], cb);
});

gulp.task('sass:minify', cb => {
    pump([
        gulp.src(['./dist/Styles/**/*.css', '!./dist/Styles/**/*.min.css']),
        clean(),
        rename({
            suffix: '.min'
        }),
        gulp.dest('./dist/Styles/')
    ], cb);
});

gulp.task('js:minify', cb => {
    pump([
        gulp.src(['./dist/Scripts/**/*.js', '!./dist/Scripts/**/*.min.js']),
        uglify(),
        rename({
            suffix: '.min'
        }),
        gulp.dest('./dist/Scripts/')
    ], cb);
});

gulp.task('pug:watch', cb => {
    gulp.watch('./src/pug/**/*.pug', gulp.series('pug:build'))
});

gulp.task('sass:watch', cb => {
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass:build', 'sass:minify'))
});

gulp.task('js:watch', cb => {
    gulp.watch('./src/js/**/*.js', gulp.series('js:build', 'js:minify'))
});

gulp.task('build', gulp.parallel('pug:build', 'sass:build', 'js:build'));

gulp.task('minify', gulp.parallel('sass:minify', 'js:minify'));

gulp.task('watch', gulp.parallel('pug:watch', 'sass:watch', 'js:watch'));

gulp.task('default', gulp.series('build', 'minify', 'watch'));
import gulp from "gulp";
import sass from "gulp-sass";
import postcss from "gulp-postcss";
import esbuild from "gulp-esbuild";
import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import postcssCsso from "postcss-csso";
import * as dartSass from "sass";

export const styles = () =>
  gulp
    .src("src/styles/*.scss")
    .pipe(sass(dartSass)())
    .pipe(postcss([postcssImport, autoprefixer, postcssCsso]))
    .pipe(gulp.dest("dist/styles"));

export const scripts = () =>
  gulp
    .src("src/scripts/*.js")
    .pipe(esbuild({ minify: true, sourcemap: true }))
    .pipe(gulp.dest("dist/scripts"));

export const watch = () => {
  gulp.watch("src/styles/**/*.scss", gulp.series(styles));
  gulp.watch("src/scripts/**/*.js", gulp.series(scripts));
};

export const dev = gulp.series(gulp.parallel(styles, scripts), watch);

export const build = gulp.series(gulp.parallel(styles, scripts));

const { watch, src, dest, series } = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const GulpClient = require('gulp');

function styles() {
  return src('src/scss/**/*.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css'));
}

function scripts() {
  return src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(dest('dist/js'));
}

exports.default = function () {
  watch('src/scss/**/*.scss', styles);
  watch('src/js/**/*.js', scripts);
};

exports.build = series(styles, scripts);

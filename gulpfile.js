const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('./UI/UX-sass/accordian.scss')
    .pipe(sass())
    .pipe(dest(' accordian-css'))
}

function watchTask() {
  watch(['./UI/UX-sass/accordian.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
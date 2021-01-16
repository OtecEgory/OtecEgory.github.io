const { src, prependListener } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')

function styles(){
  return gulp.src('./src/styles/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/css'))
    .pipe(browserSync.stream());
}

// function script(){
//   return gulp.src('./src/js/index.js')
//   .pipe(browserSync.stream())
// }

function serve(){
  browserSync.init({
    server: {
        baseDir: "./src"
    }
  })
  gulp.watch("./src/styles/**/*.sass",gulp.series(styles));
  gulp.watch("./src/*.html").on('change', browserSync.reload)
  gulp.watch("./src/js/*.js").on('change', browserSync.reload)
}


function test (cb){
  console.log('test')
  cb()
}

exports.serve = serve
exports.default = gulp.series(styles)

var gulp = require('gulp');
var minify = require('gulp-minify');
 
gulp.task('compress', function() {
  gulp.src('dist/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.d.ts','.js.map', '-min.js']
    }))
    .pipe(gulp.dest('bin'))
});

gulp.task('default', function () {
    console.log('gulp funciona correctamente');
});
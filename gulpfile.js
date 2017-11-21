var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
gulp.task('sass',function(){
    gulp.src(['css/src/all.scss'])
        .pipe(sass({
            style : 'expanded'
        }))
        .pipe(gulp.dest('css/dist'))
});
gulp.task('default',function(){
    gulp.watch('css/src/*.scss',['sass']);
});

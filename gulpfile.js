var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cleanCss = require('gulp-clean-css');
gulp.task('sass',function(){
    gulp.src(['css/src/*.scss'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sass({
            style : 'expanded'
        }))
        .pipe(gulp.dest('css/dist'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest('css/dist'))
});
gulp.task('default',function(){
    gulp.watch('css/src/*.scss',['sass']);
});

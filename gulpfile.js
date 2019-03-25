var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function () {
    gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css_'));
});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});




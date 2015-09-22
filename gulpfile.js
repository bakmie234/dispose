var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var wiredep = require('wiredep').stream;

gulp.task('default', function () {
    //
});
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000,
        files: ["*/**/*.*"]
    });
});


gulp.task('bower', function () {
    gulp.src('./index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('./'));
});
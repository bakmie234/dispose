var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var wiredep = require('wiredep').stream;
var taskListing = require('gulp-task-listing');

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000,
        files: ["*/**/*.*"]
    });
});

gulp.task('default', taskListing);

gulp.task('inject', function () {
    gulp.src('./index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('./'));
});
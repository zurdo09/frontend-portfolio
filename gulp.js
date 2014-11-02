


var w3cjs = require('gulp-w3cjs');

gulp.task('w3cjs', function () {
    gulp.src('src/*.html')
        .pipe(w3cjs());
});

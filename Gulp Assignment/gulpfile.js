import gulp from 'gulp';
import concat from 'gulp-concat';

export function defaultTask() {
    return gulp
    .src(['src/**/*.js', 'src/**/*.css', 'src/**/*.html', 'src/**/*.json'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dest/files'));
}

gulp.task('default', defaultTask);
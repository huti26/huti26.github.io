var gulp = require('gulp');

gulp.task('sass', function () {
    var sass = require('gulp-sass');
    return gulp.src('custom-bootstrap.scss')
        .pipe(sass())
        .pipe(gulp.dest('./bootstrap/css/'))
});

gulp.task('minify-css', () => {
    let cleanCSS = require('gulp-clean-css');
    return gulp.src('./bootstrap/css/*.css')
        .pipe(cleanCSS({ compatibility: '*' }))
        .pipe(gulp.dest('./bootstrap/css/'));
});


gulp.task('autoprefixer', () => {
    const autoprefixer = require('autoprefixer')
    const sourcemaps = require('gulp-sourcemaps')
    const postcss = require('gulp-postcss')

    return gulp.src('./bootstrap/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./bootstrap/css/'))
})

gulp.task('css', gulp.series('sass', 'autoprefixer', 'minify-css', function (done) {
    done();
}));



function defaultTask(cb) {
    // place code for your default task here
    // sass autoprefix minify
    cb();
}



exports.default = defaultTask


var gulp = require('gulp');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');
var del = require('del');
var browserSync = require('browser-sync').create();
var tsProject = ts.createProject("./tsconfig.json");

gulp.task("hello", function(){ console.log("Hi Arun!!! . How are you ??")});

// compile
gulp.task("compile-ts", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

// Clean
gulp.task('clean', function () {
        del( "./dist/**");
});

// Copy-assets
gulp.task('copy:assets', function () {
       return gulp.src(["./ui/*.html"]).pipe(gulp.dest('./dist/UI/'));
});

// Copy-assets- main
gulp.task('copy:main', function () {
       return gulp.src(["./*.html"]).pipe(gulp.dest('./dist/'));
});

//Build
gulp.task('build', ['clean','compile-ts','copy:assets','copy:main']);

//Convert SASS to CSS
gulp.task('sass', function () {
        return gulp.src("app/scss/*.scss").pipe(sass()).pipe(gulp.dest('app/css'))
 });

// Watch 
 gulp.task('watch', function () {
 gulp.watch('app/scss/*.scss',['sass']);
});




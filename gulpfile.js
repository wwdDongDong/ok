/**
 * Created by 王伟东 on 2017/9/21.
 */
var gulp  = require("gulp");
var sass = require("gulp-ruby-sass");
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var ngAnnotate = require('gulp-ng-annotate');
var imgMin = require('gulp-imagemin');
gulp.task('index',function(){
    gulp.src("./index.html")
        .pipe(gulp.dest("./dist"))
});
gulp.task('copyCom',function(){
    gulp.src("./components/**/**/*.html")
        .pipe(gulp.dest("./dist/components"))
});
gulp.task('copyCon',function(){
    gulp.src("./components/**/**/*.js")
        .pipe(gulp.dest("./dist/components"))
});
gulp.task('sass',function(){
    return sass("./css/all.scss")
        .on("sass",sass.logError)
        .pipe(gulp.dest("./dist/css"))
});
gulp.task("watchSass",function(){
    gulp.watch("./css/**/*.scss",["sass"]);
    gulp.watch("./index.html",["index"]);
});

//拷贝图片
gulp.task('copyImg',function(){
    gulp.src("./img/*.png")
        .pipe(imgMin())
        .pipe(gulp.dest("./dist/img"))
});
//合并第三方库
gulp.task('lib-bundle',function(){
    var files = [
        './lib/angular/angular.min.js',
        './lib/angular/angular-ui-route.js',
        './lib/jquery/jquery-3.2.1.min.js'
    ];
    gulp.src(files)
        .pipe(concat('lib-bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
});
//合并自定义js文件
gulp.task('js-bundle',function(){
    var b = browserify();
    // b.add('./components/changeSuccess/init.js');
    b.add('./components/init.js');
    // b.add('./components/registerSuccess/init.js');
    b.add("./app.js");
    return b.bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(ngAnnotate())
        .pipe(gulp.dest('./dist/js'))
});
gulp.task('auto', function () {
    gulp.watch('./components/**/**/*.js', ['js-bundle']);
    gulp.watch('./components/**/**/*.html', ['copyCom']);
});
gulp.task('webserver',['watchSass','js-bundle'],function(){
    gulp.src('./dist')
        .pipe(webserver({
            port:8080,
            livereload:true
        }))
}) ;
gulp.task('default',function(){
    gulp.start('index','sass','copyCom','copyCon','lib-bundle','js-bundle')
});
// 雪碧图是为了减少http请求，因为在一个网页打开的时候，http请求占据了80%，减少http请求是前端工程师必须要知道的，
// 页面DOM结构渲染占据20%
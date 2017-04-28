var gulp        = require('gulp'); // gulp 모듈
var spritesmith = require('gulp.spritesmith');
var webserver = require('gulp-webserver');
var sourcemaps  = require('gulp-sourcemaps');
var autoprefixer= require('gulp-autoprefixer');
var sass        = require('gulp-sass');
var csslint     = require('gulp-csslint');
var concatcss   = require('gulp-concat-css');
var uglifycss   = require('gulp-uglifycss');
var rename      = require('gulp-rename');
var jshint      = require('gulp-jshint');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var gulpif      = require('gulp-if');
var del         = require('del');
var csso        = require('gulp-csso');
var livereload  = require('gulp-livereload');
var buffer      = require('vinyl-buffer');
var fileinclude = require('gulp-file-include');
var imagemin    = require('gulp-imagemin');
var merge       = require('merge-stream');

var config = {
    lint    : true,
    concat  : true,
    uglify  : true,
    rename  : true
};

var path ={
    js:{
        src: 'src/**/*.js',
        dest:'dist/js',
        filename:'common.js'
    },
    css:{
        src:'src/css/*.css',
        dest:'dist/css',
        filename:'default.css'
    },
    sass:{
        src:'src/**/*.scss'
    }
};


// gulp.task()를 사용해 기본 디폴트 데스크 정의
gulp.task('default',['sprite','sass','styles','scripts']);

gulp.task('watch',function(){
    gulp.watch(path.sass.src, ['sass']),
    gulp.watch(path.css.src, ['styles']),
    gulp.watch(path.js.src, ['scripts']);
});

gulp.task('clean',function(){
   del(['dist/*']);
});

gulp.task('server', function(){
    return gulp.src('./dist/html/')
        .pipe(webserver({
            fallback: 'index.html',
            livereload: true,
            open: true
        }));
});

gulp.task('fileinclude', function() {
    gulp.src(['./html/*.html'],{base:'./'})
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist'));
});

var scssOptions = { 
        /** 
        * outputStyle (Type : String , Default : nested) 
        * CSS의 컴파일 결과 코드스타일 지정 
        * Values : nested, expanded, compact, compressed 
        */ 
        outputStyle : "expanded", 
        /** 
        * indentType (>= v3.0.0 , Type : String , Default : space) 
        * 컴파일 된 CSS의 "들여쓰기" 의 타입 * Values : space , tab 
        */ 
        indentType : "tab", 
        /** 
        * indentWidth (>= v3.0.0, Type : Integer , Default : 2) 
        * 컴파일 된 CSS의 "들여쓰기" 의 갯수 
        */ 
        indentWidth : 1, // outputStyle 이 nested, expanded 인 경우에 사용 
        /** 
        * precision (Type : Integer , Default : 5) 
        * 컴파일 된 CSS 의 소수점 자리수. 
        */ 
        precision: 6, 
        /** 
        * sourceComments (Type : Boolean , Default : false) 
        * 컴파일 된 CSS 에 원본소스의 위치와 줄수 주석표시. 
        */ 
        sourceComments: true 
};
// image spritesmith
gulp.task('sprite', function(){
    var spriteData = gulp.src('images/pc/btn'+'*.png')
    .pipe(spritesmith({
        imgName: 'btn-sprite.png',
        padding: 20,
        algorithm: 'binary-tree',//top-down , binary-tree , left-right
        cssName: 'btn-sprite.css'
    }));

    var imgStream = spriteData.img
        .pipe(buffer())
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));

    var cssStream = spriteData.css
        .pipe(csso())
        .pipe(gulp.dest('dist/css'));

    return merge(imgStream, cssStream);

});

// sass
gulp.task('sass', function (){ 
    return gulp.src('src/scss/**/*.scss') 
        .pipe(sass(scssOptions).on('error', sass.logError)) 
        .pipe(gulp.dest('src/css/modules'));
});

// style
gulp.task('styles',function(){
    gulp.src(path.css.src)
        .pipe(gulpif(config.lint, csslint({'import':false})) )             //css 파일을 검사
        .pipe(gulpif(config.concat, concatcss(path.css.filename)) )  //css 파일을 병합
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(gulpif(config.rename, gulp.dest(path.css.dest)) )
        .pipe(gulpif(config.uglify ,uglifycss()) )
        .pipe(gulpif(config.rename, rename({suffix:'.min'})) )
        .pipe(gulp.dest( path.css.dest ));      //css 파일을 저장
    
});

// script
gulp.task('scripts',['js:hint','js:concat','js:uglify']);

gulp.task('js:hint',function(){
    gulp.src(path.js.src)
        .pipe(jshint())             //javascript 파일을 검사
        .pipe(jshint.reporter('jshint-stylish'))
});
gulp.task('js:concat',function(){
    gulp.src(path.js.src)
        .pipe(concat(path.js.filename))  //javascript 파일을 병합
        .pipe(gulp.dest(path.js.dest))
});
gulp.task('js:uglify',function(){
    gulp.src(path.js.dest +'/'+ path.js.filename)
        .pipe(gulpif(config.concat, uglify({              //javascript 파일을 한줄정리
            mangle: false,
            preserveComments : 'all'
        })) )
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(path.js.dest));      //javascript 파일을 저장
});


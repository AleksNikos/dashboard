'use strict';

var gulp = require('gulp'),
    mainBowerFiles = require('main-bower-files'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    //sass = require('gulp-sass'),
    less = require('gulp-less'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    gcmq = require('gulp-group-css-media-queries'),
    notify = require('gulp-notify'),
    //babel = require('gulp-babel'),
    reload = browserSync.reload;

var path = {
    vendor: {
        js: 'app/js/',
        css: 'app/css/',
    },
    dist: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'dist/',
        js: 'dist/js/',
        //sass: 'dist/css/',
        less: 'dist/css/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/'
    },
    app: { //Пути откуда брать исходники
        html: 'app/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'app/js/*.js',//В стилях и скриптах нам понадобятся только main файлы
        //sass: 'app/sass/*.sass',
        less: 'app/less/*.less',
        //css: 'app/css/*.css',
        img: 'app/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'app/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'app/**/*.html',
        js: 'app/js/**/*.js',
        //sass: 'app/sass/**/*.sass',
        less: 'app/less/**/*.less',
        css: 'app/css/**/*.css',
        img: 'app/img/**/*.*',
        fonts: 'app/fonts/**/*.*'
    },
    clean: './dist'
};

var config = {
    server: {
        baseDir: "./dist"
    },
    // tunnel: true,
    host: 'localhost',
    port: 8081,
    logPrefix: "alex_host"
};

gulp.task('vendorJs:build', function () {
    gulp.src( mainBowerFiles('**/*.js') ) //Выберем файлы по нужному пути
        .pipe(gulp.dest(path.vendor.js)) //Выплюнем готовый файл в app
});

gulp.task('vendorCss:build', function () {
    gulp.src( mainBowerFiles('**/*.css') ) //Выберем файлы по нужному пути
        .pipe(gulp.dest(path.vendor.css)) //И в app
});

gulp.task('html:build', function () {
    gulp.src(path.app.html) //Выберем файлы по нужному пути
        .pipe(gulp.dest(path.dist.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task('js:build', function () {
    gulp.src(path.app.js) //Найдем наш main файл
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        //.pipe(babel())
        .pipe(uglify().on('error', notify.onError())) //Сожмем наш js
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.dist.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});

// gulp.task('sass:build', function () {
//     gulp.src(path.app.scss) //Выберем наш main.scss
//         .pipe(sourcemaps.init()) //То же самое что и с js
//         .pipe(sass()) //Скомпилируем
//         .pipe(prefixer()) //Добавим вендорные префиксы
//         .pipe(cleanCSS()) //Сожмем
//         .pipe(gcmq()) //Сгруппируем медиазапросы
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest(path.dist.scss)) //И в build
//         .pipe(reload({stream: true}));
// });

gulp.task('less:build', function () {
    gulp.src(path.app.less)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(prefixer())
        // .pipe(cleanCSS())
        .pipe(gcmq()) //Сгруппируем медиазапросы
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dist.less))
        .pipe(reload({stream: true}));
});

// gulp.task('css:build', function () {
//     gulp.src(path.app.css) //Выберем наш main.css
//         .pipe(sourcemaps.init()) //То же самое что и с js
//         .pipe(gcmq())
//         .pipe(gulp.dest(path.dist.css)) //И в build
//         .pipe(reload({stream: true}));
// });

gulp.task('image:build', function () {
    gulp.src(path.app.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.dist.img)) //И бросим в build
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.app.fonts)
        .pipe(gulp.dest(path.dist.fonts))
});

gulp.task('build', [
    'vendorCss:build',
    'vendorJs:build',
    'html:build',
    'js:build',
    //'sass:build',
    'less:build',
    //'css:build',
    'fonts:build',
    'image:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    // watch([path.watch.sass], function(event, cb) {
    //     gulp.start('scss:build');
    // });
    watch([path.watch.less], function(event, cb) {
        gulp.start('less:build');
    });
    // watch([path.watch.css], function(event, cb) {
    //     gulp.start('css:build');
    // });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    // watch([path.watch.img], function(event, cb) {
    //     gulp.start('image:build');
    // });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});


gulp.task('webserver', function () {
    browserSync(config);
});



gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});



gulp.task('default', ['build', 'webserver', 'watch']);
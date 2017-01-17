var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	cleancss = require('gulp-clean-css'),
	browsersync = require('browser-sync').create(),
	imagemin = require('gulp-imagemin'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	del = require('del'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	replace = require('gulp-replace'),
	pathLess = require('path'),
	less = require('gulp-less');

var path = {
	dist : './dist/',
	cssfolder : './src/css/',
    cssout : './dist/css',
	css : './src/css/**/*.css',
	less : './src/less/**/*.less',
	htmlout : './dist/html',
	html : './src/html/**/*.html',
	jsout : './dist/js',
	js : './src/js/**/*.js',
	imageout : './dist/images',
    image: './src/images/**/*',
    fontout: './dist/fonts',
	font:'./src/fonts/**'
};

var showError = function(err){
	 console.log( '\n错误文件:',err.file,'\n错误行数:',err.line,'\n错误信息:',err.message);
}

/*output dist/html*/
gulp.task('html' , function () {
	return gulp.src(path.html)
		.pipe(replace(/css\/(.+)\.css/g , 'css/$1.min.css'))
		.pipe(replace(/js\/(.+)\.js/g , 'js/$1.min.js'))
		.pipe(gulp.dest(path.htmlout))
})

/*监听less文件，编译输出src/css目录*/
gulp.task('less' , function () {
	return gulp.src(path.less)
		.pipe(sourcemaps.init())
		.pipe(less(/*{
			paths: [ pathLess.join(__dirname, './reset.less') ]
		}*/)).on('error', function(err){ showError(err) })
		.pipe(autoprefixer([
			'ie >= 9',
		    'edge >= 20',
		    'ff >= 44',
		    'chrome >= 48',
		    'safari >= 8',
		    'opera >= 35',
		    'ios >= 8'])
		)
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.cssfolder))
})
gulp.task('watchLess' , ['less'] , function () {
	gulp.watch(path.less , ['less'])
})

/*output dist/css*/
gulp.task('css' , ['less'] , function () {
	return gulp.src(path.css)
		.pipe(sourcemaps.init())
		.pipe(cleancss({compatibility: 'ie8'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(path.cssout))
})


/*output dist/script*/
gulp.task('script' , function () {
	return gulp.src(path.js)
		// .pipe(uglify())
        .pipe(sourcemaps.init())
		.pipe(rename({suffix : '.min'}))
        .pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(path.jsout))
})

/* output font*/
gulp.task('font', function(){
	return gulp.src(path.font)
		.pipe(gulp.dest(path.fontout))
})

/* output images*/
gulp.task('images', function(){
    return gulp.src(path.image)
		.pipe(gulp.dest(path.imageout))
})

/* liveload */
gulp.task('live', ['watchLess'] , function () {
	browsersync.init({
		port:3333,
		server : {
			baseDir : ['./'],
			index : './'
		}
	})
	gulp.watch(path.less).on('change' , browsersync.reload)
	gulp.watch(path.css).on('change' , browsersync.reload)
    gulp.watch(path.js).on('change' , browsersync.reload)
	gulp.watch(path.html).on('change' , browsersync.reload)
})


/*delete dist directory*/
gulp.task('del' , function () {
	del(path.dist);
});
gulp.task('output', ['html','css','script','font','images'])
gulp.task('default',['live']);

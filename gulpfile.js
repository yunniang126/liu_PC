//严格模式
'use strict'
//nodejs引用模块的方式
//commonjs规范(同步)
var gulp = require('gulp');


// 创建任务
// 编译sass
var sass = require('gulp-sass');
gulp.task('compileSass',()=>{
	// 匹配（查找）sass文件
	// 文档流：
	// console.log(6632326);
	gulp.src('./src/sass/*.scss')

		// 编译，+ outputStyle可设置css单行、多行、压缩
		.pipe(sass({
			outputStyle:'expanded'//compact,expanded,compressed
		}).on('error',sass.logError)) //有错误跳过，不会停止监听

		// 输出
		.pipe(gulp.dest('./src/css/'))
});


// 监听文件修改并自动编译，可以开始就编写,运行:gulp jtSass
// *：表示文件名
// **：表示目录
gulp.task('jtSass',()=>{
	gulp.watch('./src/**/*.scss',['compileSass']);
	// gulp.watch('./src/**/*.scss',['compileSass']);

});

//压缩js
//合并
//重命名
var uglift = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
gulp.task('compressJs',()=>{
	//查找js
	gulp.src('./src/js/*.js')
		//合并
		.pipe(concat({ path: 'all.js',newLine: ';'}))
		//输出合并
		.pipe(gulp.dest('./dest/js/'))
		//压缩输入
		.pipe(uglift())
		//重命名
		.pipe(rename({
			suffix:".min",//添加后缀名
		}))
		//输出压缩后的文件
		// .pipe(gulp.dest('./src/compress/'))
		.pipe(gulp.dest('./dest/js/'))
});
	
//浏览器同步
//自动刷新
//browser-sync
var browserSync = require('browser-sync');
gulp.task('myserver',()=>{
	// 开启服务器,html更改可变
	browserSync({
		// server:{
		// 	baseDir:['./src/']
		// }
		//1同步
		// server:'./src/',

		// 代理服务器
		proxy:'http://localhost:10086',

		// 端口
		port:10087,
		
		//2刷新,html更改可变
		files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']

	});
	// 监听sass文件修改
	gulp.watch('./src/**/*.scss',['compileSass']);

});

//更新文件  gulp compileSass
//监听更新文件  gulp jtSass
//js压缩 gulp compressJs
//js合并 gulp compressJs
//浏览器同步 gulp myserver

 
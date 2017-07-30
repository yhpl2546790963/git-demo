'use strict';
//载入gulp模块
var gulp= require("gulp");
var less=require("gulp-less");
var cssnano=require("gulp-cssnano");
var browserSync=require("broswer-sync").create();
//注册一个任务
gulp.task("copy",function(){
	//当gulp执行dist任务是会执行该函数
	//console.log("hello world");
	//.src取文件
	gulp.src("src/index.html")
		.pipe(gulp.dest("dist/"));
});
gulp.task("dist",function(){
	//gulp.watch("src/index.html",["copy"]);
	gulp.watch("src/styles/*.less",["style"]);
});
gulp.task("style",function(){
	gulp.src("src/styles/*.less")
		.pipe(less())
		.pipe(cssnano())
		.pipe(gulp.dest("dist/css/"));
});
gulp.task("serve",function(){
	broswerSync.init({
		server:{
			baseDir: "./"
		}
	});
});




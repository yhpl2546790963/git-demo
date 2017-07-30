'use strict';
//����gulpģ��
var gulp= require("gulp");
var less=require("gulp-less");
var cssnano=require("gulp-cssnano");
var browserSync=require("broswer-sync").create();
//ע��һ������
gulp.task("copy",function(){
	//��gulpִ��dist�����ǻ�ִ�иú���
	//console.log("hello world");
	//.srcȡ�ļ�
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




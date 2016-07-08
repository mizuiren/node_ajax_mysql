"use strict"
var http=require("http");
var fs=require("fs");
var path=require("path");
var mysql= require('mysql');
var url= require('url');

var server=http.createServer(function(req,res){
	var resType;
	var extname=path.extname(req.url);
	var arrKey=[".html","",".js",".css",".gif",".jpg",".png",".ico"];
	var arrValue=["text/html","text/html","text/javascript","text/css","image/gif","image/jpeg","image/png","image/icon"]
	arrKey.map(function(key,index){
		if(extname==key){
			resType=arrValue[index];
		}
	})
	if(req.url=="/"){
		fs.readFile("./x.html",function(err,data){
			readSponse(res,err,data,resType);
		})
	}else{
		var url="."+req.url;
		fs.readFile(url,function(err,data){
			readSponse(res,err,data,resType);
		})
	}
	console.log("\n"+getTime()+"发送了一次请求。请求资源"+path.basename(req.url)+"\n");
}).listen(5555);

console.log("\n------------------------------------------------");
console.log(getTime()+"Node启动成功!\n"+getTime()+"请在浏览器打开localhost:5555");
console.log("------------------------------------------------\n");

function readSponse(res,err,data,resType){
	if(err){
		console.log(err);
		res.end(data);
	}else{
		res.writeHead(200,{"Content-Type":resType});
		res.end(data);
	}
}

function getTime(){
	var date=new Date(),
	year=date.getFullYear(),
	mon=date.getMonth()<10?"0"+(date.getMonth()+1):date.getMonth()+1,
	day=date.getDate()<10?"0"+date.getDate():date.getDate(),
	hour=date.getHours()<10?"0"+date.getHours():date.getHours(),
	min=date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes(),
	sec=date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds();
	return year+"-"+mon+"-"+day+" "+hour+":"+min+":"+sec+" ";
}

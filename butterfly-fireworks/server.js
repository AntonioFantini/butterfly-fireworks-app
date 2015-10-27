var express   =    require("express");
var dao= require('./mysql/dao.js');

var app       =    express();

app.get("/dao/getFornitori",function(req,res){
	var result = dao.getFornitori();
	console.log(result);
	res.write(
		'<h1>'+result+'</h1>'
	);
});

app.get("/dao/getAvailableItemsInStore",function(req,res){
	res.write(
		'<h1>'+dao.getAvailableItemsInStore()+'</h1>'
	);
});

app.listen(3000);

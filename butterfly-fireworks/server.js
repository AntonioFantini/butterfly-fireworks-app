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
    var callback = function(err, result) {
        //res.writeHead('200', {
          //  'Content-Type' : 'x-application/json'
        // });
        res.write(
		  '<h1>'+result+'</h1>'
	       );
        console.log('json:', result);
        res.end(result);
    };
	dao.getAvailableItemsInStore(callback);
});

app.listen(3000);

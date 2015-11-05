var express   =    require("express");
var dao= require('./mysql/dao.js');

var app       =    express();

app.get("/dao/getFornitori",function(req,res){
    var callback = function(err, result) {
    if(err){
        res.write(
      '<h1>'+err+'</h1>'
       );
    }
  //  res.writeHead('200', {
    //  'Content-Type' : 'x-application/json'
    // });
    res.write(
      '<h1>'+JSON.stringify(result)+'</h1>'
       );
    console.log('json:', result);
    res.end();
};
	var result = dao.getFornitori(callback);
});

app.get("/dao/getAvailableItemsInStore",function(req,res){
    var callback = function(err, result) {
    if(err){
        res.write(
      '<h1>'+err+'</h1>'
       );
    }
   // res.writeHead('200', {
     // 'Content-Type' : 'x-application/json'
    // });
    res.write(
      '<h1>'+JSON.stringify(result)+'</h1>'
       );
    console.log('json:', result);
    res.end();
};
	dao.getAvailableItemsInStore(callback);
});

app.listen(3000);

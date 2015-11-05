var express   =    require("express");
var dao= require('./mysql/dao.js');
var path    = require("path");

var app       =    express();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+ '/public/index.html'));
});


app.get("/dao/getFornitori",function(req,res){
    var callback = function(err, result) {
        if(err){
            res.write(
                err
           );
        }
        res.writeHead('200', {
            'Content-Type' : 'x-application/json'
        });
        res.end(JSON.stringify(result));
    };
	dao.getFornitori(callback);
});

app.get("/dao/getAvailableItemsInStore",function(req,res){
    var callback = function(err, result) {
        if(err){
            res.write(
                err
           );
        }
        res.writeHead('200', {
            'Content-Type' : 'x-application/json'
        });
        res.end(JSON.stringify(result));
    };
	dao.getAvailableItemsInStore(callback);
});

app.listen(3000);

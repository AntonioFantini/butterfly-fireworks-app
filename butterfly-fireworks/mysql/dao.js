var mysql = require('mysql');
var fs = require('fs');

module.exports = {
	getFornitori: function(callback){
		 executeQuery('SELECT * from Fornitore;', callback);
	},
    getAvailableItemsInStore: function(callback){
         executeQuery('SELECT * , count(idBomba) as totale FROM bf_schema.Store where dataScarico is null group by idBomba;', callback);
    }
}

var connectionProps = JSON.parse(fs.readFileSync('./resources/mysql.json','utf8'));

var connection = mysql.createConnection({
  host     : connectionProps.host,
  user     : connectionProps.user,
  password : connectionProps.password,
  database : connectionProps.database
});


function executeQuery(query, callback) {

    connection.query(query, function(err, rows, fields) {
     if (!err){
        console.log('The solution is: ', rows);
         callback(null, rows);
     }else{
        console.log('Error while performing Query.');
         callback(err,null);
     }
  
        

    });


}
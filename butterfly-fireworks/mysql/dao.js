var mysql = require('mysql');
var fs = require('fs');

module.exports = {
	getFornitori: function(){
		return findAllFornitori();
	}
}

var connectionProps = JSON.parse(fs.readFileSync('./resources/mysql.json','utf8'));

var pool      =    mysql.createPool({
  connectionLimit : 100, 
  host     : connectionProps.host,
  user     : connectionProps.user,
  password : connectionProps.password,
  database : connectionProps.database
});

function findAllFornitori(){
	executeQuery('SELECT * from Fornitore');
}


function executeQuery(query) {
   pool.getConnection(function(err,connection){
	        if (err) {
	          connection.release();
	          //res.json({"code" : 100, "status" : "Error in connection database"});
	          console.log(err);
	          return;
	        }  

		    console.log('connected as id ' + connection.threadId);
		    connection.query(query, function(err, rows, fields) {
			connection.release();
			 
			 if (!err)
			    console.log('The solution is: ', rows);
			 else
			    console.log('Error while performing Query.');
			});
	   
	        connection.on('error', function(err) {      
	           //   res.json({"code" : 100, "status" : "Error in connection database"});
	              console.log(err);
	              return;    
	        });
	    });
}
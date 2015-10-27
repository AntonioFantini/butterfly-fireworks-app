var mysql = require('mysql');
var fs = require('fs');

module.exports = {
	getFornitori: function(){
		return findAllFornitori();
	},
    getAvailableItemsInStore: function(){
        return findAvailableItemsInStore();
    }
}

var connectionProps = JSON.parse(fs.readFileSync('./resources/mysql.json','utf8'));

var connection = mysql.createConnection({
  host     : connectionProps.host,
  user     : connectionProps.user,
  password : connectionProps.password,
  database : connectionProps.database
});

function findAllFornitori(){
	return executeQuery('SELECT * from Fornitore;');
}

function findAvailableItemsInStore(){
    return executeQuery('SELECT * , count(idBomba) as totale FROM bf_schema.Store where dataScarico is null group by idBomba;');
}


function executeQuery(query) {

    connection.query(query, function(err, rows, fields) {
     if (!err)
        console.log('The solution is: ', rows);
     else
        console.log('Error while performing Query.');

    return rows;
    });


}
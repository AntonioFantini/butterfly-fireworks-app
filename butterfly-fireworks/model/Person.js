module.exports.createPerson = function(id, userName, password, roleId){
	return new person(idUser, userName, password, idRole);
};

function Person(idUser, userName, password, idRole){
	this.idUser=idUser;
	this.userName=userName; 
	this.password=password;
	this.idRole=idRole;

}
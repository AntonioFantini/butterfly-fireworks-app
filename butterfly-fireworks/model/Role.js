module.exports.createRole=function(idRole, roleDesc){
	return new Role(idRole,roleDesc);
};

function Role(idRole, roleDesc){
	this.idRole=idRole;
	this.roleDesc=roleDesc;
}
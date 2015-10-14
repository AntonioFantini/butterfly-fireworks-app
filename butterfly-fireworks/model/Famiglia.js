module.exports.createFamiglia=function(idFamiglia,descrizioneFamiglia){
	return new Famiglia(idFamiglia,descrizioneFamiglia);
};


function Famiglia(idFamiglia,descrizioneFamiglia){
	this.idFamiglia=idFamiglia;
	this.descrizioneFamiglia=descrizioneFamiglia;

}
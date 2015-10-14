module.exports.createBomba=function(idBomba,tipo,peso,idFamiglia,idFornitore){
	return new Bomba(idBomba,tipo,peso,idFamiglia,idFornitore);
};


function Bomba(idBomba,tipo,peso,idFamiglia,idFornitore){
	this.idBomba=idBomba;
	this.tipo=tipo;
	this.peso=peso;
	this.idFamiglia=idFamiglia;
	this.idFornitore=idFornitore;
}
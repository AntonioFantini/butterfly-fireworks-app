module.exports.createFornitore=function(idFornitore,nome){
	return new Fornitore(idFornitore,nome);
};


function Fornitore(idFornitore,nome){
	this.idFornitore=idFornitore;
	this.nome=nome;
}
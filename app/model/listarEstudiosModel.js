function listarEstudiosModel(connection) {
	this._connection = connection;
}

listarEstudiosModel.prototype.listarEstudiosBusca = function(nomeBusca, localBusca, callback) {
	if(typeof nomeBusca == 'undefined' && typeof localBusca == 'undefined' ||(nomeBusca == "" && localBusca == "")){ //se for undefined da select all (para quando cair nessa tela sem parametros)
		console.log("UNDEFINED");
		var sql = "SELECT * FROM estudio";
	}else{
		if(localBusca == ""){
			localBusca = "undefined"; 
			//se deixar string vazia ele da uma busca 'all' no banco
		}
		
		if(nomeBusca == ""){
			nomeBusca = "undefined"; 
			//se deixar string vazia ele da uma busca 'all' no banco
		}
		
		var sql = "SELECT * FROM estudio WHERE nomeEstudio like '%" + nomeBusca + "%' or estado like '%" + localBusca + "%' or cidade like '%" +localBusca+"%' or rua like '%"
		+ localBusca + "%' or bairro like '%" + localBusca + "%'";
		console.log(sql);
	}
	this._connection.query(sql, callback);
}

module.exports = function (application) { 
	return listarEstudiosModel;
}
function DetalheSalaModel(connection) {
	this._connection = connection;
}

DetalheSalaModel.prototype.listarEquipamentosPorId = function(idSala, callback) {
	var sql = 'select equipamento from sala where id_sala=' + idSala;
	this._connection.query(sql, callback);
}

module.exports = function (application) { 
	return DetalheSalaModel;
}
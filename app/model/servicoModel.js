function ServicoModel(connection) {
	this._connection = connection;
}

ServicoModel.prototype.listarServicos = function(callback) {
	var sql = 'SELECT * FROM servico';
	this._connection.query(sql, callback);
}
ServicoModel.prototype.listarServicoPorId = function(id_servico, callback) {
	var sql = 'SELECT * FROM servico where id_servico = ' + id_servico;
	this._connection.query(sql, callback);
}

module.exports = function (application) { 
	return ServicoModel;
}
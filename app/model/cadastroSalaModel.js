function CadastroSalaModel(connection) {
	this._connection = connection;
}

CadastroSalaModel.prototype.listarSalas = function(callback) {
	var sql = 'SELECT * FROM sala';
	this._connection.query(sql, callback);
}
CadastroSalaModel.prototype.listarSalaPorId = function(id_sala, callback) {
	var sql = 'SELECT * FROM sala WHERE id_sala = ' + id_sala.id_sala;
	this._connection.query(sql, callback);
}

CadastroSalaModel.prototype.cadastrarSala = function(sala, callback) {
    var sql = 'INSERT INTO sala SET ?';
    this._connection.query(sql, sala, callback); // tá dando erro aqui para inserir, ER_PARSE_ERROR
}

module.exports = function (application) { 
	return CadastroSalaModel;
}
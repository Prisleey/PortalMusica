function CadastroEstudioModel(connection) {
	this._connection = connection;
}

CadastroEstudioModel.prototype.listarEstudios = function(callback) {
	var sql = 'SELECT * FROM estudio';
	this._connection.query(sql, callback);
}
CadastroEstudioModel.prototype.listarEstudioPorId = function(id_estudio, callback) {
	var sql = 'SELECT * FROM estudio WHERE id_estudio = ' + id_estudio.id_estudio;
	this._connection.query(sql, callback);
}

CadastroEstudioModel.prototype.cadastrarEstudio = function(estudio, callback) {
    var sql = 'INSERT INTO estudio SET ?';
    this._connection.query(sql, estudio, callback); // tá dando erro aqui para inserir, ER_PARSE_ERROR
}

module.exports = function (application) { 
	return CadastroEstudioModel;
}
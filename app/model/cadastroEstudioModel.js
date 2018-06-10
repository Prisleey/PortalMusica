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

CadastroEstudioModel.prototype.getIdEstudio = function(estudio, callback) {
	var sql = 'SELECT id_estudio FROM estudio WHERE nomeEstudio = ? AND descricao = ? AND estado = ? AND cidade = ? AND bairro = ? AND rua = ? AND cep = ?';
	this._connection.query(sql, [estudio.nomeEstudio, estudio.descricao, estudio.estado, estudio.cidade, estudio.bairro, estudio.rua, estudio.cep], callback);
}

CadastroEstudioModel.prototype.cadastrarEstudio = function(estudio, callback) {
	console.log("VOU INICIAR O LOG DA NA MODEL DO ESTUDIO");
    console.log(estudio);
    console.log("FIM LOG MODEL ESTUDIO");
    var sql = 'INSERT INTO estudio SET ?';
    this._connection.query(sql, estudio, callback); // tá dando erro aqui para inserir, ER_PARSE_ERROR
}

CadastroEstudioModel.prototype.inserirHorarioEstudio = function(estudio, callback) {
    var sql = 'INSERT INTO estudio_horario_funcionamento SET ?';
    this._connection.query(sql, estudio, callback); // tá dando erro aqui para inserir, ER_PARSE_ERROR
}

module.exports = function (application) { 
	return CadastroEstudioModel;
}
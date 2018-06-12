function CadastroSalaModel(connection) {
	this._connection = connection;
}

CadastroSalaModel.prototype.listarSalas = function(callback) {
	var sql = 'SELECT * FROM sala';
	this._connection.query(sql, callback);
}

CadastroSalaModel.prototype.listarSalasDeEstudioX = function(id_estudio, callback) {
	var sql = 'SELECT * FROM sala WHERE id_estudio = ' + id_estudio;
	console.log(sql);
	this._connection.query(sql, callback);
}

CadastroSalaModel.prototype.listarSalaPorId = function(id_sala, callback) {
	var sql = 'SELECT * FROM sala WHERE id_sala = ' + id_sala;
	this._connection.query(sql, callback);
}

CadastroSalaModel.prototype.cadastrarSala = function(sala, callback) {
	sala.id_estudio = parseInt(sala.id_estudio);
	sala.valor_sala = parseFloat(sala.valor_sala);
	console.log(parseFloat(sala.valor_sala));
	console.log("CONSOLE LOG DA SALA");
	console.log(sala);
	console.log("FIM CONSOLE LOG SALA");
	var sql = 'INSERT INTO sala SET ?';
	this._connection.query(sql, sala, callback); // tá dando erro aqui para inserir, ER_PARSE_ERROR
	/*console.log('sala normal: ' + sala);
	console.log('sala unescape: ' + unescape(sala));
	console.log('sql: ' + sql);*/
}

CadastroSalaModel.prototype.agendar = function(dadosDaSala, callback){
	var sql = 'INSERT INTO agendamento SET ?';
    this._connection.query(sql, dadosDaSala, callback);
}
module.exports = function (application) { 
	return CadastroSalaModel;
}
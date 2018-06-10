function CadastroModel(connection) {
	this._connection = connection;
}

CadastroModel.prototype.listarEstudios = function(callback) {
	var sql = 'SELECT * FROM estudio';
	this._connection.query(sql, callback);
}
CadastroModel.prototype.getDetalheNoticia = function(id_noticia, callback) {
	var sql = 'SELECT * FROM noticias WHERE id_noticia = ' + id_noticia.id_noticia;
	this._connection.query(sql, callback);
}

CadastroModel.prototype.cadastrarEstudio = function(estudio, callback) {
    var sql = 'INSERT INTO estudio SET ?';
    this._connection.query(sql, estudio, callback); // tá dando erro aqui para inserir, ER_PARSE_ERROR
}

CadastroModel.prototype.get5UltimasNoticias = function(callback) {
	var sql = 'SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5';
	this._connection.query(sql, callback);
}

module.exports = function (application) { 
	return CadastroModel;
}
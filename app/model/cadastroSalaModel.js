function CadastroSalaModel(connection) {
	this._connection = connection;
}

CadastroSalaModel.prototype.getNoticias = function(callback) {
	var sql = 'SELECT * FROM noticias';
	this._connection.query(sql, callback);
}
CadastroSalaModel.prototype.getDetalheNoticia = function(id_noticia, callback) {
	var sql = 'SELECT * FROM noticias WHERE id_noticia = ' + id_noticia.id_noticia;
	this._connection.query(sql, callback);
}

CadastroSalaModel.prototype.cadastrarSala = function(sala, callback) {
    var sql = 'INSERT INTO sala SET ?';
    this._connection.query(sql, sala, callback); // tá dando erro aqui para inserir, ER_PARSE_ERROR
}

CadastroSalaModel.prototype.get5UltimasNoticias = function(callback) {
	var sql = 'SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5';
	this._connection.query(sql, callback);
}

module.exports = function (application) { 
	return CadastroSalaModel;
}
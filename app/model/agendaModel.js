function AgendaModel(connection) {
	this._connection = connection;
}

AgendaModel.prototype.listarAgendamentos = function(callback) {
	var sql = 'select '; 
		sql = sql + 'a.id_agendamento as id, ';
		sql = sql + 'b.nomeEstudio as estudio, ';
		sql = sql + 'c.nome_sala as sala, ';
		sql = sql + 'd.nome as musico, ';
		sql = sql + 'e.nome as servico, ';
		sql = sql + 'a.data_agendamento, ';
		sql = sql + 'a.hora_inicio, ';
		sql = sql + 'a.hora_fim, ';
		sql = sql + 'a.descricao ';
		sql = sql + 'from agendamento a ';
		sql = sql + 'inner join estudio b ';
		sql = sql + 'on b.id_estudio = a.id_estudio ';
		sql = sql + 'inner join sala c ';
		sql = sql + 'on c.id_sala = a.id_sala ';
		sql = sql + 'inner join user d ';
		sql = sql + 'on d.id = a.id_musico ';
		sql = sql + 'inner join servico e ';
		sql = sql + 'on e.id_servico = a.id_servico ';
	this._connection.query(sql, callback);
}

module.exports = function (application) { 
	return AgendaModel;
}
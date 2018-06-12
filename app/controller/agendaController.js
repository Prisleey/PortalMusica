module.exports.listarAgenda = function(application, req, res) {
	var connection = application.config.db_connection();
    var agendaM = new application.app.model.agendaModel(connection);

	agendaM.listarAgendamentos(function(error, result) {
        res.render('agenda.ejs', {agendamentos : result});
    });
}
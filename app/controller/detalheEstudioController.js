module.exports.detalheEstudio = function(application, req, res) {
	
    var id_estudio = req.query.estudio;
	var connection = application.config.db_connection();
    var listarModel = new application.app.model.cadastroEstudioModel(connection); //aqui to acessando model cadastroEstudio, mas pensando bem a gente poderia chamar ela de estudioModel apenas, com tudo que diz respeito a estudio.
    var servicoModel = new application.app.model.servicoModel(connection);
    var salaModel = new application.app.model.cadastroSalaModel(connection);

	listarModel.listarEstudioPorId(id_estudio, function(error, result) {
        servicoModel.listarServicos(function(error, servicos) {
            salaModel.listarSalasDeEstudioX(id_estudio, function(error, salas){
                console.log('sala: ');
                console.log(salas);
                console.log('sala: ');
                res.render('detalheEstudio.ejs', {estudio : result, servicos : servicos, salas : salas});
            });
        });
    });
}
module.exports.detalheSala = function(application, req, res) {
    
    // tudo sobre serviços está comentado pois é na tabela de serviços que está o valor do negócio.
    // no banco de dados sala tem valor_sala e serviço tem valor serviço, não sei qual valor usaremos...

    var id_estudio = req.query.id_estudio;
    var id_sala = req.query.id_sala;
    var id_servico = req.query.id_servico;

	var connection = application.config.db_connection();
    var estudioModel = new application.app.model.cadastroEstudioModel(connection);
    var salaModel = new application.app.model.cadastroSalaModel(connection);
    var servicoModel = new application.app.model.servicoModel(connection);

	estudioModel.listarEstudioPorId(id_estudio, function(error, result) {
    salaModel.listarSalaPorId(id_sala, function(error, sala) {
    //         servicoModel.listarSalasDeEstudioX(id_estudio, function(error, salas){
    //             console.log('sala: ');
    //             console.log(salas);
    //             console.log('sala: ');
            console.log(sala);
            //aqui pensei em criar uma variavel pra equipamentos e daí faço o split... e mando como parametro para a detalheSala.ejs
            res.render('detalheSala.ejs', {estudio : result, sala : sala});
    //         });
        });
    });

    
}

//POST ONDE É FEITO INSERT DO AGENDAMENTO
module.exports.postDetalheSala = function(application, req, res) {
    var dadosFormSala = req.body;

    dadosFormSala.id_estudio = parseInt(dadosFormSala.id_estudio);
    dadosFormSala.id_sala = parseInt(dadosFormSala.id_sala);
    dadosFormSala.id_servico = parseInt(dadosFormSala.id_servico);
    dadosFormSala.id_musico = parseInt(dadosFormSala.id_musico);
    
    console.log(dadosFormSala);
    var connection = application.config.db_connection();
    var salaModel = new application.app.model.cadastroSalaModel(connection);

    salaModel.agendar(dadosFormSala, function(error, result) {
        console.log(error); // aqui tá retornando erro: 
        res.redirect('/cadastro-sala'); //após o insert é redirecionado para o index ('/') ou qualquer outro que quiser.
    });
}

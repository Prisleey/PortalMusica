module.exports.showCadastroEstudio = function(application, req, res) {

    var connection = application.config.db_connection();
    var cadastroModel = new application.app.model.cadastroEstudioModel(connection);

    cadastroModel.listarEstudios(function(error, result) {
        // result é o retorno do select de estudios que envio para a view na variavel 'estudios'
        res.render('cadastrarSala.ejs', {estudios : result});
    });
}

module.exports.postCadastroSala = function(application, req, res) {
    // req.body retorna todos os atributos do formulário
    var dadosFormEstudio = req.body;

    //criei esse array para tirar o id_sala, pois não preciso inserir ele, no banco ele é auto_increment.
    var jsonSala = new Array();
    jsonSala = [{
        id_estudio : dadosFormEstudio.id_estudio,
        nome_sala : dadosFormEstudio.nome_sala,
        valor_sala : dadosFormEstudio.valor_sala,
        equipamento : dadosFormEstudio.equipamento
    }];

    // conexão mysql
    var connection = application.config.db_connection();
    // 'application é a aplicação em si, após isso são as pastas, app/model/ acessando o arquivo cadastroSalaModel.js passando por parametro a conexão.
    var cadastroSalaModel = new application.app.model.cadastroSalaModel(connection);

    cadastroSalaModel.cadastrarSala(JSON.stringify(jsonSala), function(error, result) {
        console.log(error); // aqui tá retornando erro: 
        res.redirect('/'); //após o insert é redirecionado para o index ('/') ou qualquer outro que quiser.
    });
}
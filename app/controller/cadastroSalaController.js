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
    var dadosFormSala = req.body;
console.log(dadosFormSala);

    // conexão mysql
    var connection = application.config.db_connection();
    // 'application é a aplicação em si, após isso são as pastas, app/model/ acessando o arquivo cadastroSalaModel.js passando por parametro a conexão.
    var cadastroSalaModel = new application.app.model.cadastroSalaModel(connection);

    cadastroSalaModel.cadastrarSala(dadosFormSala, function(error, result) {
        console.log(error); // aqui tá retornando erro: 
        res.redirect('/cadastro-sala'); //após o insert é redirecionado para o index ('/') ou qualquer outro que quiser.
    });
}
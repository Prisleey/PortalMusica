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

    // Aqui faz verificação se os campos foram preenchidos. primeiro parametro do assert é o name do atributo html, o segundo é a mensagem que vai retornar caso o campo não tenha sido preenchido.
    req.assert('id_estudio', 'Estúdio é obrigatório.').not().isEmpty();
    req.assert('valor_sala', 'Valor da sala é obrigatório.').not().isEmpty();
    req.assert('equipamento', 'Equipamento da sala é obrigatório.').not().isEmpty();
    req.assert('nome_sala', 'Nome da sala é obrigatório.').not().isEmpty();

    // coloca em uma variavel as mensagens que você definiu alí em cima,  
    // EX DE RETORNO: { location: 'params', param: 'id_estudio', msg: 'Estúdio é obrigatório.', value: undefined } ]
    var errors = req.validationErrors();

    if(errors) {
        console.log(errors);
        // caso tenha algum erro, a view 'cadastrarSala' é renderizada passando por parametro uma variavel chamada 'validacao' com os erros.
        res.render('cadastrarSala', { validacao : errors , estudios : {}});
        return;
    }

    // conexão mysql
    var connection = application.config.db_connection();
    // 'application é a aplicação em si, após isso são as pastas, app/model/ acessando o arquivo cadastroSalaModel.js passando por parametro a conexão.
    var cadastroSalaModel = new application.app.model.cadastroSalaModel(connection);

    cadastroSalaModel.cadastrarSala(dadosFormEstudio, function(error, result) {
        console.log(error);
        res.redirect('/'); //após o insert é redirecionado para o index ('/') ou qualquer outro que quiser.
    });
}
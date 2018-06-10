module.exports.showCadastroEstudio = function(application, req, res) {
    res.render('cadastrarEstudio.ejs');
}

module.exports.postCadastroEstudio = function(application, req, res) {
    var dadosFormEstudio = req.body;

    req.assert('nomeEstudio', 'Nome é obrigatório.').not().isEmpty();
    req.assert('descEstudio', 'Descrição é obrigatório.').not().isEmpty();
    req.assert('estadoEstudio', 'Estado é obrigatório.').not().isEmpty();
    req.assert('cidadeEstudio', 'Cidade é obrigatório.').not().isEmpty();
    req.assert('bairroEstudio', 'Bairro é obrigatório.').not().isEmpty();
    req.assert('ruaEstudio', 'Rua é obrigatório.').not().isEmpty();
    req.assert('CEPEstudio', 'Cep é obrigatório.').not().isEmpty();

    var errors = req.validationErrors();

    if(errors) {
        console.log(errors);
        //res.send('Existem erros no formulário');
        res.render('cadastrarEstudio', { validacao : errors });
        return;
        
    }
    var connection = application.config.db_connection();
    var cadastroModel = new application.app.model.cadastroEstudioModel(connection);

    cadastroModel.cadastrarEstudio(dadosFormEstudio, function(error, result) {
        console.log('manda pra index')
        res.redirect('/'); //usar redirect no post, para não ter problema de reenviar formulário
    });
}
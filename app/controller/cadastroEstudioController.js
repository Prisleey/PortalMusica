module.exports.showCadastroEstudio = function(application, req, res) {
    res.render('cadastrarEstudio.ejs');
}

module.exports.postCadastroEstudio = function(application, req, res) {
    var dadosFormEstudio = req.body;

    req.assert('nomeEstudio', 'Nome é obrigatório.').not().isEmpty();
    req.assert('descricao', 'Descrição é obrigatório.').not().isEmpty();
    req.assert('estado', 'Estado é obrigatório.').not().isEmpty();
    req.assert('cidade', 'Cidade é obrigatório.').not().isEmpty();
    req.assert('bairro', 'Bairro é obrigatório.').not().isEmpty();
    req.assert('rua', 'Rua é obrigatório.').not().isEmpty();
    req.assert('cep', 'Cep é obrigatório.').not().isEmpty();

    var errors = req.validationErrors();

    if(errors) {
        console.log(errors);
        //res.send('Existem erros no formulário');
        res.render('cadastrarEstudio', { validacao : errors });
        return;
        
    }

    var jsonEstudio = new Array();
    jsonEstudio = [{
        nomeEstudio : dadosFormEstudio.nomeEstudio,
        descricao : dadosFormEstudio.descricao,
        estado : dadosFormEstudio.estado,
        cidade : dadosFormEstudio.cidade,
        bairro : dadosFormEstudio.bairro,
        rua : dadosFormEstudio.rua,
        cep : dadosFormEstudio.cep
    }];
    var connection = application.config.db_connection();
    var cadastroEstudioModel = new application.app.model.cadastroEstudioModel(connection);

    cadastroEstudioModel.cadastrarEstudio(JSON.stringify(jsonEstudio), function(error, result) {
        console.log(error);
        res.redirect('/'); //usar redirect no post, para não ter problema de reenviar formulário
    });
}
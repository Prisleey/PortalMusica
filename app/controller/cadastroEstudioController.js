module.exports.showCadastroEstudio = function(application, req, res) {
    res.render('cadastrarEstudio.ejs');
}

module.exports.postCadastroEstudio = function(application, req, res) {
    var dadosFormEstudio = req.body;

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
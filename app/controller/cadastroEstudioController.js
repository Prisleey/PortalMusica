module.exports.showCadastroEstudio = function(application, req, res) {
    res.render('cadastrarEstudio.ejs');
}

module.exports.postCadastroEstudio = function(application, req, res) {
    var dadosFormEstudio = req.body;
    var horarioFuncionamentoTb = dadosFormEstudio;

    console.log("VOU INICIAR O LOG DA FORM ESTUDIO ANTES DELETE");
    console.log(dadosFormEstudio.nomeEstudio);
    console.log("FIM LOG FORM ESTUDIO");

    delete dadosFormEstudio['horarioFuncionamento']; //removi de dadosFormEstudio pois horarioFuncionamento não será inserido na mesma tabela
    delete dadosFormEstudio['diaSemana']; //removi de dadosFormEstudio pois diaSemana não será inserido na mesma tabela

    delete horarioFuncionamentoTb['nomeEstudio'];
    delete horarioFuncionamentoTb['descricao'];
    delete horarioFuncionamentoTb['estado'];
    delete horarioFuncionamentoTb['cidade'];
    delete horarioFuncionamentoTb['bairro'];
    delete horarioFuncionamentoTb['rua'];
    delete horarioFuncionamentoTb['cep'];

    var connection = application.config.db_connection();
    var cadastroEstudioModel = new application.app.model.cadastroEstudioModel(connection);

    cadastroEstudioModel.cadastrarEstudio(dadosFormEstudio, function(error, result) {
        console.log(error);
        res.redirect('/cadastro-estudio'); //usar redirect no post, para não ter problema de reenviar formulário
    });
    
    cadastroEstudioModel.getIdEstudio(dadosFormEstudio, function(error, result) {

        horarioFuncionamentoTb.id_estudio = result.id_estudio;
        console.log('RETORNO SQL: ' + result.id_estudio);

        cadastroEstudioModel.inserirHorarioEstudio(horarioFuncionamentoTb, function(error, result) {
            console.log(error);
            // res.redirect('/'); //usar redirect no post, para não ter problema de reenviar formulário
        });
    });
}
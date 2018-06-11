module.exports.showCadastroEstudio = function(application, req, res) {
    res.render('cadastrarEstudio.ejs');
}

module.exports.postCadastroEstudio = function(application, req, res) {
    var dadosFormEstudio = req.body;
    var horarioFuncionamentoTb = new Array();

    var resultSplit = dadosFormEstudio.horarioFuncionamento.split(" - ");
console.log(dadosFormEstudio.diaSemana);
    horarioFuncionamentoTb = {
        id_estudio : "",
        horario_inicio : resultSplit[0],
        horario_fim : resultSplit[1],
        dias_semana : dadosFormEstudio.diaSemana
    };

    delete dadosFormEstudio["horarioFuncionamento"]; //removi de dadosFormEstudio pois horarioFuncionamento não será inserido na mesma tabela
    delete dadosFormEstudio["diaSemana"];//removi de dadosFormEstudio pois diaSemana não será inserido na mesma tabela

    var connection = application.config.db_connection();
    var cadastroEstudioModel = new application.app.model.cadastroEstudioModel(connection);

    cadastroEstudioModel.cadastrarEstudio(dadosFormEstudio, function(error, result) {
        res.redirect('/cadastro-estudio'); //usar redirect no post, para não ter problema de reenviar formulário
    });
    
    cadastroEstudioModel.getIdEstudio(dadosFormEstudio, function(error, result) {
        horarioFuncionamentoTb.id_estudio = result[0].id_estudio;

        cadastroEstudioModel.inserirHorarioEstudio(JSON.stringify(horarioFuncionamentoTb), function(error, result) {
            console.log(error);
        });
    });
}
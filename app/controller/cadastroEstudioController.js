module.exports.showCadastroEstudio = function(application, req, res) {
    res.render('cadastrarEstudio.ejs');
}

module.exports.postCadastroEstudio = function(application, req, res) {
    var dadosFormEstudio = req.body;
    var horarioFuncionamentoTb = new Array();

    var resultSplit = dadosFormEstudio.horarioFuncionamento.split(" - ");
    var dias = JSON.stringify(dadosFormEstudio.diaSemana).replace('{','').replace('}','').replace('[','').replace(']','');
    horarioFuncionamentoTb = {
        id_estudio : "",
        horario_inicio : resultSplit[0],
        horario_fim : resultSplit[1],
        dias_semana : dias
    };

    delete dadosFormEstudio["horarioFuncionamento"]; //removi de dadosFormEstudio pois horarioFuncionamento não será inserido na mesma tabela
    delete dadosFormEstudio["diaSemana"];//removi de dadosFormEstudio pois diaSemana não será inserido na mesma tabela

    var connection = application.config.db_connection();
    var cadastroEstudioModel = new application.app.model.cadastroEstudioModel(connection);

    cadastroEstudioModel.cadastrarEstudio(dadosFormEstudio, function(error, result) {
        cadastroEstudioModel.getIdEstudio(dadosFormEstudio, function(error, result) {
            horarioFuncionamentoTb.id_estudio = result[0].id_estudio;
            cadastroEstudioModel.inserirHorarioEstudio(horarioFuncionamentoTb, function(error, result) {
                res.redirect('/cadastro-estudio'); //usar redirect no post, para não ter problema de reenviar formulário
            });
        });
    });
    
    
}
module.exports.listarEstudios = function(application, req, res) {
	
	const querystring = require('querystring');
	
	var nomeBusca = req.query.nome;
	var localBusca = req.query.local;
	
	var connection = application.config.db_connection();
    var listarModel = new application.app.model.listarEstudiosModel(connection);
	
	
	//faz uma busca na tabela de estudios baseado na pesquisa
	listarModel.listarEstudiosBusca(nomeBusca, localBusca, function(error, result) {
		console.log("OPA RESULTADO");
		console.log(result);
		console.log("FIM RESULTADO");
        // result é o retorno do select de estudios que envio para a view na variavel 'estudios'
        res.render('listarEstudios.ejs', {estudios : result});
    });
	
    //res.render('listarEstudios.ejs');
}
module.exports = function(application) {
    application.get('/cadastro', function(req, res) {
        application.app.controller.cadastroController.cadastro(application, req, res);
    });

    application.post('/cadastro', function(req, res) {
        application.app.controller.cadastroController.cadastro(application, req, res);
    });

    application.get('/', function(req, res) {
        res.render('cadastro-estudio.ejs');
    });
}
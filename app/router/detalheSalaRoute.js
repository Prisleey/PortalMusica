module.exports = function(application) {
    application.get('/detalhe-sala', function(req, res) {
        application.app.controller.detalheSalaController.detalheSala(application, req, res);
    });
}
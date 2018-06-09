module.exports = function(application) {
    application.get('/', function(req, res) {
        application.app.controller.indexController.index(application, req, res);
    });

    application.post('/', function(req, res) {
        application.app.controller.indexController.index(application, req, res);
    });
}
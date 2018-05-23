var Estudio = require('../model/estudio');


module.exports = function(application) {
    application.get('/login', function(req, res) {
        //res.render('login.ejs');
        application.app.controller.loginController.login(application, req, res);
    });

    application.post('/login', function(req, res) {
        //res.render('login.ejs');
        application.app.controller.loginController.login(application, req, res);
    });

    application.get('/es', function(req, res) {
        var meuEstudio = new Estudio({nome : 'estudiozao'});
        meuEstudio.save(function(err) {
            console.log('teste');
        });
        res.render('login.ejs');

        //application.app.controller.loginController.login(application, req, res);
    });
}
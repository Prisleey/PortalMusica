module.exports.login = function(application, req, res) {
    var dadosFormLogin = req.body;

    req.assert('documento', 'CPF é obrigatório.').notEmpty();
    req.assert('senha', 'Senha é obrigatório.').notEmpty();

    var errors = req.validationErrors();

    if(errors) {
        //res.send('Existem erros no formulário');
        
        res.render('login', { validacao : errors });
        return;
    }
    res.render('login.ejs');
}
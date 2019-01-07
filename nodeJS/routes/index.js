var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tabela de usuarios' });
});

router.get('/update', function(req, res, next) {
  res.render('update', { title: 'Atualizar Usuarios' });
});


router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Criar Usuarios' });
});



module.exports = router;

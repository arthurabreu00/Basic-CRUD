var express = require('express');
var router = express.Router();

var status = undefined;


/* GET home page. */
router.get('/', (req, res)=> {
  res.render('index', { title: 'Tabela de usuarios',status});
});


router.get('/update', (req, res)=> {
  res.render('update', { title: 'Atualizar Usuarios' });
});


router.get('/create', (req, res)=> {
  res.render('create', { title: 'Criar Usuarios' });
});


router.get('/update/:id',(req,res)=>{

  conn.query('SELECT * FROM cliente WHERE id_cli = ?',[req.params.id],(err,rows,fileds)=>{

    if (err) throw err;
    res.render('update',{title: 'Atualizando úsuarios',row:rows[0]});
  });

});


module.exports = router;

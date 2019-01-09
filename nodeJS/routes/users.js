const express = require('express');
const router = express.Router();
const conn = require('./../model/connect');
/* GET users listing. */
router.get('/', function(req, res, next) {

  conn.query('SELECT * FROM cliente',(err,rows,fileds)=>{
    res.json(rows);
  });

});



router.post('/register',(req,res)=>{



  let data = req.body;
  let usersData = Object.values(data);
  let sql = 'INSERT INTO cliente (nome_cli,sobrenome_cli,email_cli,idade) VALUES (?,?,?,?)';


  console.log(req.body,usersData);
    conn.query(sql, usersData,(err,result)=>{

      if(err) throw err;

      console.log("Número de linhas afetadas:",result.affectedRows);

    });

    res.redirect('/')

});

router.get('/delete/:id',(req,res)=>{



  let sql = "DELETE FROM cliente WHERE id_cli = ?"

  conn.query(sql,[req.params.id],(err,result) =>{

    if(err) throw err;

    console.log("Número de linhas afetadas:",result.affectedRows);

    res.redirect('/');

  });

});


router.post('/update',(req,res)=>{

  let data = req.body;
  let sql = `UPDATE cliente SET nome_cli = "${data.nome}" ,sobrenome_cli = "${data.sobrenome}" , email_cli = "${data.email}", idade = "${data.idade}" WHERE id_cli = "${data.id}"`;

  console.log(sql);

  conn.query(sql,[],(err,result) =>{

    if(err) throw err;

    console.log("Número de linhas afetadas:",result.affectedRows);

    res.redirect('/');

  });


});

module.exports = router;

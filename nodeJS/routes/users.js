const express = require('express');
const router = express.Router();
const conn = require('./../model/connect');
/* GET users listing. */
router.get('/', function(req, res, next) {

  conn.query('SELECT * FROM cliente',(err,rows,fileds)=>{
    res.json(rows);
  });

});

// router.get('/:id',(req,res)=>{

//   conn.query('SELECT * FROM cliente WHERE id_cli = ?',[req.params.id],(err,rows,fileds)=>{
//     res.json(rows);
//   });
// });


router.post('/register',(req,res)=>{



  let data = req.body;
  let usersData = Object.values(data);
  let sql = 'INSERT INTO cliente (nome_cli,sobrenome_cli,email_cli,idade) VALUES (?,?,?,?)';


  console.log(req.body,usersData);
    conn.query(sql, usersData,(err,result)=>{

      if(err) throw err;

      console.log("Número de linhas afetadas:",result.affectedRows)

    });




})  

module.exports = router;

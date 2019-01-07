const express = require('express');
const router = express.Router();
const conn = require('./../model/connect');
/* GET users listing. */
router.get('/', function(req, res, next) {

  conn.query('SELECT * FROM cliente',(err,rows,fileds)=>{
    res.json(rows);
  });

});

router.get('/:id',(req,res)=>{

  conn.query('SELECT * FROM cliente WHERE id_cli = ?',[req.params.id],(err,rows,fileds)=>{
    res.json(rows);
  });
});



module.exports = router;

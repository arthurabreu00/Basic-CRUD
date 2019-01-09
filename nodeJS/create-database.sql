 CREATE DATABASE crud;
 
 USE crud;
 CREATE TABLE cliente(
	id_cli INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_cli VARCHAR(255) NOT NULL,
    sobrenome_cli VARCHAR(255),
    email_cli VARCHAR(255),
    idade int(3)
 );
  
-- UPDATE cliente SET nome_cli = 'Flavia',sobrenome_cli = 'Abreu', email_cli = 'flaviatecno@gmail.com', idade ='41' WHERE id_cli = '1';  
 
 SELECT * FROM crud.cliente;
 
 INSERT INTO crud.cliente VALUES (
     '1','Arthur','Tavares','arthurtavares@localhost.com','19'
 );


truncate table crud.cliente;


 desc cliente;

use crud;
SELECT * FROM cliente;  


 ALTER TABLE cliente AUTO_INCREMENT = 1;
 INSERT INTO crud.cliente (nome_cli,sobrenome_cli,email_cli,idade) VALUES('Jose','Carlos','jose@local.com','12');
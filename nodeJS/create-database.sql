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
     '2','Ana','Flavia','anaflavia@localhost.com','19'
 );

 desc cliente;
 
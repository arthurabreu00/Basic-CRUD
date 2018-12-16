 CREATE DATABASE crud;
 
 USE crud;
 CREATE TABLE cliente(
	id_cli INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_cli VARCHAR(255) NOT NULL,
    sobrenome_cli VARCHAR(255),
    email_cli VARCHAR(255),
    idade int(3)
 );
 
 desc cliente;
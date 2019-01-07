<?php
session_start();
require_once 'db_connect.php';

if(isset($_POST['btn-cadastrar'])){
    $nome = mysqli_escape_string($conn,$_POST['name']);
    $sobrenome = mysqli_escape_string($conn,$_POST['sobrenome']);
    $email = mysqli_escape_string($conn,$_POST['email']);
    $idade = mysqli_escape_string($conn,$_POST['idade']);
}

$sql = "INSERT INTO cliente(nome_cli,sobrenome_cli,email_cli,idade) VALUES ('$nome','$sobrenome','$email','$idade') ";
if(mysqli_query($conn,$sql)){
    $_SESSION['mensagem'] = '
    <div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong> Cadastrado com sucesso ! </strong> 
  </div>';
  header('Location: ../index.php');
}else{
    $_SESSION['mensagem'] = '
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong> Ocorreu um erro, durante o cadastramento ! </strong> 
  </div>';
    header('Location: ../index.php');
}
    

?>
<?php
require_once 'db_connect.php';

if(isset($_POST['btn-excluir'])){
    $id = mysqli_escape_string($conn,$_POST['id']);
}

$sql = "DELETE FROM cliente WHERE id_cli = '$id' ";

if(mysqli_query($conn,$sql)){
    $_SESSION['mensagem'] = '
    <div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong> Removido com sucesso ! </strong> 
  </div>';
  header('Location: ../index.php');
}else{
    $_SESSION['mensagem'] = '
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong> Ocorreu um erro,ao remover o usuario, operação abortada ! </strong> 
  </div>';
    header('Location: ../index.php');
}
    

?>
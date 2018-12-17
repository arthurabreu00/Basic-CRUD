<?php
    require_once 'db_connect.php';

    if(isset($_POST['btn-atualizar'])){
        $id = mysqli_escape_string($conn,$_POST['id']);
        $nome = mysqli_escape_string($conn,$_POST['name']);
        $sobrenome = mysqli_escape_string($conn,$_POST['sobrenome']);
        $email = mysqli_escape_string($conn,$_POST['email']);
        $idade = mysqli_escape_string($conn,$_POST['idade']);
    }
    
    $sql = "UPDATE cliente SET nome_cli = '$nome',sobrenome_cli = '$sobrenome', email_cli = '$email', idade ='$idade' WHERE id_cli = '$id'   ";


    if(mysqli_query($conn,$sql)){
        $_SESSION['mensagem'] = '
        <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong> Atualizado com sucesso ! </strong> 
      </div>';
      header('Location: ../index.php?sucess');
    }else{
        $_SESSION['mensagem'] = '
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong> Ocorreu um erro, ao atualizar ! </strong> 
      </div>';
        header('Location: ../index.php?error');
    }
?>
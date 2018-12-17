<?php
    $servename = 'localhost';
    $username = 'root';
    $password = '';
    $db_name = 'crud';

    $conn = mysqli_connect($servename,$username,$password,$db_name);

    if(mysqli_connect_error()){
        echo 'Erro';
    }
?>
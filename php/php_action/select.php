<?php 

require_once('db_connect.php');

$sql = 'SELECT * FROM cliente order by id_cli';

$result = mysqli_query($conn,$sql);
while($dados = mysqli_fetch_array($result)){
    echo '<tr>';
        echo '<th scope="row">'.$dados['id_cli'].'</th>';
        echo '<td>'.$dados['nome_cli'].'</td>';
        echo '<td>'.$dados['sobrenome_cli'].'</td>';
        echo '<td>'.$dados['email_cli'].'</td>';
        echo '<td>'.$dados['idade'].'</td>';
?>
        <td>
            <a href="editar.php?id=<?php echo$dados['id_cli'];?>" class="btn btn-secondary"> <i class="fas fa-user-edit"></i></button>
        </td>
        <td>
            <a href="#" class="btn btn-secondary"><i class="fas fa-user-slash"></i></button>
        </td>
<?php

    echo '</tr>';
}

?>
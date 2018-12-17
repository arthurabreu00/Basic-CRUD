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
            <a href="editar.php?id_cli=<?php echo$dados['id_cli'];?>" class="btn btn-success"> <i class="fas fa-user-edit"></i></button>
        </td>
        <td>
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal">
        <i class="fas fa-user-slash"></i>
        </button>
            <!-- Modal -->
            <div class="modal" id="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Opa !</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p> Tem certeza que deseja, excluir esse usuario ? </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <form action="php_action/delete.php" method="POST">
                        <input type="hidden" name="id" value="<?php echo$dados['id_cli'];?>">
                        <button type="submit" name="btn-excluir" class="btn btn-primary">Excluir</button>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </td>
<?php

    echo '</tr>';
}

?>
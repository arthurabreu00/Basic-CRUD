<?php
    include_once 'includes/header.php';
    require_once 'php_action/db_connect.php';

    if(isset($_GET['id_cli'])){
        $id = mysqli_escape_string($conn,$_GET['id_cli']);
    }
  
    $sql = "SELECT * FROM cliente WHERE id_cli = '$id'";
    $res = mysqli_query($conn,$sql);
    $dados = mysqli_fetch_array($res);
?>
<h1>Editar usuarios</h1>
<form method="POST" action="php_action/update.php">

<div class="row">
<input type="hidden" name="id" value ="<?php echo $dados['id_cli'] ?>">
    <div class="col-lg-6">
      <div class="form-group">
        <label for="">Nome</label>
        <input type="text" class="form-control" name="name" id="name" value="<?php echo $dados['nome_cli'] ?>">
      </div>
      
    </div>
    <div class="col-lg-6">
        <div class="form-group">
            <label for="">Sobrenome</label>
            <input type="text" class="form-control" name="sobrenome" id="sobrenome" value="<?php echo $dados['sobrenome_cli'] ?>">
        </div>
    </div>

    <div class="col-lg-6">
        <div class="form-group">
            <label for="">Email</label>
            <input type="email" class="form-control" name="email" id="email" value="<?php echo $dados['email_cli'] ?>">
        </div>
    </div>

    <div class="col-lg-6">
        <div class="form-group">
            <label for="">Idade</label>
            <input type="number" class="form-control" min="0" max="130" name="idade" id="idade" value="<?php echo $dados['idade'] ?>">
        </div>
    </div>

    <div class="col-lg-12">
        <button type="submit" class="btn btn-success" name="btn-atualizar">Atualizar</button>
        <a class="btn btn-primary " href="index.php" role="button">Lista de clientes</a>
    </div>

  </div>
</form>


<?php
  include_once 'includes/footer.php';
?>
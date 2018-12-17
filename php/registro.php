<?php
  include_once 'includes/header.php';
?>
<h1>Registro de usuarios</h1>
<form method="POST" action="php_action/insert.php">
<div class="row">

    <div class="col-lg-6">
      <div class="form-group">
        <label for="">Nome</label>
        <input type="text" class="form-control" name="name" id="name" placeholder="">
      </div>
      
    </div>
    <div class="col-lg-6">
        <div class="form-group">
            <label for="">Sobrenome</label>
            <input type="text" class="form-control" name="sobrenome" id="sobrenome" placeholder="">
        </div>
    </div>

    <div class="col-lg-6">
        <div class="form-group">
            <label for="">Email</label>
            <input type="email" class="form-control" name="email" id="email" placeholder="">
        </div>
    </div>

    <div class="col-lg-6">
        <div class="form-group">
            <label for="">Idade</label>
            <input type="number" class="form-control" min="0" max="130" name="idade" id="idade" placeholder="">
        </div>
    </div>

    <div class="col-lg-12">
        <button type="submit" class="btn btn-primary" name="btn-cadastrar">Registrar</button>
        <a name="" id="" class="btn btn-success " href="index.php" role="button">Lista de clientes</a>
    </div>

  </div>
</form>


<?php
  include_once 'includes/footer.php';
?>
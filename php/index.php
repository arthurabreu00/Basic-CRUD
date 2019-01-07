<?php
  session_start();  
  include_once 'includes/header.php';
?>

  <h1>Clientes</h1>

  <?php
    
    if(isset($_SESSION['mensagem'])){
      echo $_SESSION['mensagem'];
    }
    session_unset();
  ?>

  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nome</th>
      <th scope="col">Sobrenome</th>
      <th scope="col">E-mail</th>
      <th scope="col">Idade</th>
      <th scope="col">Atualizar</th>
      <th scope="col">Remover</th>
    </tr>
  </thead>



  <tbody>
    <?php
      require_once('php_action/select.php')
    ?>  
  </tbody>
</table>



<a href="registro.php" class="btn btn-primary mt-3" >Registrar novo usuario </a>


<?php
  include_once 'includes/footer.php';
?>
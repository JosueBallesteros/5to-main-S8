<?php 
require_once('../html/head2.php');
require_once('../../config/sesiones.php');
?>
<link rel="stylesheet" href="noticias.css">

<div class="news-container">
  <div class="news-header">
    <h2>Noticias</h2>
    <p>Las últimas noticias de tecnología</p>
  </div>
  <div class="news-grid" id="Contenido_Noticias">
    <div class="loading">Cargando noticias...</div>
  </div>
</div>

<script src="noticias.js"></script>
<?php require_once('../html/footer.php'); ?>

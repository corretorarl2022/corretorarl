<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <?php include 'includes/head.php'; ?>
  <?php
  // TODO: Conectar ao banco de dados para carregar o post
  // Exemplo: $id = $_GET['id']; $post = buscarPostPorId($id);
  $post = null; // Substitua por consulta ao banco

  if ($post):
  ?>
  <title><?= htmlspecialchars($post['title']) ?> - Blog - Corretora RL</title>
  <meta name="description" content="<?= htmlspecialchars(substr($post['content'], 0, 150)) ?>">
  <?php else: ?>
  <title>Matéria não encontrada - Corretora RL</title>
  <?php endif; ?>
</head>
<body>
<?php include 'includes/header.php'; ?>

<?php if ($post): ?>
<section class="contact-hero">
  <div class="container">
    <a href="blog.php" class="blog-back-link">← Voltar ao Blog</a>
    <h1><?= htmlspecialchars($post['title']) ?></h1>
    <p class="blog-post-date">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
      <?= date('d \d\e F \d\e Y', strtotime($post['created_at'])) ?>
    </p>
  </div>
</section>

<section class="section">
  <div class="container" style="max-width:48rem">
    <?php if (!empty($post['image_url'])): ?>
      <img src="<?= $post['image_url'] ?>" alt="<?= htmlspecialchars($post['title']) ?>" class="blog-post-image">
    <?php endif; ?>
    <div class="blog-post-content">
      <?php
      // Preserva formatação: parágrafos e quebras de linha
      $paragraphs = preg_split('/\n\n+/', $post['content']);
      foreach ($paragraphs as $p):
        $lines = nl2br(htmlspecialchars($p));
      ?>
        <p><?= $lines ?></p>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php else: ?>
<section class="section">
  <div class="container" style="text-align:center;padding:4rem 0">
    <p class="text-muted text-lg" style="margin-bottom:1rem">Matéria não encontrada.</p>
    <a href="blog.php" style="color:var(--primary);font-weight:600">← Voltar ao Blog</a>
  </div>
</section>
<?php endif; ?>

<?php include 'includes/footer.php'; ?>
<script src="js/main.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <?php include 'includes/head.php'; ?>
  <title>Blog - Corretora RL</title>
  <meta name="description" content="Fique por dentro das novidades sobre seguros, consórcios, saúde e planejamento financeiro.">
</head>
<body>
<?php include 'includes/header.php'; ?>

<section class="contact-hero">
  <div class="container">
    <h1>Blog</h1>
    <p class="max-w-2xl">Fique por dentro das novidades sobre seguros, consórcios, saúde e planejamento financeiro.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <?php
    // TODO: Conectar ao banco de dados para carregar posts dinâmicos
    // Exemplo com dados estáticos por enquanto:
    $posts = []; // Substitua por consulta ao banco
    ?>

    <?php if (empty($posts)): ?>
      <div class="empty-state" style="padding:4rem 0">
        <p class="text-muted text-lg">Nenhuma matéria publicada ainda. Volte em breve!</p>
      </div>
    <?php else: ?>
      <div class="grid grid-3">
        <?php foreach ($posts as $post): ?>
        <article class="blog-card">
          <?php if (!empty($post['image_url'])): ?>
          <div class="blog-image"><img src="<?= $post['image_url'] ?>" alt="<?= htmlspecialchars($post['title']) ?>"></div>
          <?php endif; ?>
          <div class="blog-body">
            <p class="blog-date"><?= date('d \d\e F \d\e Y', strtotime($post['created_at'])) ?></p>
            <h3><?= htmlspecialchars($post['title']) ?></h3>
            <p class="blog-excerpt"><?= htmlspecialchars(substr($post['content'], 0, 150)) ?>...</p>
          </div>
        </article>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</section>

<?php include 'includes/footer.php'; ?>
<script src="js/main.js"></script>
</body>
</html>

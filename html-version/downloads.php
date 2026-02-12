<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <?php include 'includes/head.php'; ?>
  <title>Downloads - Corretora RL</title>
  <meta name="description" content="Baixe os documentos disponíveis da Corretora RL.">
</head>
<body>
<?php include 'includes/header.php'; ?>

<section class="section">
  <div class="container" style="max-width:48rem">
    <h1 style="font-size:1.875rem;font-weight:700;margin-bottom:0.5rem">Área de Downloads</h1>
    <p class="text-muted mb-8">Baixe os documentos disponíveis abaixo.</p>

    <?php
    // TODO: Conectar ao banco de dados para carregar arquivos dinâmicos
    $files = []; // Substitua por consulta ao banco
    ?>

    <?php if (empty($files)): ?>
      <div class="empty-state" style="background:var(--card);border-radius:0.75rem;padding:3rem;border:1px solid var(--border)">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        <p>Nenhum arquivo disponível no momento.</p>
      </div>
    <?php else: ?>
      <div class="space-y-3">
        <?php foreach ($files as $file): ?>
        <a href="<?= $file['file_url'] ?>" target="_blank" rel="noopener noreferrer" class="download-item">
          <div class="dl-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          </div>
          <div class="dl-info">
            <p class="dl-name"><?= htmlspecialchars($file['name']) ?></p>
            <p class="dl-meta">
              <?= !empty($file['description']) ? htmlspecialchars($file['description']) . ' · ' : '' ?>
              <?= !empty($file['file_size']) ? round($file['file_size'] / 1024) . ' KB' : '' ?>
            </p>
          </div>
        </a>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</section>

<?php include 'includes/footer.php'; ?>
<script src="js/main.js"></script>
</body>
</html>

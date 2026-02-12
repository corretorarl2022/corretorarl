<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <?php include 'includes/head.php'; ?>
  <title>Seguros - Corretora RL</title>
  <meta name="description" content="Seguros de vida, automóvel, residencial, viagem, empresarial e mais. Sua tranquilidade em cada capítulo da vida.">
</head>
<body>
<?php include 'includes/header.php'; ?>

<section class="hero hero-page">
  <img src="assets/seguros-cover.jpg" alt="Seguros" class="hero-bg">
  <div class="hero-overlay"></div>
  <div class="container hero-content" style="text-align:center">
    <h1>Sua Tranquilidade em Cada Capítulo da Vida</h1>
    <p>Os seguros são seus maiores aliados para viver cada momento com mais tranquilidade e segurança.</p>
  </div>
</section>

<section class="section-lg">
  <div class="container">
    <div class="max-w-3xl mb-16">
      <p class="text-muted text-lg leading-relaxed" style="margin-bottom:1rem">
        A vida é cheia de imprevistos, mas também de oportunidades. Para que você possa viver cada momento com mais tranquilidade e segurança, os seguros são seus maiores aliados. Eles funcionam como uma rede de proteção, amparando você e sua família nos momentos mais desafiadores.
      </p>
      <p class="text-muted text-lg leading-relaxed">
        Um seguro não é apenas uma despesa, é um investimento em paz de espírito. É saber que, se algo inesperado acontecer, você terá o suporte financeiro necessário para se reerguer, sem comprometer o que você construiu.
      </p>
    </div>

    <h2 class="section-title text-center mb-12">Conheça os Principais Tipos de Seguros</h2>

    <div class="grid grid-3">
      <?php
      $insurances = [
        ['icon' => '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>', 'title' => 'Seguro de Vida', 'desc' => 'O pilar da segurança familiar. Garante um apoio financeiro para seus entes queridos em caso de falecimento do segurado, ou pode oferecer coberturas em vida para doenças graves e invalidez.', 'link' => 'https://villa.segfy.com/Publico/Segurados/Orcamentos/SolicitarCotacaoVida?e=im5kTl0v6WBQ/0TP1JvOyA==', 'cta' => 'Cotar Seguro de Vida'],
        ['icon' => '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8A3 3 0 0 0 2 12.5V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>', 'title' => 'Seguro Automóvel', 'desc' => 'Protege seu veículo contra roubo, furto, colisão, incêndio e danos a terceiros. Indispensável para quem quer dirigir com a certeza de que está amparado.', 'link' => 'https://villa.segfy.com/Publico/Segurados/Orcamentos/SolicitarCotacao?e=im5kTl0v6WBQ/0TP1JvOyA==', 'cta' => 'Cotar Seguro Auto'],
        ['icon' => '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>', 'title' => 'Seguro Residencial', 'desc' => 'Cuida do seu lar. Cobre desde danos por incêndio, vendaval e roubo, até serviços de emergência como chaveiro e eletricista.', 'link' => 'https://villa.segfy.com/Publico/Segurados/Orcamentos/SolicitarCotacaoResidencial?e=im5kTl0v6WBQ/0TP1JvOyA==', 'cta' => 'Cotar Seguro Residencial'],
        ['icon' => '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>', 'title' => 'Seguro Saúde e Odontológico', 'desc' => 'Fundamental para o seu bem-estar. Garante acesso a consultas, exames, internações e tratamentos médicos e odontológicos.', 'link' => '', 'cta' => ''],
        ['icon' => '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>', 'title' => 'Seguro Viagem', 'desc' => 'Para desbravar o mundo sem preocupações. Oferece cobertura para emergências médicas, extravio de bagagem e outros imprevistos.', 'link' => '', 'cta' => ''],
        ['icon' => '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>', 'title' => 'Seguro Empresarial', 'desc' => 'Essencial para a proteção do seu negócio. Cobre desde danos à estrutura física, equipamentos, até responsabilidade civil e lucros cessantes.', 'link' => 'https://villa.segfy.com/Publico/Segurados/Orcamentos/SolicitarCotacaoEmpresarial?e=im5kTl0v6WBQ/0TP1JvOyA==', 'cta' => 'Cotar Seguro Empresarial'],
        ['icon' => '<path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2z"/><path d="M2 9v1c0 1.1.9 2 2 2h1"/><path d="M16 11h.01"/>', 'title' => 'Previdência Privada', 'desc' => 'Um seguro para o seu futuro. É uma forma de poupar e investir a longo prazo, complementando sua aposentadoria.', 'link' => '', 'cta' => ''],
      ];
      foreach ($insurances as $ins): ?>
      <div class="insurance-card">
        <div class="card-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><?= $ins['icon'] ?></svg>
        </div>
        <h3><?= $ins['title'] ?></h3>
        <p><?= $ins['desc'] ?></p>
        <?php if ($ins['link']): ?>
          <a href="<?= $ins['link'] ?>" target="_blank" rel="noopener noreferrer" class="btn-primary"><?= $ins['cta'] ?></a>
        <?php endif; ?>
      </div>
      <?php endforeach; ?>
    </div>

    <div class="cta-box mt-16">
      <h3>Pronto para proteger o que mais importa?</h3>
      <p class="max-w-xl">Fale com nossos especialistas e descubra a tranquilidade de estar segurado!</p>
      <a href="https://www.segfy.com/corretoras/?NEIDEGILIOLEMES" target="_blank" rel="noopener noreferrer" class="btn-primary">Faça uma Cotação</a>
    </div>
  </div>
</section>

<?php include 'includes/footer.php'; ?>
<script src="js/main.js"></script>
</body>
</html>

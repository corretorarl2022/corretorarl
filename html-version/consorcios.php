<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <?php include 'includes/head.php'; ?>
  <title>Consórcios - Corretora RL</title>
  <meta name="description" content="Realize seus maiores objetivos de forma planejada, econômica e sem juros com o consórcio.">
</head>
<body>
<?php include 'includes/header.php'; ?>

<section class="hero hero-page">
  <img src="assets/consorcios-card.jpg" alt="Consórcios" class="hero-bg">
  <div class="hero-overlay"></div>
  <div class="container hero-content" style="text-align:center">
    <h1>Consórcio: A Maneira Inteligente de Conquistar Seus Sonhos</h1>
    <p>Realize seus maiores objetivos de forma planejada, econômica e sem juros.</p>
  </div>
</section>

<section class="section-lg">
  <div class="container">
    <div class="max-w-3xl mb-16">
      <p class="text-muted text-lg leading-relaxed" style="margin-bottom:1rem">
        Sonhar é o primeiro passo. Realizar é a nossa especialidade. Com o consórcio, você encontra uma forma planejada, econômica e inteligente de conquistar seus maiores objetivos, sem a cobrança de juros que os financiamentos tradicionais geralmente incluem.
      </p>
      <h3 style="font-size:1.5rem;font-weight:700;margin:2rem 0 1rem">Como Funciona o Consórcio?</h3>
      <p class="text-muted text-lg leading-relaxed">
        O consórcio é um sistema de compra planejada baseado na união de pessoas em grupos, com o objetivo comum de adquirir bens ou serviços. Todos os participantes contribuem mensalmente com um valor predefinido. Esses valores formam um fundo comum que é utilizado para contemplar os membros do grupo, seja por meio de sorteio ou lance.
      </p>
    </div>

    <h2 class="section-title text-center mb-12">Por que o Consórcio é a escolha certa?</h2>

    <div class="grid grid-2 max-w-4xl mb-16">
      <?php
      $benefits = [
        ['Economia Significativa', 'A grande vantagem do consórcio é a ausência de juros. Você paga apenas uma taxa de administração, tornando as parcelas mais acessíveis.'],
        ['Flexibilidade e Planejamento', 'Com diversas opções de prazos e valores de parcelas, o consórcio se adapta ao seu orçamento e te ajuda a poupar.'],
        ['Diversidade de Bens e Serviços', 'Seja para a compra de um imóvel, um veículo, ou serviços como cirurgias e viagens, o consórcio oferece opções para diversas necessidades.'],
        ['Poder de Compra à Vista', 'Ao ser contemplado, você recebe uma carta de crédito com o valor total do bem, permitindo negociar melhores preços.'],
        ['Segurança e Transparência', 'Regulamentado e fiscalizado pelo Banco Central do Brasil, o sistema de consórcios oferece toda a segurança necessária.'],
      ];
      foreach ($benefits as $b): ?>
      <div class="benefit-card">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
        <div>
          <h4><?= $b[0] ?></h4>
          <p><?= $b[1] ?></p>
        </div>
      </div>
      <?php endforeach; ?>
    </div>

    <div class="cta-box">
      <h3>Pronto para transformar seus planos em realidade?</h3>
      <p class="max-w-xl">Fale com nossos especialistas e descubra a melhor opção de consórcio para você!</p>
      <a href="contato.php" class="btn-primary">Entre em Contato</a>
    </div>
  </div>
</section>

<?php include 'includes/footer.php'; ?>
<script src="js/main.js"></script>
</body>
</html>

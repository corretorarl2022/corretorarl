<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <?php include 'includes/head.php'; ?>
  <title>Financeiro, Previdência e Saúde - Corretora RL</title>
  <meta name="description" content="Conquiste tranquilidade com planejamento financeiro, previdência e saúde.">
</head>
<body>
<?php include 'includes/header.php'; ?>

<section class="hero hero-page">
  <img src="assets/financeiro-card.jpg" alt="Financeiro, Previdência e Saúde" class="hero-bg">
  <div class="hero-overlay"></div>
  <div class="container hero-content" style="text-align:center">
    <h1>Financeiro, Previdência e Saúde</h1>
    <p>Conquiste tranquilidade com planejamento financeiro, previdência e saúde.</p>
  </div>
</section>

<section class="section-lg">
  <div class="container">
    <div class="max-w-3xl text-center mb-16">
      <p class="text-muted text-lg leading-relaxed">
        Planejar o futuro é garantir a liberdade de viver o presente com mais tranquilidade e segurança. Oferecemos um conjunto de soluções integradas que cuidam de você em todas as fases da vida.
      </p>
    </div>

    <div class="space-y-12">
      <?php
      $sections = [
        ['icon' => '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>', 'title' => 'Planejamento Financeiro: O Mapa para Seus Sonhos', 'intro' => 'Ter as rédeas da sua vida financeira é o primeiro passo para qualquer conquista. Com o nosso apoio, você vai:', 'items' => ['Organizar suas finanças: Entender para onde seu dinheiro está indo e como otimizar seus gastos.', 'Poupar de forma inteligente: Criar hábitos de economia que realmente funcionam para seus objetivos.', 'Investir com propósito: Descobrir as melhores opções para fazer seu dinheiro crescer.', 'Construir reservas: Estar preparado para imprevistos, garantindo sua segurança.']],
        ['icon' => '<path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2z"/><path d="M2 9v1c0 1.1.9 2 2 2h1"/><path d="M16 11h.01"/>', 'title' => 'Previdência Privada: Sua Aposentadoria Sem Preocupações', 'intro' => 'A aposentadoria é um capítulo da vida que merece ser vivido com total conforto e independência. Com a previdência privada, você:', 'items' => ['Complementa sua renda: Garante um padrão de vida desejado quando parar de trabalhar.', 'Conta com flexibilidade: Escolhe o valor da contribuição e a forma de recebimento mais adequados.', 'Aproveita benefícios fiscais: Algumas modalidades oferecem vantagens na declaração do IR.', 'Planeja o longo prazo: Constrói um patrimônio para desfrutar de uma velhice tranquila.']],
        ['icon' => '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>', 'title' => 'Saúde e Plano de Saúde: Cuidado Essencial para a Vida', 'intro' => 'Sua saúde é seu bem mais valioso. Ter um plano de saúde de qualidade é fundamental. Com ele, você:', 'items' => ['Acessa uma ampla rede: Escolhe entre hospitais, clínicas e profissionais renomados.', 'Realiza consultas e exames: Faz seu check-up regularmente e monitora sua saúde.', 'Recebe atendimento de emergência: Tem suporte rápido e eficiente quando mais precisa.', 'Protege sua família: Garante que seus entes queridos também estarão seguros e bem cuidados.']],
      ];
      foreach ($sections as $sec): ?>
      <div class="section-card">
        <div class="card-header">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><?= $sec['icon'] ?></svg>
          </div>
          <h3><?= $sec['title'] ?></h3>
        </div>
        <p class="intro"><?= $sec['intro'] ?></p>
        <ul class="checklist">
          <?php foreach ($sec['items'] as $item): ?>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
            <span><?= $item ?></span>
          </li>
          <?php endforeach; ?>
        </ul>
      </div>
      <?php endforeach; ?>
    </div>

    <div class="cta-box mt-16">
      <h3>Que tal começar a planejar hoje mesmo?</h3>
      <p class="max-w-xl">Fale com nossos especialistas e construa a segurança que você e sua família merecem!</p>
      <a href="contato.php" class="btn-primary">Entre em Contato</a>
    </div>
  </div>
</section>

<?php include 'includes/footer.php'; ?>
<script src="js/main.js"></script>
</body>
</html>

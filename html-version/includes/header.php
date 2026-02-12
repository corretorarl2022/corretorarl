<?php $current = basename($_SERVER['PHP_SELF'], '.php'); ?>
<header class="site-header">
  <div class="container header-inner">
    <a href="index.php" class="header-logo">
      <img src="assets/logo-corretora-rl.jpg" alt="Corretora RL">
      <span>Corretora RL</span>
    </a>

    <nav class="desktop-nav">
      <a href="index.php" class="<?= $current === 'index' ? 'active' : '' ?>">Início</a>
      <a href="quem-somos.php" class="<?= $current === 'quem-somos' ? 'active' : '' ?>">Quem Somos</a>
      <div class="dropdown">
        <button class="dropdown-toggle">Serviços ▾</button>
        <div class="dropdown-menu">
          <a href="servicos.php">Todos os Serviços</a>
          <a href="seguros.php">Seguros</a>
          <a href="consorcios.php">Consórcios</a>
          <a href="financeiro-previdencia-saude.php">Financeiro e Previdência</a>
          <a href="financeiro-previdencia-saude.php">Saúde</a>
        </div>
      </div>
      <a href="blog.php" class="<?= $current === 'blog' ? 'active' : '' ?>">Blog</a>
      <a href="contato.php" class="<?= $current === 'contato' ? 'active' : '' ?>">Contato</a>
    </nav>

    <a href="https://www.segfy.com/corretoras/?NEIDEGILIOLEMES" target="_blank" rel="noopener noreferrer" class="btn-cta header-cta-desktop">Faça uma Cotação</a>

    <button class="mobile-toggle" id="mobile-toggle">☰</button>
  </div>

  <div class="mobile-nav" id="mobile-nav">
    <a href="index.php">Início</a>
    <a href="quem-somos.php">Quem Somos</a>
    <button id="mobile-services-toggle">Serviços ▾</button>
    <div class="mobile-subnav" id="mobile-services-sub" style="display:none">
      <a href="servicos.php">Todos os Serviços</a>
      <a href="seguros.php">Seguros</a>
      <a href="consorcios.php">Consórcios</a>
      <a href="financeiro-previdencia-saude.php">Financeiro e Previdência</a>
      <a href="financeiro-previdencia-saude.php">Saúde</a>
    </div>
    <a href="blog.php">Blog</a>
    <a href="contato.php">Contato</a>
    <a href="https://www.segfy.com/corretoras/?NEIDEGILIOLEMES" target="_blank" class="btn-cta" style="margin:0.5rem 2rem;text-align:center">Faça uma Cotação</a>
  </div>
</header>

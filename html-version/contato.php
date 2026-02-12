<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <?php include 'includes/head.php'; ?>
  <title>Contato - Corretora RL</title>
  <meta name="description" content="Entre em contato com a Corretora RL. Estamos prontos para atender você.">
</head>
<body>
<?php include 'includes/header.php'; ?>

<section class="contact-hero">
  <div class="container">
    <h1>Contato</h1>
    <p class="max-w-2xl">Estamos prontos para atender você. Entre em contato conosco!</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="contact-grid">
      <div>
        <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1.5rem">Fale Conosco</h2>
        <p class="text-muted" style="margin-bottom:2rem">Tem alguma dúvida ou precisa de uma cotação personalizada? Preencha o formulário ou entre em contato diretamente pelos nossos canais.</p>

        <div class="contact-info-item">
          <div class="info-icon blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div>
            <p class="info-label">Telefone</p>
            <p class="info-value">(14) 98122-9823</p>
          </div>
        </div>

        <div class="contact-info-item">
          <div class="info-icon orange">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          </div>
          <div>
            <p class="info-label">WhatsApp</p>
            <p class="info-value">(14) 98122-9823</p>
          </div>
        </div>

        <div class="contact-info-item">
          <div class="info-icon blue">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <div>
            <p class="info-label">E-mail</p>
            <p class="info-value">contato@corretorarl.com.br</p>
          </div>
        </div>

        <div class="contact-info-item">
          <div class="info-icon orange">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div>
            <p class="info-label">Endereço</p>
            <p class="info-value">Rua Terenos, 541 - Tupã - SP</p>
          </div>
        </div>
      </div>

      <div class="contact-form-card">
        <h3>Envie sua Mensagem</h3>
        <div class="success-msg" id="form-success" style="display:none">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
        <form id="contact-form">
          <div class="form-group">
            <label>Nome</label>
            <input type="text" required placeholder="Seu nome completo">
          </div>
          <div class="form-group">
            <label>E-mail</label>
            <input type="email" required placeholder="seu@email.com">
          </div>
          <div class="form-group">
            <label>Telefone / WhatsApp</label>
            <input type="tel" placeholder="(XX) XXXXX-XXXX">
          </div>
          <div class="form-group">
            <label>Mensagem</label>
            <textarea rows="5" required placeholder="Como podemos ajudar você?"></textarea>
          </div>
          <button type="submit" class="btn-submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

<?php include 'includes/footer.php'; ?>
<script src="js/main.js"></script>
</body>
</html>

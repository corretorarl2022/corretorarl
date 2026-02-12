# Versão HTML/CSS/JS/PHP - Corretora RL

## Como usar

1. Copie toda a pasta `html-version` para sua hospedagem PHP
2. Copie as imagens de `src/assets/` para `html-version/assets/`:
   - `hero-home.jpg`
   - `logo-corretora-rl.jpg`
   - `seguros-card.jpg`
   - `consorcios-card.jpg`
   - `financeiro-card.jpg`
   - `saude-card.jpg`
   - `quem-somos.jpg`
   - `seguros-cover.jpg`
   - `servicos-cover.jpg`
3. Copie `public/favicon.ico` para `html-version/assets/favicon.ico`
4. Acesse `index.php` no navegador

## Estrutura
```
html-version/
├── assets/          ← copie as imagens aqui
├── css/
│   └── style.css
├── js/
│   └── main.js
├── includes/
│   ├── head.php
│   ├── header.php
│   └── footer.php
├── index.php
├── quem-somos.php
├── servicos.php
├── seguros.php
├── consorcios.php
├── financeiro-previdencia-saude.php
├── blog.php
├── contato.php
└── downloads.php
```

## Páginas dinâmicas (Blog e Downloads)
As páginas `blog.php` e `downloads.php` possuem um `TODO` para conexão com banco de dados.
Para conectar ao banco, crie um arquivo `includes/db.php` com a conexão PDO e substitua os arrays vazios pelas consultas SQL.

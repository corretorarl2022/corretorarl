// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.getElementById('mobile-nav');
  const subToggle = document.getElementById('mobile-services-toggle');
  const subNav = document.getElementById('mobile-services-sub');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });
  }

  if (subToggle && subNav) {
    subToggle.addEventListener('click', () => {
      subNav.style.display = subNav.style.display === 'block' ? 'none' : 'block';
    });
  }

  // Contact form
  const contactForm = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (successMsg) {
        successMsg.style.display = 'block';
        setTimeout(() => { successMsg.style.display = 'none'; }, 3000);
      }
      contactForm.reset();
    });
  }
});

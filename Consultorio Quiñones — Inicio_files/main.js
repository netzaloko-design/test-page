// main.js - interactividad básica
document.addEventListener('DOMContentLoaded', function () {
  // Año dinámico en footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Toggle menú móvil
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle && navToggle.addEventListener('click', function () {
    mainNav.classList.toggle('open');
    // simple show/hide (CSS: .main-nav.open { display:block } si quieres)
    if (mainNav.style.display === 'block') mainNav.style.display = '';
    else mainNav.style.display = 'block';
  });

  // Añadir clase active al enlace actual (basado en URL)
  document.querySelectorAll('.main-nav a').forEach(a => {
    try {
      const href = a.getAttribute('href');
      const current = window.location.pathname.split('/').pop();
      if (href === current || (href === 'Sitio web Quiñones.html' && current === '')) {
        a.classList.add('active');
      }
    } catch (e) { /* ignore */ }
  });

  // Smooth scroll para anclas internas (si las usas)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Validación simple del formulario de contacto (demo)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert('Por favor completa los campos obligatorios.');
        return;
      }
      // Aquí integrarías un servicio real (EmailJS, Formspree, backend, etc.)
      alert('Mensaje enviado (demo). Sustituir por integración real).');
      contactForm.reset();
    });
  }
});

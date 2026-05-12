/* =============================================
   BLACK LABEL BARBEARIA — main.js
   Responsabilidades:
   1. Navbar: scroll + menu mobile (hamburger)
   2. Animações de entrada via IntersectionObserver
   3. Smooth scroll nos links de âncora
   4. Ano dinâmico no footer
============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------
     1. NAVBAR — scroll e menu mobile
  ------------------------------------------ */
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  // Adiciona classe .scrolled quando o usuário rola a página
  const handleScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // checa estado inicial

  // Abre/fecha o menu mobile
  const toggleMenu = (forceClose = false) => {
    const isOpen = navLinks.classList.contains('open');

    if (forceClose || isOpen) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Abrir menu de navegação');
    } else {
      navLinks.classList.add('open');
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.setAttribute('aria-label', 'Fechar menu de navegação');
    }
  };

  hamburger.addEventListener('click', () => toggleMenu());

  // Fecha o menu ao clicar em um link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener('click', (event) => {
    const clickedOutside =
      !navLinks.contains(event.target) &&
      !hamburger.contains(event.target);

    if (clickedOutside) toggleMenu(true);
  });

  /* ------------------------------------------
     2. ANIMAÇÕES DE ENTRADA — IntersectionObserver
  ------------------------------------------ */
  const animatedElements = document.querySelectorAll('.animate');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // anima apenas uma vez
          }
        });
      },
      {
        threshold: 0.15,   // dispara quando 15% do elemento está visível
        rootMargin: '0px 0px -40px 0px',
      }
    );

    animatedElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback para navegadores sem suporte ao IntersectionObserver
    animatedElements.forEach((el) => el.classList.add('visible'));
  }

  /* ------------------------------------------
     3. SMOOTH SCROLL — âncoras internas
  ------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      event.preventDefault();

      const navbarHeight = navbar.offsetHeight;
      const targetTop    = targetEl.getBoundingClientRect().top + window.scrollY - navbarHeight - 12;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

  /* ------------------------------------------
     4. ANO DINÂMICO NO FOOTER
  ------------------------------------------ */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});

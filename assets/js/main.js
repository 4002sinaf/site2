/**
 * RENOVA PORTAS E PLANEJADOS
 * Main JavaScript File (Minimal & Pure JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
});

/**
 * Header background & shadow on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/**
 * Mobile Navigation Toggle & Accessibility
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.header__toggle');
  const navMenu = document.querySelector('.header__nav');
  if (!toggleBtn || !navMenu) return;

  const navLinks = navMenu.querySelectorAll('.header__nav-link, .btn');

  const toggleMenu = () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('is-active');

    // Prevent body scrolling when mobile menu is open
    document.body.style.overflow = !isExpanded ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', toggleMenu);

  // Close menu when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('is-active')) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });
  });
}


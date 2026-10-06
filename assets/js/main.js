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

  const closeMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  const toggleMenu = () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  toggleBtn.addEventListener('click', toggleMenu);

  // Close menu when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('is-active')) {
        closeMenu();
      }
    });
  });

  // Close menu on ESC key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
      closeMenu();
      toggleBtn.focus();
    }
  });

  // Reset menu state on window resize back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && navMenu.classList.contains('is-active')) {
      closeMenu();
    }
  });
}


// ============================================
// COVERIT CANADA — Main JavaScript
// ============================================

// Hamburger menu
const hamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.nav-mobile');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open menu');
      hamburger.querySelectorAll('span').forEach(span => {
        span.style.transform = '';
        span.style.opacity = '';
      });
    });
  });
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Active nav link
const path = window.location.pathname;
document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
  if (a.getAttribute('href') && path.includes(a.getAttribute('href').replace('.html','')) && a.getAttribute('href') !== 'index.html') {
    a.classList.add('active');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', () => {
    const submit = form.querySelector('button[type="submit"], input[type="submit"]');
    if (submit) submit.setAttribute('aria-busy', 'true');
  });
});

const galleryFilters = document.querySelectorAll('.gallery-filter');
const galleryCards = document.querySelectorAll('.gal-card[data-category]');
if (galleryFilters.length && galleryCards.length) {
  galleryFilters.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      galleryFilters.forEach(b => b.classList.toggle('active', b === button));
      galleryCards.forEach(card => {
        const visible = filter === 'all' || card.dataset.category === filter;
        card.hidden = !visible;
      });
    });
  });
}

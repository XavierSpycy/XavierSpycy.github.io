// ===== NAV =====
const nav = document.getElementById('nav');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.nav-hamburger');
const allNavLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
  updateActiveNav();
});

hamburger.addEventListener('click', () => {
  const expanded = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', expanded);
});

document.addEventListener('click', (e) => {
  if (!nav.contains(e.target)) {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

allNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
  });
  allNavLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

// ===== HERO MOUSE GLOW =====
const hero = document.getElementById('hero');
const glow = document.getElementById('heroGlow');
let glowX = window.innerWidth / 2;
let glowY = window.innerHeight / 2;

hero.addEventListener('mousemove', (e) => {
  const rect = hero.getBoundingClientRect();
  glowX = e.clientX - rect.left;
  glowY = e.clientY - rect.top;
  glow.style.transform = `translate(${glowX - 200}px, ${glowY - 200}px)`;
});

// ===== TYPEWRITER =====
const phrases = [
  'LLM Algorithm Engineer',
  'ML Researcher',
  'Open Source Contributor',
  'Agentic AI Builder',
];
const typeEl = document.getElementById('typewriter');
let pi = 0, ci = 0, deleting = false;

function typeStep() {
  const phrase = phrases[pi];
  if (!deleting) {
    typeEl.textContent = phrase.slice(0, ++ci);
    if (ci === phrase.length) { deleting = true; setTimeout(typeStep, 1800); return; }
    setTimeout(typeStep, 70);
  } else {
    typeEl.textContent = phrase.slice(0, --ci);
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(typeStep, 300); return; }
    setTimeout(typeStep, 35);
  }
}
typeStep();

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== COUNT-UP =====
function countUp(el, target, duration) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      countUp(el, parseInt(el.dataset.target), 1200);
      countObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.count-up').forEach(el => countObserver.observe(el));

// ===== TIMELINE LINE DRAW =====
const timelineLine = document.getElementById('timelineLine');
if (timelineLine) {
  const lineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) timelineLine.classList.add('animated');
    });
  }, { threshold: 0.1 });
  lineObserver.observe(document.getElementById('timeline'));
}

// ===== PROJECT FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
      if (match) {
        card.style.animation = 'none';
        card.offsetHeight; // trigger reflow
        card.style.animation = '';
        card.classList.remove('visible');
        setTimeout(() => card.classList.add('visible'), 30);
      }
    });
  });
});

// ===== 3D CARD TILT =====
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.querySelector('.project-card-inner').style.transform =
      `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.querySelector('.project-card-inner').style.transform = '';
  });
});

// ===== FOOTER YEAR =====
document.getElementById('year').textContent = new Date().getFullYear();

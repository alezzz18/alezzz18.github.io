(() => {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Modo claro / oscuro ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  const getStoredTheme = () => {
    try { return localStorage.getItem('theme'); } catch { return null; }
  };
  const storeTheme = (theme) => {
    try { localStorage.setItem('theme', theme); } catch { /* sin almacenamiento */ }
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    metaTheme?.setAttribute('content', theme === 'dark' ? '#0D0F12' : '#F3F5F8');
    themeToggle?.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  };

  applyTheme(root.dataset.theme || (systemDark.matches ? 'dark' : 'light'));

  themeToggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    storeTheme(next);
  });

  // Si el usuario nunca eligió un tema, seguimos el del sistema
  systemDark.addEventListener('change', (e) => {
    if (!getStoredTheme()) applyTheme(e.matches ? 'dark' : 'light');
  });

  /* ---------- Header y menú móvil ---------- */
  const header = document.getElementById('siteHeader');
  const nav = document.getElementById('siteNav');
  const menuToggle = document.getElementById('menuToggle');

  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    header.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };

  menuToggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  window.matchMedia('(min-width: 960px)').addEventListener('change', () => setMenu(false));

  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 10);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Enlace activo según la sección visible ---------- */
  const navLinks = [...nav.querySelectorAll('a')];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) =>
          link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  /* ---------- Aparición al hacer scroll ---------- */
  const revealItems = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  /* ---------- Efecto de escritura en el hero ---------- */
  const typed = document.getElementById('typed');
  const roles = [
    'Desarrollador Full Stack',
    'Backend · Laravel & Django',
    'Frontend · Next.js & SvelteKit',
    'APIs con Node.js',
    'Sistemas a medida · Odoo',
  ];

  if (typed && !reduceMotion) {
    let roleIndex = 0;
    let charIndex = roles[0].length;
    let deleting = true;

    const tick = () => {
      const role = roles[roleIndex];

      if (deleting) {
        charIndex--;
        typed.textContent = role.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          return setTimeout(tick, 350);
        }
        return setTimeout(tick, 32);
      }

      charIndex++;
      typed.textContent = roles[roleIndex].slice(0, charIndex);
      if (charIndex === roles[roleIndex].length) {
        deleting = true;
        return setTimeout(tick, 2400);
      }
      return setTimeout(tick, 65);
    };

    setTimeout(tick, 2600);
  }

  /* ---------- Año del footer ---------- */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();

// main.js — CursorHalo, GrainField, RevealOnScroll, smooth scroll

// ── Cursor Halo ──────────────────────────────────────────────────
(function () {
  const halo = document.getElementById('cursor-halo');
  if (!halo) return;

  let visible = false;
  let cx = -9999, cy = -9999;

  document.addEventListener('mousemove', (e) => {
    cx = e.clientX;
    cy = e.clientY;
    if (!visible) {
      visible = true;
      halo.style.opacity = '1';
    }
    halo.style.background =
      `radial-gradient(circle 180px at ${cx}px ${cy}px, rgba(158,255,110,0.07), transparent 70%)`;
  });

  document.addEventListener('mouseleave', () => {
    visible = false;
    halo.style.opacity = '0';
  });
})();

// ── Grain Field (contact section canvas) ────────────────────────
(function () {
  const canvas = document.getElementById('grain-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const OPACITY = 0.1;
  let raf;

  function resize() {
    const r = canvas.getBoundingClientRect();
    canvas.width = r.width;
    canvas.height = r.height;
  }

  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  let frame = 0;
  function tick() {
    frame++;
    if (frame % 2 === 0) {
      const w = canvas.width;
      const h = canvas.height;
      const img = ctx.createImageData(w, h);
      const data = img.data;
      const count = w * h;
      for (let i = 0; i < count; i++) {
        const v = (Math.random() * 255) | 0;
        const j = i * 4;
        data[j] = data[j + 1] = data[j + 2] = v;
        data[j + 3] = (Math.random() * 255 * OPACITY) | 0;
      }
      ctx.putImageData(img, 0, 0);
    }
    raf = requestAnimationFrame(tick);
  }
  tick();
})();

// ── Reveal On Scroll ─────────────────────────────────────────────
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => observer.observe(el));
})();

// ── Smooth Scroll for anchor links ──────────────────────────────
(function () {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();

// ── Education table row hover ────────────────────────────────────
(function () {
  document.querySelectorAll('.edu-row[data-hover]').forEach((row) => {
    row.addEventListener('mouseenter', () => {
      row.style.background = 'rgba(158,255,110,0.04)';
    });
    row.addEventListener('mouseleave', () => {
      row.style.background = 'transparent';
    });
  });
})();

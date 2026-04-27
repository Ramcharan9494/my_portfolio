// Shared: tweaks defaults, theme, ambient grain field, intersection-reveal hook,
// cursor halo, and small utilities used across the three directions.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark"
}/*EDITMODE-END*/;

// ── reveal-on-scroll ─────────────────────────────────────────
function useReveal(threshold = 0.18) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setShown(true); io.disconnect(); } });
    }, { threshold, root: ref.current.closest('[data-scroll-root]') || null });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, shown];
}

// ── parallax-on-scroll inside a scroll container ──────────────
function useParallax(speed = 0.2) {
  const ref = React.useRef(null);
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    const root = ref.current?.closest('[data-scroll-root]');
    if (!root || !ref.current) return;
    const update = () => {
      const rect = ref.current.getBoundingClientRect();
      const rootRect = root.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - (rootRect.top + rootRect.height / 2);
      setY(center * speed);
    };
    update();
    root.addEventListener('scroll', update, { passive: true });
    return () => root.removeEventListener('scroll', update);
  }, [speed]);
  return [ref, y];
}

// ── ambient grain canvas ─────────────────────────────────────
function GrainField({ opacity = 0.08, density = 1, mono = true }) {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    let raf;
    const resize = () => {
      const r = c.getBoundingClientRect();
      c.width = r.width;
      c.height = r.height;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(c);
    let frame = 0;
    const tick = () => {
      frame++;
      if (frame % 2 === 0) {
        const w = c.width, h = c.height;
        const img = ctx.createImageData(w, h);
        const data = img.data;
        const count = w * h;
        for (let i = 0; i < count; i++) {
          const v = (Math.random() * 255) | 0;
          const j = i * 4;
          data[j] = data[j+1] = data[j+2] = v;
          data[j+3] = (Math.random() * 255 * density * opacity) | 0;
        }
        ctx.putImageData(img, 0, 0);
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [opacity, density]);
  return <canvas ref={canvasRef} style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',mixBlendMode:'overlay'}} />;
}

// ── slow gradient sweep behind the hero ──────────────────────
function GradientSweep({ accent = '#f2efe8', dark = true }) {
  const fg = dark ? accent : '#0a0a0a';
  const bg = dark ? '#0a0a0a' : '#f2efe8';
  return (
    <div style={{position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none'}}>
      <div style={{
        position:'absolute', inset:'-30%',
        background: `radial-gradient(60% 50% at 30% 40%, ${fg}22, transparent 70%), radial-gradient(50% 40% at 70% 60%, ${fg}1a, transparent 75%)`,
        animation:'sweep 22s ease-in-out infinite alternate',
        filter:'blur(40px)',
      }} />
      <div style={{
        position:'absolute', inset:'-20%',
        background: `radial-gradient(40% 30% at 80% 30%, ${fg}14, transparent 70%)`,
        animation:'sweep2 30s ease-in-out infinite alternate',
        filter:'blur(60px)',
      }} />
      <style>{`
        @keyframes sweep { 0%{transform:translate(-5%,-5%) rotate(0deg)} 100%{transform:translate(5%,5%) rotate(8deg)} }
        @keyframes sweep2 { 0%{transform:translate(5%,5%) rotate(0deg)} 100%{transform:translate(-8%,-3%) rotate(-6deg)} }
      `}</style>
    </div>
  );
}

// ── cursor halo (only inside an artboard) ────────────────────
function CursorHalo({ accent = '#f2efe8', size = 320 }) {
  const ref = React.useRef(null);
  const [pos, setPos] = React.useState({x:-9999,y:-9999,visible:false});
  React.useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      setPos({ x: e.clientX - r.left, y: e.clientY - r.top, visible: true });
    };
    const onLeave = () => setPos(p => ({...p, visible:false}));
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, []);
  return (
    <div ref={ref} style={{
      position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden', zIndex:2,
      opacity: pos.visible ? 1 : 0, transition:'opacity .4s ease',
    }}>
      <div style={{
        position:'absolute',
        left: pos.x - size/2, top: pos.y - size/2,
        width: size, height: size,
        background: `radial-gradient(circle, ${accent}1f 0%, transparent 60%)`,
        filter:'blur(8px)',
        transition:'left .12s linear, top .12s linear',
      }} />
    </div>
  );
}

// ── tiny placeholder for "image of project" ──────────────────
function Plate({ label, ratio = 4/3, accent = '#f2efe8', dark = true, children }) {
  return (
    <div style={{
      position:'relative', width:'100%', aspectRatio: ratio,
      background: dark
        ? `linear-gradient(135deg, #1a1a1a 0%, #0e0e0e 100%)`
        : `linear-gradient(135deg, #e8e5dd 0%, #d8d4ca 100%)`,
      overflow:'hidden',
      borderRadius: 2,
    }}>
      <div style={{
        position:'absolute', inset:0,
        backgroundImage: dark
          ? 'repeating-linear-gradient(135deg, transparent 0 12px, rgba(242,239,232,0.025) 12px 13px)'
          : 'repeating-linear-gradient(135deg, transparent 0 12px, rgba(10,10,10,0.04) 12px 13px)',
      }} />
      {label && (
        <div style={{
          position:'absolute', left:14, bottom:12,
          fontFamily:'JetBrains Mono, monospace', fontSize:10, letterSpacing:'.12em',
          color: dark ? '#f2efe899' : '#0a0a0a99', textTransform:'uppercase'
        }}>{label}</div>
      )}
      {children}
    </div>
  );
}

// ── reveal wrapper ───────────────────────────────────────────
function Reveal({ delay = 0, y = 24, blur = 8, children, style }) {
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} style={{
      transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
      opacity: shown ? 1 : 0,
      filter: shown ? 'blur(0)' : `blur(${blur}px)`,
      transition: `transform 1.2s cubic-bezier(.2,.7,.2,1) ${delay}ms, opacity 1.1s ease ${delay}ms, filter 1.2s ease ${delay}ms`,
      ...style,
    }}>{children}</div>
  );
}

// ── tiny SVG marks (originals) ───────────────────────────────
function MarkAxis({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" stroke={color} strokeWidth="0.8" />
      <line x1="7" y1="1" x2="7" y2="13" stroke={color} strokeWidth="0.8" />
      <line x1="1" y1="7" x2="13" y2="7" stroke={color} strokeWidth="0.8" />
    </svg>
  );
}
function MarkSlash({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <line x1="2" y1="12" x2="12" y2="2" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function MarkAsterisk({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke={color} strokeWidth="0.9" strokeLinecap="round">
      <line x1="7" y1="1" x2="7" y2="13" />
      <line x1="1.5" y1="3.8" x2="12.5" y2="10.2" />
      <line x1="1.5" y1="10.2" x2="12.5" y2="3.8" />
    </svg>
  );
}

Object.assign(window, {
  TWEAK_DEFAULTS, useReveal, useParallax, GrainField, GradientSweep,
  CursorHalo, Plate, Reveal, MarkAxis, MarkSlash, MarkAsterisk,
});

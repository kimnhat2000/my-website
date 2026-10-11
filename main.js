'use strict';

/* ---------- Sample projects (all names and links are placeholders) ---------- */
const PROJECTS = [
  { id: 1, name: 'TaskNest',     category: 'web',    kind: 'web',    badge: 'New',
    desc: 'A calm to-do app with boards, reminders and keyboard shortcuts.',
    tags: ['React', 'Node.js'], bg: '#CDE8F2', accent: '#D8663C',
    demo: 'https://example.com/tasknest', code: 'https://github.com/your-username/tasknest' },
  { id: 2, name: 'PocketBudget', category: 'mobile', kind: 'mobile', badge: '',
    desc: 'Track spending on the go and see where your money goes each month.',
    tags: ['React Native', 'SQLite'], bg: '#FFE3B8', accent: '#4F6F58',
    demo: 'https://example.com/pocketbudget', code: 'https://github.com/your-username/pocketbudget' },
  { id: 3, name: 'Notely',       category: 'web',    kind: 'web',    badge: '',
    desc: 'A distraction-free notes app with markdown and instant search.',
    tags: ['TypeScript', 'Markdown'], bg: '#E5EFDF', accent: '#B94F28',
    demo: 'https://example.com/notely', code: 'https://github.com/your-username/notely' },
  { id: 4, name: 'TrailMix',     category: 'mobile', kind: 'mobile', badge: 'Popular',
    desc: 'Log hikes, save favourite trails and share routes with friends.',
    tags: ['Swift', 'Maps'], bg: '#F3D9C6', accent: '#2F6F6B',
    demo: 'https://example.com/trailmix', code: 'https://github.com/your-username/trailmix' },
  { id: 5, name: 'QuickLinks',   category: 'tools',  kind: 'tools',  badge: '',
    desc: 'A tiny command-line tool that shortens and organizes your links.',
    tags: ['Node.js', 'CLI'], bg: '#EADFF0', accent: '#D8663C',
    demo: 'https://example.com/quicklinks', code: 'https://github.com/your-username/quicklinks' },
  { id: 6, name: 'JSON Pal',     category: 'tools',  kind: 'tools',  badge: '',
    desc: 'Format, validate and explore JSON right in your browser.',
    tags: ['JavaScript', 'Web'], bg: '#D6ECF5', accent: '#4F6F58',
    demo: 'https://example.com/json-pal', code: 'https://github.com/your-username/json-pal' }
];

/* ---------- Generated app illustrations (inline SVG) ---------- */
function appSVG(o) {
  const ink = '#3A2A22', paper = '#FFFDF9', line = '#E6D8C3';
  let art;

  if (o.kind === 'web') {
    const rows = [118, 148, 178].map((y, i) =>
      `<circle cx="146" cy="${y + 6}" r="6" fill="${o.accent}" ${i === 1 ? 'opacity=".35"' : ''}/>` +
      `<rect x="160" y="${y}" width="${150 - i * 22}" height="12" rx="6" fill="${line}"/>`).join('');
    art = `<rect x="50" y="45" width="300" height="210" rx="14" fill="${paper}"/>
      <path d="M50 59a14 14 0 0 1 14-14h272a14 14 0 0 1 14 14v14H50z" fill="#F1E6D6"/>
      <circle cx="68" cy="59" r="4" fill="#E58A6B"/><circle cx="82" cy="59" r="4" fill="#F6B93B"/><circle cx="96" cy="59" r="4" fill="#7C9A82"/>
      <rect x="50" y="73" width="70" height="182" fill="${o.accent}" fill-opacity=".14"/>
      <rect x="62" y="90" width="46" height="9" rx="4.5" fill="${o.accent}"/>
      <rect x="62" y="110" width="40" height="8" rx="4" fill="${ink}" fill-opacity=".25"/>
      <rect x="62" y="128" width="44" height="8" rx="4" fill="${ink}" fill-opacity=".25"/>
      <rect x="136" y="88" width="110" height="14" rx="7" fill="${ink}"/>
      ${rows}
      <rect x="136" y="212" width="76" height="26" rx="13" fill="${o.accent}"/>`;
  } else if (o.kind === 'mobile') {
    const items = [112, 156, 200].map(y =>
      `<rect x="158" y="${y}" width="84" height="34" rx="10" fill="#F6EEE2"/>
       <circle cx="174" cy="${y + 17}" r="8" fill="${o.accent}" fill-opacity=".8"/>
       <rect x="188" y="${y + 9}" width="40" height="7" rx="3.5" fill="${ink}" fill-opacity=".7"/>
       <rect x="188" y="${y + 21}" width="26" height="6" rx="3" fill="${ink}" fill-opacity=".25"/>`).join('');
    art = `<rect x="52" y="96" width="76" height="44" rx="12" fill="${paper}" fill-opacity=".92"/>
      <rect x="62" y="108" width="40" height="8" rx="4" fill="${o.accent}"/><rect x="62" y="124" width="28" height="6" rx="3" fill="${line}"/>
      <rect x="272" y="170" width="76" height="44" rx="12" fill="${paper}" fill-opacity=".92"/>
      <circle cx="292" cy="192" r="10" fill="${o.accent}" fill-opacity=".8"/><rect x="308" y="186" width="28" height="7" rx="3.5" fill="${line}"/>
      <rect x="138" y="22" width="124" height="256" rx="26" fill="${ink}"/>
      <rect x="146" y="34" width="108" height="232" rx="18" fill="${paper}"/>
      <path d="M146 52a18 18 0 0 1 18-18h72a18 18 0 0 1 18 18v36H146z" fill="${o.accent}"/>
      <rect x="160" y="52" width="50" height="9" rx="4.5" fill="#fff"/><rect x="160" y="68" width="32" height="7" rx="3.5" fill="#fff" fill-opacity=".6"/>
      ${items}
      <rect x="180" y="250" width="40" height="5" rx="2.5" fill="${ink}" fill-opacity=".3"/>`;
  } else {
    const code = [
      [70, 120, '#F6B93B'], [90, 80, '#9DBB8C'], [90, 150, '#FFF7EA'],
      [110, 60, o.accent], [110, 100, '#FFF7EA'], [130, 140, '#9DBB8C'], [150, 90, '#F6B93B']
    ].map(([y, w, c], i) => `<rect x="${i % 3 === 0 ? 76 : 96}" y="${y + 52}" width="${w}" height="9" rx="4.5" fill="${c}" fill-opacity=".9"/>`).join('');
    art = `<rect x="45" y="50" width="310" height="200" rx="14" fill="#2B211C"/>
      <circle cx="66" cy="70" r="4" fill="#E58A6B"/><circle cx="80" cy="70" r="4" fill="#F6B93B"/><circle cx="94" cy="70" r="4" fill="#7C9A82"/>
      <text x="64" y="106" font-family="monospace" font-size="14" fill="#F6B93B">$ run ${o.name.toLowerCase().replace(/\s+/g, '-')}</text>
      ${code}
      <rect x="76" y="214" width="9" height="16" fill="${o.accent}"/>`;
  }

  return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="${o.bg}"/>
  <circle cx="340" cy="50" r="46" fill="#fff" fill-opacity=".45"/>
  <circle cx="50" cy="260" r="64" fill="${o.accent}" fill-opacity=".12"/>
  ${art}
</svg>`;
}

/* ---------- Projects ---------- */
const grid = document.getElementById('project-grid');
const countEl = document.getElementById('result-count');

function projectCard(p) {
  return `<article class="card project reveal">
    <div class="project-img">${appSVG(p)}${p.badge ? `<span class="badge">${p.badge}</span>` : ''}</div>
    <div class="project-body">
      <h3 class="project-title">${p.name}</h3>
      <p class="project-desc">${p.desc}</p>
      <ul class="tags" aria-label="Technologies">${p.tags.map(t => `<li>${t}</li>`).join('')}</ul>
      <div class="project-links">
        <a class="btn btn-small" href="${p.demo}" target="_blank" rel="noopener noreferrer">Live demo<span class="sr-only"> of ${p.name} (opens in a new tab)</span></a>
        <a class="btn btn-small btn-ghost" href="${p.code}" target="_blank" rel="noopener noreferrer">Source<span class="sr-only"> code for ${p.name} (opens in a new tab)</span></a>
      </div>
    </div>
  </article>`;
}

function renderProjects(key = 'all') {
  const items = PROJECTS.filter(p => key === 'all' || p.category === key);
  grid.innerHTML = items.map(projectCard).join('');
  countEl.textContent = `${items.length} ${items.length === 1 ? 'project' : 'projects'} shown`;
  observeReveals();
}

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => {
      const active = c === chip;
      c.classList.toggle('is-active', active);
      c.setAttribute('aria-pressed', String(active));
    });
    renderProjects(chip.dataset.filter);
  });
});

/* ---------- Reveal on scroll ---------- */
let observer;
function observeReveals() {
  const els = document.querySelectorAll('.reveal:not(.is-visible)');
  if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('is-visible')); return; }
  observer = observer || new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-visible'); observer.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}
document.querySelectorAll('.section-head, .about-grid, .contact-grid').forEach(el => el.classList.add('reveal'));
renderProjects();

/* ---------- Mobile nav ---------- */
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
function setNav(open) {
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
}
toggle.addEventListener('click', () => setNav(toggle.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', e => { if (e.target.closest('a')) setNav(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') setNav(false); });

/* ---------- Contact form (opens visitor's email app; no backend) ---------- */
const CONTACT_EMAIL = 'hello@example.com'; // TODO: replace with your real address
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const messages = { name: 'Please enter your name.', email: 'Please enter a valid email address.', message: 'Please write a short message.' };

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;
  ['name', 'email', 'message'].forEach(id => {
    const input = form.elements[id];
    const err = form.querySelector(`[data-error-for="${id}"]`);
    const ok = input.value.trim() !== '' && input.checkValidity();
    input.setAttribute('aria-invalid', String(!ok));
    if (!ok) { err.id = `err-${id}`; input.setAttribute('aria-describedby', err.id); } else input.removeAttribute('aria-describedby');
    err.textContent = ok ? '' : messages[id];
    valid = valid && ok;
  });
  if (!valid) { form.querySelector('[aria-invalid="true"]').focus(); status.textContent = ''; return; }

  const d = new FormData(form);
  const body = `${d.get('message')}\n\nFrom: ${d.get('name')} (${d.get('email')})`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Hello from ' + d.get('name'))}&body=${encodeURIComponent(body)}`;
  status.textContent = 'Thanks! Your email app should open with your message ready to send.';
});

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

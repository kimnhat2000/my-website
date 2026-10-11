'use strict';

/* ---------- Sample data (addresses and prices are fictional) ---------- */
const LISTINGS = [
  { id: 1, price: 429900, address: '118 Dundas Ave', area: 'Old East Village', beds: 2, baths: 1, sqft: 980,  badge: 'New',        type: 'bungalow', wall: '#F3D9A4', roof: '#6B4A3A', door: '#D8663C', sky: ['#CDE8F2', '#FFF4E0'], tree: 'left' },
  { id: 2, price: 465000, address: '57 Elmwood Rd',  area: 'Argyle',           beds: 3, baths: 1, sqft: 1150, badge: '',           type: 'two',      wall: '#A9C4A8', roof: '#4E5D57', door: '#E0A93A', sky: ['#FFE3B8', '#FFF6E6'], tree: 'right' },
  { id: 3, price: 519900, address: '23 Wortley Rd',  area: 'Wortley Village',  beds: 2, baths: 1, sqft: 1080, badge: 'Open house', type: 'bungalow', wall: '#E8B4A0', roof: '#8A4B3A', door: '#2F6F6B', sky: ['#D6ECF5', '#FFF1DA'], tree: 'right' },
  { id: 4, price: 589000, address: '804 Talbot St',  area: 'Old North',        beds: 3, baths: 2, sqft: 1420, badge: 'Just listed', type: 'two',     wall: '#C8765A', roof: '#5A5260', door: '#F4E6CF', sky: ['#CDE8F2', '#FFF4E0'], tree: 'left' },
  { id: 5, price: 639900, address: '36 Cedar Lane',  area: 'Byron',            beds: 3, baths: 2, sqft: 1560, badge: '',           type: 'bungalow', wall: '#9DBBC9', roof: '#4E5D57', door: '#D8663C', sky: ['#FFE3B8', '#FFF6E6'], tree: 'left' },
  { id: 6, price: 679900, address: '271 Oak Park Dr', area: 'Westmount',       beds: 4, baths: 3, sqft: 1780, badge: 'New',        type: 'two',      wall: '#F4E6CF', roof: '#6B4A3A', door: '#8C3B3B', sky: ['#D6ECF5', '#FFF1DA'], tree: 'right' }
];

const money = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });

/* ---------- Generated house illustrations (inline SVG) ---------- */
function houseSVG(o) {
  const two = o.type === 'two';
  const trim = '#FFFAF0';
  const glow = '#FFD98A';
  const gid = 'sky' + o.id;
  const wx = two ? 110 : 90;
  const ww = two ? 180 : 220;
  const wy = two ? 112 : 150;
  const apexY = two ? wy - 62 : wy - 66;
  const roofPts = `${wx - 22},${wy + 3} 200,${apexY} ${wx + ww + 22},${wy + 3}`;

  const win = (x, y, w, h) =>
    `<rect x="${x - 9}" y="${y}" width="7" height="${h}" rx="2" fill="${o.door}"/>` +
    `<rect x="${x + w + 2}" y="${y}" width="7" height="${h}" rx="2" fill="${o.door}"/>` +
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${glow}" stroke="${trim}" stroke-width="4"/>` +
    `<path d="M${x + w / 2} ${y}v${h}M${x} ${y + h / 2}h${w}" stroke="${trim}" stroke-width="2.5"/>`;

  let windows;
  if (two) {
    windows = win(134, 134, 40, 36) + win(226, 134, 40, 36) + win(130, 190, 38, 36) + win(232, 190, 38, 36);
  } else {
    windows = win(112, 172, 50, 40) + win(238, 172, 50, 40) +
      `<circle cx="200" cy="${wy - 20}" r="9" fill="${glow}" stroke="${trim}" stroke-width="3"/>`;
  }

  const doorY = two ? 188 : 184;
  const tx = o.tree === 'left' ? 52 : 348;
  const siding = Array.from({ length: 7 }, (_, i) => wy + 14 + i * 14)
    .filter(y => y < 236)
    .map(y => `<line x1="${wx}" x2="${wx + ww}" y1="${y}" y2="${y}" stroke="#000" stroke-opacity=".07" stroke-width="2"/>`).join('');

  return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration of a cozy ${two ? 'two-storey' : 'bungalow'} home on ${o.address ? o.address : 'a quiet street'}" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${o.sky[0]}"/><stop offset="1" stop-color="${o.sky[1]}"/></linearGradient></defs>
  <rect width="400" height="300" fill="url(#${gid})"/>
  <circle cx="${o.tree === 'left' ? 335 : 65}" cy="58" r="28" fill="#FFE08A" opacity=".95"/>
  <g fill="#fff" opacity=".85"><ellipse cx="${o.tree === 'left' ? 120 : 280}" cy="52" rx="38" ry="11"/><ellipse cx="${o.tree === 'left' ? 145 : 255}" cy="43" rx="24" ry="10"/></g>
  <rect y="232" width="400" height="68" fill="#9DBB8C"/>
  <rect y="232" width="400" height="10" fill="#8CAD7C"/>
  <polygon points="176,242 224,242 256,300 144,300" fill="#EBD9BC"/>
  <rect x="${tx - 7}" y="196" width="14" height="46" rx="3" fill="#7A5338"/>
  <circle cx="${tx}" cy="170" r="34" fill="#6E8F72"/><circle cx="${tx - 18}" cy="188" r="22" fill="#7C9A82"/><circle cx="${tx + 18}" cy="188" r="22" fill="#5F8268"/>
  <rect x="${wx + ww - 52}" y="${apexY - 4}" width="18" height="50" fill="#9A5A42"/>
  <rect x="${wx}" y="${wy}" width="${ww}" height="${240 - wy}" fill="${o.wall}"/>
  ${siding}
  <polygon points="${roofPts}" fill="${o.roof}" stroke="${o.roof}" stroke-width="6" stroke-linejoin="round"/>
  <line x1="${wx - 22}" y1="${wy + 3}" x2="${wx + ww + 22}" y2="${wy + 3}" stroke="${trim}" stroke-width="3" opacity=".8"/>
  ${windows}
  <rect x="170" y="${doorY - 10}" width="60" height="6" rx="3" fill="${o.roof}"/>
  <rect x="178" y="${doorY}" width="44" height="${240 - doorY}" rx="4" fill="${o.door}" stroke="${trim}" stroke-width="3"/>
  <rect x="186" y="${doorY + 8}" width="28" height="14" rx="2" fill="${glow}"/>
  <circle cx="214" cy="${doorY + 34}" r="2.5" fill="${trim}"/>
  <rect x="170" y="240" width="60" height="6" rx="2" fill="#D9C7AD"/>
  <circle cx="${wx + 4}" cy="236" r="17" fill="#5F8268"/><circle cx="${wx + ww - 4}" cy="236" r="17" fill="#5F8268"/>
  <g fill="#F6B93B"><circle cx="${wx - 2}" cy="230" r="3"/><circle cx="${wx + 8}" cy="238" r="3"/><circle cx="${wx + ww + 2}" cy="230" r="3"/></g>
  <g fill="#D8663C"><circle cx="${wx + 12}" cy="230" r="3"/><circle cx="${wx + ww - 10}" cy="238" r="3"/></g>
</svg>`;
}

/* ---------- Listings ---------- */
const grid = document.getElementById('listing-grid');
const countEl = document.getElementById('result-count');

function listingCard(l) {
  return `<article class="card listing reveal">
    <div class="listing-img">${houseSVG(l)}${l.badge ? `<span class="badge">${l.badge}</span>` : ''}</div>
    <div class="listing-body">
      <p class="price">${money.format(l.price)}</p>
      <p class="address">${l.address}</p>
      <p class="area">${l.area}, London, ON</p>
      <ul class="specs" aria-label="Home details">
        <li>${l.beds} bd</li><li>${l.baths} ba</li><li>${l.sqft.toLocaleString('en-CA')} sq ft</li>
      </ul>
      <a class="btn btn-small btn-ghost" href="#contact" data-inquire="${l.address}, ${l.area}">Ask about this home</a>
    </div>
  </article>`;
}

const filters = {
  all: () => true,
  under500: l => l.price < 500000,
  '500to600': l => l.price >= 500000 && l.price < 600000,
  over600: l => l.price >= 600000
};

function renderListings(key = 'all') {
  const items = LISTINGS.filter(filters[key]);
  grid.innerHTML = items.map(listingCard).join('');
  countEl.textContent = `${items.length} ${items.length === 1 ? 'home' : 'homes'} shown`;
  observeReveals();
}

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => {
      const active = c === chip;
      c.classList.toggle('is-active', active);
      c.setAttribute('aria-pressed', String(active));
    });
    renderListings(chip.dataset.filter);
  });
});

/* Prefill the contact message when asking about a home */
grid.addEventListener('click', e => {
  const link = e.target.closest('[data-inquire]');
  if (!link) return;
  const msg = document.getElementById('message');
  msg.value = `Hi Jordan, I'd like more information about ${link.dataset.inquire}.`;
});

/* ---------- Hero image ---------- */
document.getElementById('hero-image').innerHTML = houseSVG({
  id: 'hero', type: 'bungalow', wall: '#F3D9A4', roof: '#8A4B3A', door: '#D8663C',
  sky: ['#FFD9A0', '#FFF3DC'], tree: 'left', address: ''
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
renderListings();

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
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const messages = { name: 'Please enter your name.', email: 'Please enter a valid email address.', message: 'Please tell me how I can help.' };

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
  const body = `${d.get('message')}\n\nName: ${d.get('name')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone') || 'n/a'}`;
  window.location.href = `mailto:hello@jordanellis.example?subject=${encodeURIComponent('Website enquiry from ' + d.get('name'))}&body=${encodeURIComponent(body)}`;
  status.textContent = 'Thanks! Your email app should open with your message ready to send.';
});

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

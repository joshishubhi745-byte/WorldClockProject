/* ============================================================
   World Clock — script.js
   ============================================================ */

/* ── City Database ──────────────────────────────────────────────────────── */
const CITIES = [
  { city: 'New York',      country: 'United States',  flag: '🇺🇸', tz: 'America/New_York' },
  { city: 'Los Angeles',   country: 'United States',  flag: '🇺🇸', tz: 'America/Los_Angeles' },
  { city: 'Chicago',       country: 'United States',  flag: '🇺🇸', tz: 'America/Chicago' },
  { city: 'Denver',        country: 'United States',  flag: '🇺🇸', tz: 'America/Denver' },
  { city: 'Phoenix',       country: 'United States',  flag: '🇺🇸', tz: 'America/Phoenix' },
  { city: 'Honolulu',      country: 'United States',  flag: '🇺🇸', tz: 'Pacific/Honolulu' },
  { city: 'Anchorage',     country: 'United States',  flag: '🇺🇸', tz: 'America/Anchorage' },
  { city: 'Toronto',       country: 'Canada',         flag: '🇨🇦', tz: 'America/Toronto' },
  { city: 'Vancouver',     country: 'Canada',         flag: '🇨🇦', tz: 'America/Vancouver' },
  { city: 'Mexico City',   country: 'Mexico',         flag: '🇲🇽', tz: 'America/Mexico_City' },
  { city: 'São Paulo',     country: 'Brazil',         flag: '🇧🇷', tz: 'America/Sao_Paulo' },
  { city: 'Buenos Aires',  country: 'Argentina',      flag: '🇦🇷', tz: 'America/Argentina/Buenos_Aires' },
  { city: 'Lima',          country: 'Peru',           flag: '🇵🇪', tz: 'America/Lima' },
  { city: 'Bogotá',        country: 'Colombia',       flag: '🇨🇴', tz: 'America/Bogota' },
  { city: 'Santiago',      country: 'Chile',          flag: '🇨🇱', tz: 'America/Santiago' },
  { city: 'London',        country: 'United Kingdom', flag: '🇬🇧', tz: 'Europe/London' },
  { city: 'Paris',         country: 'France',         flag: '🇫🇷', tz: 'Europe/Paris' },
  { city: 'Berlin',        country: 'Germany',        flag: '🇩🇪', tz: 'Europe/Berlin' },
  { city: 'Madrid',        country: 'Spain',          flag: '🇪🇸', tz: 'Europe/Madrid' },
  { city: 'Rome',          country: 'Italy',          flag: '🇮🇹', tz: 'Europe/Rome' },
  { city: 'Amsterdam',     country: 'Netherlands',    flag: '🇳🇱', tz: 'Europe/Amsterdam' },
  { city: 'Brussels',      country: 'Belgium',        flag: '🇧🇪', tz: 'Europe/Brussels' },
  { city: 'Zurich',        country: 'Switzerland',    flag: '🇨🇭', tz: 'Europe/Zurich' },
  { city: 'Vienna',        country: 'Austria',        flag: '🇦🇹', tz: 'Europe/Vienna' },
  { city: 'Stockholm',     country: 'Sweden',         flag: '🇸🇪', tz: 'Europe/Stockholm' },
  { city: 'Oslo',          country: 'Norway',         flag: '🇳🇴', tz: 'Europe/Oslo' },
  { city: 'Helsinki',      country: 'Finland',        flag: '🇫🇮', tz: 'Europe/Helsinki' },
  { city: 'Warsaw',        country: 'Poland',         flag: '🇵🇱', tz: 'Europe/Warsaw' },
  { city: 'Prague',        country: 'Czech Republic', flag: '🇨🇿', tz: 'Europe/Prague' },
  { city: 'Athens',        country: 'Greece',         flag: '🇬🇷', tz: 'Europe/Athens' },
  { city: 'Bucharest',     country: 'Romania',        flag: '🇷🇴', tz: 'Europe/Bucharest' },
  { city: 'Lisbon',        country: 'Portugal',       flag: '🇵🇹', tz: 'Europe/Lisbon' },
  { city: 'Dublin',        country: 'Ireland',        flag: '🇮🇪', tz: 'Europe/Dublin' },
  { city: 'Moscow',        country: 'Russia',         flag: '🇷🇺', tz: 'Europe/Moscow' },
  { city: 'Kiev',          country: 'Ukraine',        flag: '🇺🇦', tz: 'Europe/Kiev' },
  { city: 'Istanbul',      country: 'Turkey',         flag: '🇹🇷', tz: 'Europe/Istanbul' },
  { city: 'Cairo',         country: 'Egypt',          flag: '🇪🇬', tz: 'Africa/Cairo' },
  { city: 'Nairobi',       country: 'Kenya',          flag: '🇰🇪', tz: 'Africa/Nairobi' },
  { city: 'Lagos',         country: 'Nigeria',        flag: '🇳🇬', tz: 'Africa/Lagos' },
  { city: 'Johannesburg',  country: 'South Africa',   flag: '🇿🇦', tz: 'Africa/Johannesburg' },
  { city: 'Casablanca',    country: 'Morocco',        flag: '🇲🇦', tz: 'Africa/Casablanca' },
  { city: 'Addis Ababa',   country: 'Ethiopia',       flag: '🇪🇹', tz: 'Africa/Addis_Ababa' },
  { city: 'Accra',         country: 'Ghana',          flag: '🇬🇭', tz: 'Africa/Accra' },
  { city: 'Dubai',         country: 'UAE',            flag: '🇦🇪', tz: 'Asia/Dubai' },
  { city: 'Riyadh',        country: 'Saudi Arabia',   flag: '🇸🇦', tz: 'Asia/Riyadh' },
  { city: 'Tehran',        country: 'Iran',           flag: '🇮🇷', tz: 'Asia/Tehran' },
  { city: 'Kabul',         country: 'Afghanistan',    flag: '🇦🇫', tz: 'Asia/Kabul' },
  { city: 'Karachi',       country: 'Pakistan',       flag: '🇵🇰', tz: 'Asia/Karachi' },
  { city: 'Islamabad',     country: 'Pakistan',       flag: '🇵🇰', tz: 'Asia/Karachi' },
  { city: 'Lahore',        country: 'Pakistan',       flag: '🇵🇰', tz: 'Asia/Karachi' },
  { city: 'Mumbai',        country: 'India',          flag: '🇮🇳', tz: 'Asia/Kolkata' },
  { city: 'Delhi',         country: 'India',          flag: '🇮🇳', tz: 'Asia/Kolkata' },
  { city: 'Kolkata',       country: 'India',          flag: '🇮🇳', tz: 'Asia/Kolkata' },
  { city: 'Bangalore',     country: 'India',          flag: '🇮🇳', tz: 'Asia/Kolkata' },
  { city: 'Chennai',       country: 'India',          flag: '🇮🇳', tz: 'Asia/Kolkata' },
  { city: 'Colombo',       country: 'Sri Lanka',      flag: '🇱🇰', tz: 'Asia/Colombo' },
  { city: 'Kathmandu',     country: 'Nepal',          flag: '🇳🇵', tz: 'Asia/Kathmandu' },
  { city: 'Dhaka',         country: 'Bangladesh',     flag: '🇧🇩', tz: 'Asia/Dhaka' },
  { city: 'Rangoon',       country: 'Myanmar',        flag: '🇲🇲', tz: 'Asia/Rangoon' },
  { city: 'Bangkok',       country: 'Thailand',       flag: '🇹🇭', tz: 'Asia/Bangkok' },
  { city: 'Hanoi',         country: 'Vietnam',        flag: '🇻🇳', tz: 'Asia/Ho_Chi_Minh' },
  { city: 'Jakarta',       country: 'Indonesia',      flag: '🇮🇩', tz: 'Asia/Jakarta' },
  { city: 'Kuala Lumpur',  country: 'Malaysia',       flag: '🇲🇾', tz: 'Asia/Kuala_Lumpur' },
  { city: 'Singapore',     country: 'Singapore',      flag: '🇸🇬', tz: 'Asia/Singapore' },
  { city: 'Manila',        country: 'Philippines',    flag: '🇵🇭', tz: 'Asia/Manila' },
  { city: 'Hong Kong',     country: 'China',          flag: '🇭🇰', tz: 'Asia/Hong_Kong' },
  { city: 'Taipei',        country: 'Taiwan',         flag: '🇹🇼', tz: 'Asia/Taipei' },
  { city: 'Beijing',       country: 'China',          flag: '🇨🇳', tz: 'Asia/Shanghai' },
  { city: 'Shanghai',      country: 'China',          flag: '🇨🇳', tz: 'Asia/Shanghai' },
  { city: 'Seoul',         country: 'South Korea',    flag: '🇰🇷', tz: 'Asia/Seoul' },
  { city: 'Tokyo',         country: 'Japan',          flag: '🇯🇵', tz: 'Asia/Tokyo' },
  { city: 'Almaty',        country: 'Kazakhstan',     flag: '🇰🇿', tz: 'Asia/Almaty' },
  { city: 'Tashkent',      country: 'Uzbekistan',     flag: '🇺🇿', tz: 'Asia/Tashkent' },
  { city: 'Sydney',        country: 'Australia',      flag: '🇦🇺', tz: 'Australia/Sydney' },
  { city: 'Melbourne',     country: 'Australia',      flag: '🇦🇺', tz: 'Australia/Melbourne' },
  { city: 'Perth',         country: 'Australia',      flag: '🇦🇺', tz: 'Australia/Perth' },
  { city: 'Auckland',      country: 'New Zealand',    flag: '🇳🇿', tz: 'Pacific/Auckland' },
];

/* ── App State ──────────────────────────────────────────────────────────── */
let clocks = [
  {
    city: 'Local Time',
    country: 'Your timezone',
    flag: '📍',
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
    home: true,
  },
  { city: 'New York', country: 'United States',  flag: '🇺🇸', tz: 'America/New_York' },
  { city: 'London',   country: 'United Kingdom', flag: '🇬🇧', tz: 'Europe/London' },
  { city: 'Dubai',    country: 'UAE',            flag: '🇦🇪', tz: 'Asia/Dubai' },
  { city: 'Tokyo',    country: 'Japan',          flag: '🇯🇵', tz: 'Asia/Tokyo' },
  { city: 'Sydney',   country: 'Australia',      flag: '🇦🇺', tz: 'Australia/Sydney' },
];

/* ── Helper: Get time components for a timezone ─────────────────────────── */
function getTime(tz) {
  try {
    const now = new Date();
    const f = (opts) => new Intl.DateTimeFormat('en-US', { timeZone: tz, ...opts }).format(now);
    const h = parseInt(f({ hour: 'numeric', hour12: false }), 10);
    const m = parseInt(f({ minute: '2-digit' }), 10);
    const s = parseInt(f({ second: '2-digit' }), 10);
    return {
      h, m, s,
      time: f({ hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
      date: f({ weekday: 'short', month: 'short', day: 'numeric' }),
    };
  } catch {
    return { h: 0, m: 0, s: 0, time: '--:--:--', date: '---' };
  }
}

/* ── Helper: Calculate UTC offset string ────────────────────────────────── */
function getOffset(tz) {
  try {
    const now = new Date();
    const ms = (z) => new Date(now.toLocaleString('en-US', { timeZone: z })).getTime();
    const diff = (ms(tz) - ms('UTC')) / 3600000;
    const sign = diff >= 0 ? '+' : '-';
    const abs  = Math.abs(diff);
    const hh   = Math.floor(abs);
    const mm   = Math.round((abs - hh) * 60);
    return `UTC${sign}${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
  } catch {
    return 'UTC';
  }
}

/* ── Helper: Is it nighttime? ───────────────────────────────────────────── */
function isNight(h) {
  return h < 6 || h >= 20;
}

/* ── Draw Analog Clock on Canvas ────────────────────────────────────────── */
function draw(cv, h, m, s) {
  const ctx = cv.getContext('2d');
  const sz  = cv.width;
  const cx  = sz / 2;
  const cy  = sz / 2;
  const r   = sz / 2 - 4;

  ctx.clearRect(0, 0, sz, sz);

  // Clock face — radial gradient
  const grad = ctx.createRadialGradient(cx, cy - r * 0.2, r * 0.08, cx, cy, r);
  grad.addColorStop(0, '#1d1d2b');
  grad.addColorStop(1, '#111119');
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, 2 * Math.PI);
  ctx.fillStyle = grad;
  ctx.fill();

  // Glowing rim
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, 2 * Math.PI);
  ctx.strokeStyle = 'rgba(91,141,238,0.22)';
  ctx.lineWidth   = 1.5;
  ctx.stroke();

  // 60 tick marks (major every 5th)
  for (let i = 0; i < 60; i++) {
    const angle = i * 6 * Math.PI / 180;
    const major = i % 5 === 0;
    const len   = major ? 8 : 4;
    ctx.beginPath();
    ctx.moveTo(cx + Math.sin(angle) * (r - len - 2), cy - Math.cos(angle) * (r - len - 2));
    ctx.lineTo(cx + Math.sin(angle) * (r - 2),       cy - Math.cos(angle) * (r - 2));
    ctx.strokeStyle = major ? 'rgba(255,255,255,0.32)' : 'rgba(255,255,255,0.09)';
    ctx.lineWidth   = major ? 1.4 : 0.75;
    ctx.lineCap     = 'round';
    ctx.stroke();
  }

  // Hand drawing helper
  function hand(angle, length, width, color, glow) {
    ctx.save();
    if (glow) { ctx.shadowColor = color; ctx.shadowBlur = 9; }
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.sin(angle) * length, cy - Math.cos(angle) * length);
    ctx.strokeStyle = color;
    ctx.lineWidth   = width;
    ctx.lineCap     = 'round';
    ctx.stroke();
    ctx.restore();
  }

  // Counter-weight tail for second hand
  function tail(angle, tailLen, width, color) {
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx - Math.sin(angle) * tailLen, cy + Math.cos(angle) * tailLen);
    ctx.strokeStyle = color;
    ctx.lineWidth   = width;
    ctx.lineCap     = 'round';
    ctx.stroke();
  }

  // Compute angles
  const hAngle = ((h % 12) + m / 60) * 30 * Math.PI / 180;
  const mAngle = (m + s / 60) * 6  * Math.PI / 180;
  const sAngle = s * 6 * Math.PI / 180;

  // Draw hands: hour, minute, second
  hand(hAngle, r * 0.50, 2.4, 'rgba(225,225,240,0.88)', false);
  hand(mAngle, r * 0.73, 1.7, 'rgba(195,195,220,0.82)', false);
  hand(sAngle, r * 0.80, 1.0, '#5b8dee', true);
  tail(sAngle, r * 0.18, 1.0, '#5b8dee');

  // Center cap with glow
  ctx.save();
  ctx.shadowColor = '#5b8dee';
  ctx.shadowBlur  = 10;
  ctx.beginPath();
  ctx.arc(cx, cy, 3, 0, 2 * Math.PI);
  ctx.fillStyle = '#5b8dee';
  ctx.fill();
  ctx.restore();

  // White inner dot
  ctx.beginPath();
  ctx.arc(cx, cy, 1.3, 0, 2 * Math.PI);
  ctx.fillStyle = '#fff';
  ctx.fill();
}

/* ── Render all clock cards ─────────────────────────────────────────────── */
function render() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  if (!clocks.length) {
    grid.innerHTML = '<div class="empty">Search for a city above to add your first clock.</div>';
    return;
  }

  clocks.forEach((c, i) => {
    const t   = getTime(c.tz);
    const off = getOffset(c.tz);
    const ng  = isNight(t.h);

    const el  = document.createElement('div');
    el.className          = 'card' + (c.home ? ' home' : '');
    el.style.animationDelay = (i * 0.05) + 's';

    el.innerHTML = `
      <div class="c-top">
        <div class="c-meta">
          <div class="c-flag">${c.flag}</div>
          <div class="c-name">
            ${c.city}
            ${c.home ? '<span class="home-pill">Home</span>' : ''}
          </div>
          <div class="c-ctry">${c.country}</div>
        </div>
        <button class="rm" data-i="${i}" title="Remove">✕</button>
      </div>
      <div class="cv-wrap">
        <canvas id="cv${i}" width="88" height="88"></canvas>
      </div>
      <div class="d-time" id="dt${i}">${t.time}</div>
      <div class="d-date" id="dd${i}">
        <span class="dn ${ng ? 'ngt' : 'day'}"></span>${t.date}
      </div>
      <span class="offset" id="of${i}">${off}</span>
    `;

    grid.appendChild(el);
  });

  // Bind remove buttons
  grid.querySelectorAll('.rm').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      clocks.splice(+e.currentTarget.dataset.i, 1);
      render();
      tick();
    });
  });

  // Draw initial analog clocks
  clocks.forEach((c, i) => {
    const cv = document.getElementById('cv' + i);
    const t  = getTime(c.tz);
    if (cv) draw(cv, t.h, t.m, t.s);
  });
}

/* ── Tick: update all clocks every second ───────────────────────────────── */
function tick() {
  const now = new Date();

  // Update UTC bar
  document.getElementById('utcT').textContent =
    String(now.getUTCHours()).padStart(2, '0') + ':' +
    String(now.getUTCMinutes()).padStart(2, '0') + ':' +
    String(now.getUTCSeconds()).padStart(2, '0');

  document.getElementById('utcD').textContent =
    new Intl.DateTimeFormat('en-US', {
      weekday: 'short', month: 'short', day: 'numeric',
      year: 'numeric', timeZone: 'UTC',
    }).format(now);

  // Update each card
  clocks.forEach((c, i) => {
    const t  = getTime(c.tz);
    const ng = isNight(t.h);

    const dt = document.getElementById('dt' + i);
    const dd = document.getElementById('dd' + i);
    const cv = document.getElementById('cv' + i);

    if (dt) dt.textContent = t.time;
    if (dd) dd.innerHTML   = `<span class="dn ${ng ? 'ngt' : 'day'}"></span>${t.date}`;
    if (cv) draw(cv, t.h, t.m, t.s);
  });
}

/* ── Search & Dropdown ──────────────────────────────────────────────────── */
const srch   = document.getElementById('srch');
const drop   = document.getElementById('drop');
const clrBtn = document.getElementById('clrBtn');

let matches = [];

function openDrop(q) {
  matches = CITIES.filter((c) =>
    c.city.toLowerCase().includes(q) ||
    c.country.toLowerCase().includes(q) ||
    c.tz.toLowerCase().replace(/_/g, ' ').includes(q)
  ).slice(0, 8);

  drop.innerHTML = matches.length
    ? matches.map((m, i) => `
        <div class="d-item" data-i="${i}">
          <span class="d-flag">${m.flag}</span>
          <span class="d-info">
            <div class="d-city">${m.city}</div>
            <div class="d-ctry">${m.country}</div>
          </span>
          <span class="d-tz">${m.tz.split('/').pop().replace(/_/g, ' ')}</span>
        </div>`).join('')
    : '<div class="d-none">No cities found.</div>';

  drop.querySelectorAll('.d-item').forEach((el) =>
    el.addEventListener('click', () => addCity(matches[+el.dataset.i]))
  );

  drop.classList.add('open');
}

function closeDrop() {
  drop.classList.remove('open');
  drop.innerHTML = '';
  matches = [];
}

function addCity(c) {
  if (!clocks.some((x) => x.tz === c.tz && x.city === c.city)) {
    clocks.push(c);
    render();
    tick();
  }
  srch.value = '';
  closeDrop();
  srch.focus();
}

// Event listeners
srch.addEventListener('input', () => {
  const q = srch.value.trim().toLowerCase();
  q ? openDrop(q) : closeDrop();
});

srch.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeDrop(); srch.blur(); }
  if (e.key === 'Enter' && matches.length) addCity(matches[0]);
});

clrBtn.addEventListener('click', () => {
  srch.value = '';
  closeDrop();
  srch.focus();
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.srch-wrap')) closeDrop();
});

/* ── Boot ───────────────────────────────────────────────────────────────── */
render();
tick();
setInterval(tick, 1000);

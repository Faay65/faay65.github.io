// ============================================================
//  RENDER.JS — Builds the page from your data files
//  You do NOT need to edit this file.
// ============================================================

// ---------- HELPERS ----------
const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
};
const q = id => document.getElementById(id);

// ---------- HERO ----------
function renderHero() {
  const p = PERSONAL;
  q('hero-badge-text').textContent =
    `Endorsed Global Talent · ${p.endorsement}`;
  q('hero-title').innerHTML =
    `Dr. <span class="hl">${p.firstName}</span><br>${p.lastName}`;
  q('hero-subtitle').textContent =
    `Research Fellow in ${p.field} · Ph.D. in [Your Discipline] · ${p.specialty} Expert`;

  // role tags from about tags
  const tagWrap = q('hero-role-tags');
  (ABOUT.tags || []).slice(0, 3).forEach(t => {
    const s = document.createElement('span');
    s.className = 'role-tag'; s.textContent = t;
    tagWrap.appendChild(s);
  });

  // stats
  const statsRow = q('hero-stats');
  p.stats.forEach(s => {
    statsRow.innerHTML += `
      <div>
        <div class="stat-num">${s.number}</div>
        <div class="stat-label">${s.label}</div>
      </div>`;
  });

  // hero card
  q('hero-card-name').textContent = p.name;
  q('hero-card-role').textContent = p.title;
  const avatar = q('hero-avatar');
  if (p.photo) {
    avatar.innerHTML = `<img src="${p.photo}" alt="${p.name}" />`;
  } else {
    avatar.textContent = p.initials;
  }
  const hcTags = q('hero-card-tags');
  (ABOUT.tags || []).slice(0, 4).forEach(t => {
    const s = document.createElement('span');
    s.className = 'hc-tag'; s.textContent = t;
    hcTags.appendChild(s);
  });
}

// ---------- ABOUT ----------
function renderAbout() {
  const summaryEl = q('about-summary');
  ABOUT.summary.forEach(para => {
    const p = document.createElement('p');
    p.innerHTML = para;
    summaryEl.appendChild(p);
  });

  const tagsEl = q('about-tags');
  ABOUT.tags.forEach(t => {
    const s = document.createElement('span');
    s.className = 'tag'; s.textContent = t;
    tagsEl.appendChild(s);
  });

  // sidebar info
  q('about-position').textContent =
    `${EXPERIENCE[0]?.role || ''} at ${EXPERIENCE[0]?.institution || ''}`;
  q('about-education').textContent =
    EDUCATION[0]?.institution || '';
  q('about-location').textContent =
    CONTACT.institution + ', UK';

  // languages
  const langEl = q('about-languages');
  PERSONAL.languages.forEach(l => {
    const s = document.createElement('span');
    s.className = 'lang-chip';
    s.textContent = `${l.language} — ${l.level}`;
    langEl.appendChild(s);
  });
}

// ---------- EDUCATION ----------
function renderEducation() {
  const grid = q('education-grid');
  EDUCATION.forEach(e => {
    const card = document.createElement('a');
    card.className = 'edu-card';
    card.href = e.url || '#';
    if (e.url) card.target = '_blank';
    card.style.textDecoration = 'none'; card.style.color = 'inherit';
    card.innerHTML = `
      <div class="edu-logo">
        ${e.logo
          ? `<img src="photos/${e.logo}" alt="${e.institution}" />`
          : '🎓'}
      </div>
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-institution">${e.institution}</div>
      <div class="edu-period">${e.period}</div>
      <div class="edu-desc">${e.description}</div>`;
    grid.appendChild(card);
  });
}

// ---------- EXPERIENCE ----------
function renderExperience() {
  const timeline = q('experience-timeline');
  EXPERIENCE.forEach(e => {
    timeline.innerHTML += `
      <div class="tl-item">
        <div class="tl-dot"></div>
        <div class="tl-meta">
          <span class="tl-date">${e.period}</span>
          <span class="tl-badge">${e.badge}</span>
        </div>
        <div class="tl-role">${e.url
          ? `<a href="${e.url}" target="_blank" style="color:inherit;text-decoration:none">${e.role}</a>`
          : e.role}</div>
        <div class="tl-org">${e.institution}</div>
        <div class="tl-desc">${e.description}</div>
      </div>`;
  });
}

// ---------- PUBLICATIONS ----------
function renderPublications() {
  const grid = q('pub-grid');
  PUBLICATIONS.forEach(p => {
    grid.innerHTML += `
      <div class="pub-card">
        <div class="pub-type">${p.type} · ${p.year}</div>
        <div class="pub-title">${p.url
          ? `<a href="${p.url}" target="_blank" style="color:inherit">${p.title}</a>`
          : p.title}</div>
        <div class="pub-venue">${p.venue}</div>
        <div class="pub-footer">
          <div class="pub-tags">
            ${p.tags.map(t => `<span class="pub-tag">${t}</span>`).join('')}
          </div>
          ${p.url ? `<a href="${p.url}" target="_blank" class="btn btn-sm btn-outline">View ↗</a>` : ''}
        </div>
      </div>`;
  });
}

// ---------- PROJECTS ----------
function renderProjects() {
  const grid = q('projects-grid');
  PROJECTS.forEach(p => {
    const statusClass = p.status === 'Active' ? 'status-active' : 'status-review';
    grid.innerHTML += `
      <div class="project-card">
        <span class="project-status ${statusClass}">${p.status}</span>
        <div class="project-title">${p.url
          ? `<a href="${p.url}" target="_blank" style="color:inherit">${p.title}</a>`
          : p.title}</div>
        ${p.funder ? `<div class="project-funder">${p.funder}</div>` : ''}
        <div class="project-desc">${p.description}</div>
        ${p.partners.length
          ? `<div class="project-partners">${p.partners.map(pt =>
              `<span class="project-partner">${pt}</span>`).join('')}</div>`
          : ''}
      </div>`;
  });
}

// ---------- SKILLS ----------
function renderSkills() {
  const grid = q('skills-grid');
  SKILLS.forEach(group => {
    let itemsHtml = group.items.map(s => `
      <div class="skill-item">
        <span class="skill-name">${s.name}</span>
        <div class="skill-bar-wrap">
          <div class="skill-bar" style="width:${s.percent}%"></div>
        </div>
      </div>`).join('');
    grid.innerHTML += `
      <div class="skill-group">
        <h3>${group.group}</h3>
        ${itemsHtml}
      </div>`;
  });
}

// ---------- CERTIFICATES & ACHIEVEMENTS ----------
function renderCertificates() {
  const certGrid = q('cert-grid');
  CERTIFICATES.forEach(c => {
    certGrid.innerHTML += `
      <div class="cert-card">
        <div class="cert-year">${c.year}</div>
        <div class="cert-title">${c.url
          ? `<a href="${c.url}" target="_blank" style="color:inherit">${c.title}</a>`
          : c.title}</div>
        <div class="cert-issuer">${c.issuer}</div>
      </div>`;
  });

  const awardGrid = q('awards-grid');
  AWARDS.forEach(a => {
    awardGrid.innerHTML += `
      <div class="cert-card">
        <div class="cert-year">${a.year}</div>
        <div class="cert-title">${a.url
          ? `<a href="${a.url}" target="_blank" style="color:inherit">${a.title}</a>`
          : a.title}</div>
        <div class="cert-issuer">${a.body}</div>
        <p style="font-size:0.82rem;color:var(--text-muted);margin-top:0.5rem">${a.description}</p>
      </div>`;
  });

  const achList = q('achievements-list');
  ACHIEVEMENTS.forEach(a => {
    achList.innerHTML += `
      <div class="achievement-item">
        <div class="achievement-year">${a.year}</div>
        <div class="achievement-title">${a.title}</div>
        <div class="achievement-desc">${a.description}</div>
      </div>`;
  });
}

// ---------- COLLABORATORS ----------
function renderCollaborators() {
  const grid = q('collab-grid');
  COLLABORATORS.forEach(c => {
    grid.innerHTML += `
      <a class="collab-card" href="${c.url || '#'}" target="${c.url ? '_blank' : ''}"
         style="text-decoration:none;color:inherit">
        <div class="collab-logo">
          ${c.logo
            ? `<img src="photos/${c.logo}" alt="${c.name}" />`
            : '🏛️'}
        </div>
        <div class="collab-name">${c.name}</div>
        <div class="collab-role">${c.role}</div>
      </a>`;
  });
}

// ---------- PHOTOS ----------
function renderPhotos() {
  const grid = q('photo-grid');
  const filterWrap = q('photo-filter');
  const categories = ['All', ...new Set(PHOTOS.map(p => p.category))];

  categories.forEach((cat, i) => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (i === 0 ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterPhotos(cat === 'All' ? null : cat);
    });
    filterWrap.appendChild(btn);
  });

  PHOTOS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.dataset.category = p.category;
    card.innerHTML = `
      <div class="photo-img">
        <img src="photos/${p.file}" alt="${p.caption}"
             onerror="this.parentElement.textContent='📷 ${p.caption}'" />
      </div>
      <div class="photo-caption">
        <p>${p.caption}</p>
        <small>${p.location} · ${p.year}</small>
      </div>`;
    grid.appendChild(card);
  });
}

function filterPhotos(category) {
  document.querySelectorAll('.photo-card').forEach(card => {
    card.style.display = (!category || card.dataset.category === category)
      ? '' : 'none';
  });
}

// ---------- CONTACT ----------
function renderContact() {
  const c = CONTACT;
  q('contact-email').textContent = c.email;
  q('contact-email').href = `mailto:${c.email}`;
  q('contact-phone').textContent = c.phone;
  q('contact-institution').textContent = c.institution;
  q('contact-office').textContent = c.office;

  const socialWrap = q('social-links');
  const socialDefs = [
    { key: 'linkedin',      label: 'LinkedIn',       icon: '🔗' },
    { key: 'googleScholar', label: 'Google Scholar',  icon: '📚' },
    { key: 'researchGate',  label: 'ResearchGate',    icon: '🔬' },
    { key: 'orcid',         label: 'ORCID',           icon: '🆔' },
    { key: 'universityPage',label: 'University Page', icon: '🏛️' },
  ];
  socialDefs.forEach(s => {
    if (c.links[s.key]) {
      socialWrap.innerHTML += `
        <a href="${c.links[s.key]}" target="_blank" class="social-btn">
          ${s.icon} ${s.label}
        </a>`;
    }
  });
}

// ---------- FOOTER ----------
function renderFooter() {
  q('footer-name').textContent = PERSONAL.name;
}

// ---------- NAV --- Active link highlight on scroll ----------
function initScrollSpy() {
  const sections = document.querySelectorAll('[data-section]');
  const links = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.dataset.section;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
    });
  });
}

// ---------- BOOT ----------
document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderAbout();
  renderEducation();
  renderExperience();
  renderPublications();
  renderProjects();
  renderSkills();
  renderCertificates();
  renderCollaborators();
  renderPhotos();
  renderContact();
  renderFooter();
  initScrollSpy();
});

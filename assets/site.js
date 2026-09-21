/* CSC renderers. Nothing here needs editing to change wording or add an app.
   All content comes from assets/content.js */

const esc = s => String(s).replace(/[&<>]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;" }[c]));
const arrow = '<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
  '<path d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5" stroke="currentColor" stroke-width="1.7" ' +
  'stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* the wordmark: last word of the brand name drops to a second line */
/* body copy: two columns when there is enough of it, one when there is not */
function colsHTML(arr){
  const list = [].concat(arr || []);
  return `<div class="cols${list.length < 2 ? " one" : ""}">` +
    list.map(t => `<p class="lede">${esc(t)}</p>`).join("") + `</div>`;
}
/* the small label above a section. Uses the eyebrow field in content.js when
   there is one, otherwise falls back to the wording built from brand.mark */
function eyebrowHTML(block, fallback){
  const text = (block && block.eyebrow) || fallback;
  return text ? `<div class="eyebrow">${esc(text)}</div>` : "";
}

/* an app page label. Set it to "" in content.js to remove it completely */
function appLabel(a, key, fallback){
  const own  = (a && a.labels) ? a.labels[key] : undefined;
  const site = (SITE.appLabels || {})[key];
  const val  = own !== undefined ? own : (site !== undefined ? site : fallback);
  return String(val == null ? "" : val).trim();
}
function appEyebrow(a, key, fallback){
  const t = appLabel(a, key, fallback);
  return t ? `<div class="eyebrow">${esc(t)}</div>` : "";
}
function appHeading(a, key, fallback, tag){
  const t = appLabel(a, key, fallback);
  const g = tag || "h2";
  return t ? `<${g}>${esc(t)}</${g}>` : "";
}

/* ------------------------------------------------------------- contact */
/* contact.form in content.js decides what the contact page shows:
     an email address        a real form, sent by FormSubmit, no account needed
     a Google Form address   that form embedded in the page
     empty                   a placeholder                                     */
function contactSectionHTML(){
  const c = SITE.contact;
  return `<section class="sec navy contact" id="contact">
    <div class="w">
      <h2>${esc(c.heading)}</h2>
      <p>${esc(c.body)}</p>
      <a class="btn" href="contact.html">${esc(c.cta)} ${arrow}</a>
    </div>
  </section>`;
}

/* the address of another page on this site, as a full URL.
   Returns "" when the page is opened straight off the disk, because a
   file:// address is no use as a redirect target. */
function siteURL(file){
  if(location.protocol !== "http:" && location.protocol !== "https:") return "";
  return location.href.split("#")[0].split("?")[0].replace(/[^\/]*$/, "") + file;
}

function contactBodyHTML(){
  const c = SITE.contact;
  const to = String(c.form || "").trim();
  const L = Object.assign({ name:"Name", email:"Email", company:"Company name",
                            message:"How can we help?" }, c.labels || {});

  if(to.indexOf("@") > -1 || /^[a-z0-9]{6,}$/i.test(to)){
    return `<form class="cform" method="POST" action="https://formsubmit.co/${to}">
      <input type="hidden" name="_subject" value="${esc(c.emailSubject || "New enquiry from the website")}">
      <input type="hidden" name="_template" value="table">
      <input type="hidden" name="_captcha" value="false">
      ${siteURL("thanks.html") ? `<input type="hidden" name="_next" value="${siteURL("thanks.html")}">` : ""}
      <input type="text" name="_honey" class="hp" tabindex="-1" autocomplete="off">
      <div class="row">
        <label>${esc(L.name)}<input name="name" type="text" required autocomplete="name"></label>
        <label>${esc(L.email)}<input name="email" type="email" required autocomplete="email"></label>
      </div>
      <label>${esc(L.company)}<input name="company" type="text" autocomplete="organization"></label>
      <label>${esc(L.message)}<textarea name="message" rows="5" required></textarea></label>
      <button class="btn" type="submit">${esc(c.sendLabel || "Send")} ${arrow}</button>
    </form>`;
  }

  if(to.slice(0,4) === "http"){
    return `<div class="formwrap">
      <iframe src="${to}" title="Contact form" loading="lazy" frameborder="0"
              marginheight="0" marginwidth="0">Loading</iframe>
    </div>`;
  }

  return `<div class="formsoon"><p>The form is not connected yet. See DEPLOY.md.</p></div>`;
}

function renderContact(){
  const c = SITE.contact;
  document.title = "Contact | " + SITE.brand.mark;
  document.body.insertAdjacentHTML("beforeend", navHTML());
  document.body.insertAdjacentHTML("beforeend", `
  <section class="apphero contactpage"><div class="w">
    <a class="crumb" href="index.html">Back</a>
    <h1>${esc(c.pageHeading || c.heading)}</h1>
    <p class="head">${esc(c.pageBody || c.body)}</p>
  </div></section>

  <section class="block"><div class="w">
    ${contactBodyHTML()}
    ${SITE.brand.email ? `<p class="cor">Email: <b>${esc(SITE.brand.email)}</b></p>` : ""}
  </div></section>`);
  document.body.insertAdjacentHTML("beforeend", footHTML());
}

function renderThanks(){
  const t = SITE.thanks || {};
  document.title = "Thank you | " + SITE.brand.mark;
  document.body.insertAdjacentHTML("beforeend", navHTML());
  document.body.insertAdjacentHTML("beforeend", `
  <section class="apphero contactpage thanks"><div class="w">
    <h1>${esc(t.heading || "Message sent")}</h1>
    <p class="head">${esc(t.body || "Thanks for getting in touch. You will hear back shortly.")}</p>
    <div class="cta"><a class="btn" href="index.html">${esc(t.cta || "Back to the apps")} ${arrow}</a></div>
  </div></section>
  <section class="block"><div class="w"></div></section>`);
  document.body.insertAdjacentHTML("beforeend", footHTML());
}

function markHTML(){
  const parts = String(SITE.brand.name).trim().split(/\s+/);
  const last = parts.length > 1 ? parts.pop() : "";
  const line = esc(parts.join(" ")) + (last ? "<br>" + esc(last) : "");
  return `<a class="mark" href="index.html"><b>${esc(SITE.brand.mark)}</b>
      <span>${line}</span></a>`;
}

function navHTML(){
  return `<header class="nav"><div class="w">
    ${markHTML()}
    <div class="sp"></div>
    ${SITE.nav.map(n => `<a class="lnk" href="${n.href}">${esc(n.label)}</a>`).join("")}
    <a class="btn" href="contact.html">${esc(SITE.brand.navCta || "Contact")} ${arrow}</a>
  </div></header>`;
}

function footHTML(){
  return `<div class="strip">${esc(SITE.brand.strapline || "")}</div>
  <footer><div class="w">
    ${markHTML()}
    <div class="sp"></div>
    <span>${esc(SITE.brand.location)}</span>
    <span class="fmail">${esc(SITE.brand.email)}</span>
  </div></footer>`;
}

/* rotating screenshot frame, no dependencies */
function frameHTML(){
  const shots = SITE.apps.map(a => ({src:a.image, name:a.name}));
  return `<div class="frame">
    <div class="bar"><i></i><i></i><i></i></div>
    <div class="slides" id="slides">
      ${shots.map((s,i) => `<img src="${s.src}" alt="${esc(s.name)}" class="${i===0?"on":""}">`).join("")}
    </div>
  </div>
  <div class="slidelabel" id="slidelabel">${esc(shots[0].name)}</div>
  <div class="dots" id="dots">
    ${shots.map((s,i) => `<button aria-label="${esc(s.name)}" class="${i===0?"on":""}"></button>`).join("")}
  </div>`;
}
function startFrame(){
  const imgs = [...document.querySelectorAll("#slides img")];
  const dots = [...document.querySelectorAll("#dots button")];
  const label = document.getElementById("slidelabel");
  if(!imgs.length) return;
  let i = 0, timer;
  const go = n => {
    i = (n + imgs.length) % imgs.length;
    imgs.forEach((im,k) => im.classList.toggle("on", k===i));
    dots.forEach((d,k) => d.classList.toggle("on", k===i));
    if(label) label.textContent = SITE.apps[i] ? SITE.apps[i].name : "";
  };
  const play = () => { clearInterval(timer); timer = setInterval(() => go(i+1), 4500); };
  dots.forEach((d,k) => d.onclick = () => { go(k); play(); });
  play();
}

/* ------------------------------------------------------------------ home */
function renderHome(style, bg){
  const h = SITE.hero;
  style = style || SITE.heroStyle || "carousel";
  if(bg) SITE.heroBackground = bg;
  document.title = SITE.brand.mark + " | " + SITE.brand.name;
  document.body.insertAdjacentHTML("beforeend", navHTML());

  const copy = `
    <h1>${esc(h.heading)} <span class="accent">${esc(h.headingAccent)}</span></h1>
    <div class="rule"></div>
    <p>${esc(h.body)}</p>
    <div class="cta">
      <a class="btn" href="#apps">${esc(h.cta)} ${arrow}</a>
    </div>`;

  let hero;
  if(style === "centred"){
    const bg = SITE.heroBackground || "grid";
    hero = `<section class="hero centred bg-${bg}"><div class="w">${copy}</div></section>`;
  } else if(style === "split"){
    hero = `<section class="hero split-hero"><div class="w">
      <div>${copy}</div>
      <div>${frameHTML()}</div>
    </div></section>`;
  } else {
    hero = `<section class="hero carousel"><div class="w">
      <div class="copy">${copy}</div>
      ${frameHTML()}
    </div></section>`;
  }
  document.body.insertAdjacentHTML("beforeend", hero);

  document.body.insertAdjacentHTML("beforeend", `
  <section class="sec" id="apps">
    <div class="w">
      <h2>${esc(SITE.appsHeading || "Apps")}</h2>
      <div class="cards">
        ${SITE.apps.map(a => `
          <a class="card" href="app.html?a=${a.id}">
            <div class="thumb"><img src="${a.image}" alt="${esc(a.name)}" loading="lazy"></div>
            <div class="in">
              <h3>${esc(a.name)}</h3>
              <p>${esc(a.cardLine)}</p>
              <span class="tlink">View app ${arrow}</span>
            </div>
          </a>`).join("")}
      </div>
    </div>
  </section>

  <section class="sec navy">
    <div class="w">
      ${eyebrowHTML(SITE.intro, "What " + SITE.brand.mark + " does")}
      <div class="split">
        <h2>${esc(SITE.intro.heading)}</h2>
        ${colsHTML(SITE.intro.body)}
      </div>
      <div class="pillars">
        ${SITE.pillars.map(p => `<div><h4>${esc(p.title)}</h4><p>${esc(p.body)}</p></div>`).join("")}
      </div>
    </div>
  </section>

  ${SITE.howItWorks ? `<section class="sec light" id="how">
    <div class="w">
      ${eyebrowHTML(SITE.howItWorks, "How it works")}
      <div class="split">
        <h2>${esc(SITE.howItWorks.heading)}</h2>
        ${colsHTML(SITE.howItWorks.body)}
      </div>
      <div class="steps">
        ${SITE.howItWorks.steps.map((s,i) => `<div class="step">
          <b>0${i+1}</b><span>${esc(s)}</span></div>`).join("")}
      </div>
    </div>
  </section>` : ""}

  <section class="sec" id="about">
    <div class="w">
      ${eyebrowHTML(SITE.about, "About " + SITE.brand.mark)}
      <div class="split">
        <h2>${esc(SITE.about.heading)}</h2>
        ${colsHTML(SITE.about.body)}
      </div>
    </div>
  </section>

  ${contactSectionHTML()}`);

  document.body.insertAdjacentHTML("beforeend", footHTML());
  startFrame();
}

/* ------------------------------------------------------------- app page */
function renderApp(){
  const id = new URLSearchParams(location.search).get("a");
  const a = SITE.apps.find(x => x.id === id) || SITE.apps[0];
  document.title = a.name + " | " + SITE.brand.mark;
  document.body.insertAdjacentHTML("beforeend", navHTML());

  const fallback = `<div class="shot-ph"><b>${esc(a.name)}</b>
      <span>Screenshot to be added</span></div>`;
  const shot = a.image
    ? `<div class="heroshot"><img src="${a.image}" alt="${esc(a.name)}"
         onerror="this.parentNode.innerHTML=${JSON.stringify(fallback).replace(/"/g,"&quot;")}"></div>`
    : "";

  document.body.insertAdjacentHTML("beforeend", `
  <section class="apphero"><div class="w">
    <a class="crumb" href="index.html#apps">Back to apps</a>
    <h1>${esc(a.name)}</h1>
    <p class="head">${esc(a.headline)}</p>
    <div class="cta">
      <a class="btn" href="${a.launch}" target="_blank" rel="noopener">
        ${esc(a.launchLabel || "Launch prototype")} ${arrow}</a>
    </div>
    ${shot}
  </div></section>

  ${a.results ? `<section class="results"><div class="w">
    ${a.results.map(r => `<div><b>${esc(r.figure)}</b><span>${esc(r.label)}</span></div>`).join("")}
  </div></section>` : ""}

  <section class="block"><div class="w">
   ${appEyebrow(a, "problemEyebrow", "The problem")}
    <div class="split">
      ${a.problemHeading ? `<h2>${esc(a.problemHeading)}</h2>` : ""}
      ${colsHTML(a.problem)}
    </div>
  </div></section>

  <section class="block off"><div class="w">
   ${appEyebrow(a, "solutionEyebrow", "The solution")}
    <div class="split">
      ${a.solutionHeading ? `<h2>${esc(a.solutionHeading)}</h2>` : ""}
      ${colsHTML(a.solution)}
    </div>
     ${a.gallery && a.gallery.length ? `<div class="gallery${a.gallery.length === 1 ? " one" : ""}">
      ${a.gallery.map(g => `<figure><img src="${g}" alt="${esc(a.name)}" loading="lazy"></figure>`).join("")}
    </div>` : ""}
  </div></section>

   ${a.features && a.features.length ? `<section class="block"><div class="w">
    ${appEyebrow(a, "featuresEyebrow", "Key features")}
    ${appHeading(a, "featuresHeading", "What it does")}
    <ul class="feats">${a.features.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
  </div></section>` : ""}

  ${a.howItWorks ? `<section class="block light"><div class="w">
   ${appEyebrow(a, "howEyebrow", "How it works")}
    <div class="split">
      ${appHeading(a, "howHeading", "Under the bonnet")}
      ${colsHTML(a.howItWorks)}
    </div>
  </div></section>` : ""}

  <section class="endcta"><div class="w">
   ${appHeading(a, "endHeading", "See it running.", "h3")}
    <a class="btn" href="${a.launch}" target="_blank" rel="noopener">
      ${esc(a.launchLabel || "Launch prototype")} ${arrow}</a>
  </div></section>`);

  document.body.insertAdjacentHTML("beforeend", footHTML());
}

/* =============================================================================
   PASTE 2 of 3  ->  assets/site.js

   Paste everything below at the very END of site.js, after the closing brace
   of renderApp(). Nothing already in the file changes.
   ========================================================================== */

/* the shared panel: gradient, grid texture, glow, blur filter */
function artFrame(id, stops){
  return `<defs>
    <linearGradient id="${id}-bg" x1="0" y1="0" x2="1" y2="1">${stops}</linearGradient>
    <pattern id="${id}-grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M20 0H0V20" fill="none" stroke="#BBDAF8" stroke-opacity=".06" stroke-width="1"/>
    </pattern>
    <radialGradient id="${id}-glow" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#2A5390" stop-opacity=".85"/>
      <stop offset="1" stop-color="#2A5390" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="${id}-cglow" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#FF676A" stop-opacity=".45"/>
      <stop offset="1" stop-color="#FF676A" stop-opacity="0"/>
    </radialGradient>
    <filter id="${id}-blur" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="3"/>
    </filter>
  </defs>
  <rect width="320" height="200" fill="url(#${id}-bg)"/>
  <rect width="320" height="200" fill="url(#${id}-grid)"/>`;
}

const SKY = "#BBDAF8", CORAL = "#FF676A";

/* every glyph takes a colour so one item in a scene can be picked out in coral */
const ICONS = {

  person: (x, y, c = SKY, o = .85) =>
    `<g fill="none" stroke="${c}" stroke-opacity="${o}" stroke-width="1.7"
        stroke-linecap="round">
      <circle cx="${x}" cy="${y - 9}" r="4.8"/>
      <path d="M${x - 9} ${y + 8} v-2.5 a9 9 0 0 1 18 0 v2.5"/>
    </g>`,

  agent: (x, y, c = SKY, o = .9) =>
    `<g fill="none" stroke="${c}" stroke-opacity="${o}" stroke-width="1.7"
        stroke-linecap="round">
      <circle cx="${x}" cy="${y - 9}" r="5"/>
      <path d="M${x - 10} ${y + 9} v-3 a10 10 0 0 1 20 0 v3"/>
      <path d="M${x - 10} ${y - 11} a10 10 0 0 1 20 0"/>
      <path d="M${x - 10} ${y - 11} v4 M${x + 10} ${y - 11} v4"/>
      <path d="M${x + 10} ${y - 7} q0 7 -6 8"/>
    </g>`,

  factory: (x, y, c = SKY, o = .85) =>
    `<g fill="none" stroke="${c}" stroke-opacity="${o}" stroke-width="1.6"
        stroke-linejoin="round">
      <path d="M${x - 15} ${y + 10} V${y - 2} l7.5 -7 v7 l7.5 -7 v7 l7.5 -7 v19 Z"/>
      <path d="M${x - 9} ${y + 3} h4.5 M${x + 1} ${y + 3} h4.5" stroke-opacity="${o * .55}"/>
    </g>`,

  warehouse: (x, y, c = SKY, o = .9) =>
    `<g fill="none" stroke="${c}" stroke-opacity="${o}" stroke-width="1.7"
        stroke-linejoin="round">
      <path d="M${x - 21} ${y + 13} V${y - 2} l21 -11 l21 11 V${y + 13} Z"/>
      <path d="M${x - 21} ${y + 2} h42" stroke-opacity="${o * .4}"/>
      <rect x="${x - 7}" y="${y + 2}" width="14" height="11" rx="1"/>
    </g>`,

  box: (x, y, s = 9, c = SKY, o = .8, dash = "") =>
    `<g fill="none" stroke="${c}" stroke-opacity="${o}" stroke-width="1.5"
        ${dash ? `stroke-dasharray="${dash}"` : ""}>
      <rect x="${x - s}" y="${y - s}" width="${s * 2}" height="${s * 2}" rx="1.5"/>
      <path d="M${x - s} ${y - s / 2.2} h${s * 2}" stroke-opacity="${o * .5}"/>
    </g>`,

  truck: (x, y, c = SKY, o = .9) =>
    `<g fill="none" stroke="${c}" stroke-opacity="${o}" stroke-width="1.6"
        stroke-linejoin="round">
      <path d="M${x - 20} ${y + 5} V${y - 9} h23 v14 Z"/>
      <path d="M${x + 3} ${y + 5} V${y - 3} h8 l6 6 v2 Z"/>
      <circle cx="${x - 11}" cy="${y + 8} " r="3.2"/>
      <circle cx="${x + 9}" cy="${y + 8}" r="3.2"/>
    </g>`,

  shop: (x, y, c = SKY, o = .9) =>
    `<g fill="none" stroke="${c}" stroke-opacity="${o}" stroke-width="1.6"
        stroke-linejoin="round">
      <path d="M${x - 16} ${y + 13} V${y - 3} h32 v16 Z"/>
      <path d="M${x - 19} ${y - 3} h38 l-5 -8 h-28 Z"/>
      <rect x="${x - 4}" y="${y + 3} " width="10" height="10" rx="1"/>
    </g>`,

  house: (x, y, c = SKY, o = .9) =>
    `<g fill="none" stroke="${c}" stroke-opacity="${o}" stroke-width="1.6"
        stroke-linejoin="round">
      <path d="M${x - 15} ${y + 13} V${y - 1} l15 -12 l15 12 V${y + 13} Z"/>
      <rect x="${x - 4}" y="${y + 3}" width="10" height="10" rx="1"/>
    </g>`,

  phone: (x, y, c = SKY, o = .9) =>
    `<g fill="none" stroke="${c}" stroke-opacity="${o}" stroke-width="1.6">
      <rect x="${x - 10}" y="${y - 15}" width="20" height="30" rx="3.5"/>
      <path d="M${x - 4} ${y - 11} h8" stroke-opacity="${o * .5}"/>
      <path d="M${x - 6} ${y - 2} h12 M${x - 6} ${y + 5} h7" stroke-opacity="${o * .5}"/>
    </g>`,

  database: (x, y, c = SKY, o = .85) =>
    `<g fill="none" stroke="${c}" stroke-opacity="${o}" stroke-width="1.6">
      <ellipse cx="${x}" cy="${y - 11}" rx="14" ry="5"/>
      <path d="M${x - 14} ${y - 11} v15 a14 5 0 0 0 28 0 v-15"/>
      <path d="M${x - 14} ${y - 3.5} a14 5 0 0 0 28 0" stroke-opacity="${o * .5}"/>
    </g>`,

  doc: (x, y, c = SKY, o = .85) =>
    `<g fill="none" stroke="${c}" stroke-opacity="${o}" stroke-width="1.6"
        stroke-linejoin="round">
      <path d="M${x - 13} ${y + 17} V${y - 17} h17 l9 9 v25 Z"/>
      <path d="M${x + 4} ${y - 17} v9 h9" stroke-opacity="${o * .5}"/>
      <path d="M${x - 6} ${y - 1} h13 M${x - 6} ${y + 6} h13" stroke-opacity="${o * .5}"/>
    </g>`,

  tick: (x, y, c = CORAL, o = 1) =>
    `<path d="M${x - 6} ${y} l4.5 4.5 L${x + 7} ${y - 6}" fill="none" stroke="${c}"
       stroke-opacity="${o}" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round"/>`,

  bubble: (x, y, w = 34, h = 24, c = SKY, o = .8) =>
    `<g fill="none" stroke="${c}" stroke-opacity="${o}" stroke-width="1.6"
        stroke-linejoin="round">
      <path d="M${x - w / 2 + 5} ${y - h / 2} h${w - 10} a5 5 0 0 1 5 5 v${h - 10}
        a5 5 0 0 1 -5 5 h-${w - 20} l-8 7 v-7 h-2 a5 5 0 0 1 -5 -5 v-${h - 10}
        a5 5 0 0 1 5 -5 Z"/>
      <path d="M${x - w / 2 + 10} ${y - 3} h${w * .5} M${x - w / 2 + 10} ${y + 4}
        h${w * .3}" stroke-opacity="${o * .5}"/>
    </g>`,

  screen: (x, y, w, h, c = SKY, o = .8) =>
    `<g fill="none" stroke="${c}" stroke-opacity="${o}" stroke-width="1.7"
        stroke-linejoin="round">
      <rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="7"/>
      <path d="M${x} ${y + h / 2} v7 M${x - 11} ${y + h / 2 + 7} h22"
        stroke-linecap="round"/>
    </g>`,

  spark: (x, y, c = CORAL, o = 1) =>
    `<path d="M${x} ${y - 13} l3 7.5 7.5 3 -7.5 3 -3 7.5 -3 -7.5 -7.5 -3 7.5 -3 Z"
       fill="none" stroke="${c}" stroke-opacity="${o}" stroke-width="1.7"
       stroke-linejoin="round"/>`,

  /* a connector drawn twice: thick and faint underneath, thin and clear on top */
  link: (d, c = SKY, o = .45, dash = "") =>
    `<path d="${d}" fill="none" stroke="${c}" stroke-opacity="${o * .3}" stroke-width="5"
       stroke-linecap="round" stroke-linejoin="round"/>
     <path d="${d}" fill="none" stroke="${c}" stroke-opacity="${o}" stroke-width="1.5"
       stroke-linecap="round" stroke-linejoin="round"
       ${dash ? `stroke-dasharray="${dash}"` : ""}/>`,

  /* the same, in coral, with a glow behind it */
  linkAccent: (d, id, dash = "") =>
    `<path d="${d}" fill="none" stroke="${CORAL}" stroke-opacity=".5" stroke-width="4.5"
       filter="url(#${id}-blur)" stroke-linejoin="round"/>
     <path d="${d}" fill="none" stroke="${CORAL}" stroke-width="1.8" stroke-linecap="round"
       stroke-linejoin="round" ${dash ? `stroke-dasharray="${dash}"` : ""}/>`
};

const I = ICONS;

const ART = {

  /* Process & Structure: a scattered team on the left, a clear structure on the
     right, and the documented process that turns one into the other */
  flow: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" role="img">
    ${artFrame("fl", '<stop offset="0" stop-color="#071531"/><stop offset=".6" stop-color="#0B1D3A"/><stop offset="1" stop-color="#16315A"/>')}
    <ellipse cx="150" cy="100" rx="140" ry="96" fill="url(#fl-glow)" opacity=".5"/>
    <circle cx="44" cy="112" r="30" fill="url(#fl-cglow)"/>
    <g stroke="${SKY}" stroke-opacity=".2" stroke-width="1.2">
      <path d="M44 56 L38 112 M38 112 L74 152 M74 152 L96 84 M96 84 L44 56
        M44 56 L74 152 M38 112 L96 84"/>
    </g>
    ${I.person(44, 56)}
    ${I.person(38, 112, CORAL, .95)}
    ${I.person(74, 152)}
    ${I.person(96, 84)}
    ${I.link("M108 96 C 132 92, 132 100, 142 100", SKY, .4)}
    ${I.doc(163, 100)}
    ${I.tick(163, 108)}
    ${I.link("M186 100 C 198 100, 200 68, 214 62", SKY, .45)}
    ${I.link("M214 62 H246 M246 62 V84", SKY, .45)}
    ${I.link("M214 130 H278 M214 130 V118 M246 130 V116 M278 130 V118", SKY, .35)}
    <path d="M246 102 V130" fill="none" stroke="${SKY}" stroke-opacity=".35" stroke-width="1.4"/>
    ${I.person(246, 62)}
    ${I.person(214, 146)}
    ${I.person(246, 146)}
    ${I.person(278, 146)}
  </svg>`,

  /* Supply & Sourcing: several factories feeding one hub, one of them the
     second source that keeps supply standing up */
  network: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" role="img">
    ${artFrame("nw", '<stop offset="0" stop-color="#081733"/><stop offset=".55" stop-color="#0B1D3A"/><stop offset="1" stop-color="#142950"/>')}
    <ellipse cx="160" cy="100" rx="136" ry="98" fill="url(#nw-glow)" opacity=".5"/>
    <circle cx="262" cy="150" r="32" fill="url(#nw-cglow)"/>
    ${I.link("M64 58 C 108 70, 118 86, 136 98", SKY, .42)}
    ${I.link("M64 150 C 108 138, 118 118, 136 106", SKY, .42)}
    ${I.link("M262 58 C 220 70, 202 86, 186 98", SKY, .42)}
    ${I.linkAccent("M262 150 C 220 138, 202 118, 186 106", "nw")}
    ${I.factory(52, 58)}
    ${I.factory(52, 150)}
    ${I.factory(268, 58)}
    ${I.factory(268, 150, CORAL, .95)}
    ${I.box(108, 74, 6, SKY, .7)}
    ${I.box(108, 132, 6, SKY, .7)}
    ${I.box(212, 74, 6, SKY, .7)}
    ${I.box(212, 132, 6, CORAL, .9)}
    ${I.warehouse(161, 100)}
  </svg>`,

  /* 3PL & Fulfilment: one warehouse, one fleet, three different channels */
  routes: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" role="img">
    ${artFrame("rt", '<stop offset="0" stop-color="#16315A"/><stop offset=".45" stop-color="#0B1D3A"/><stop offset="1" stop-color="#071531"/>')}
    <ellipse cx="130" cy="100" rx="132" ry="94" fill="url(#rt-glow)" opacity=".45"/>
    <circle cx="252" cy="156" r="32" fill="url(#rt-cglow)"/>
    ${I.link("M86 96 C 150 92, 168 48, 224 44", SKY, .45, "6 5")}
    ${I.link("M86 104 H224", SKY, .45, "6 5")}
    ${I.linkAccent("M86 108 C 150 116, 168 152, 224 158", "rt", "6 5")}
    ${I.warehouse(56, 96)}
    ${I.truck(152, 104)}
    ${I.house(254, 42)}
    ${I.shop(254, 100)}
    ${I.phone(254, 158, CORAL, .95)}
  </svg>`,

  /* Inventory & Demand: racking, the gap where the stockout is, and someone
     counting it by hand */
  levels: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" role="img">
    ${artFrame("lv", '<stop offset="0" stop-color="#071531"/><stop offset=".5" stop-color="#0B1D3A"/><stop offset="1" stop-color="#14294F"/>')}
    <ellipse cx="180" cy="104" rx="140" ry="94" fill="url(#lv-glow)" opacity=".45"/>
    <circle cx="224" cy="110" r="30" fill="url(#lv-cglow)"/>
    <path d="M118 40 C 158 24, 196 50, 232 32 C 258 20, 274 34, 296 26"
      fill="none" stroke="${SKY}" stroke-opacity=".22" stroke-width="1.4"
      stroke-dasharray="5 4"/>
    <g fill="none" stroke="${SKY}" stroke-opacity=".5" stroke-width="1.7"
       stroke-linecap="round">
      <path d="M124 52 V172 M296 52 V172"/>
      <path d="M124 78 H296 M124 122 H296 M124 166 H296"/>
    </g>
    ${I.box(142, 66)} ${I.box(170, 66)} ${I.box(226, 66)} ${I.box(282, 66)}
    ${I.box(142, 110)} ${I.box(170, 110)} ${I.box(198, 110)} ${I.box(254, 110)}
    ${I.box(282, 110)}
    ${I.box(226, 110, 9, CORAL, .95, "4 3")}
    ${I.box(142, 154)} ${I.box(198, 154)} ${I.box(226, 154)} ${I.box(254, 154)}
    ${I.box(282, 154)}
    ${I.person(56, 112)}
    ${I.doc(88, 112, SKY, .7)}
  </svg>`,

  /* Technology & AI: the systems, the data, the dashboard people actually use */
  systems: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" role="img">
    ${artFrame("sy", '<stop offset="0" stop-color="#16315A"/><stop offset=".5" stop-color="#0B1D3A"/><stop offset="1" stop-color="#071531"/>')}
    <ellipse cx="160" cy="96" rx="136" ry="94" fill="url(#sy-glow)" opacity=".5"/>
    <circle cx="272" cy="150" r="30" fill="url(#sy-cglow)"/>
    ${I.link("M64 54 C 96 60, 100 78, 110 86", SKY, .42)}
    ${I.link("M64 150 C 96 142, 100 112, 110 102", SKY, .42)}
    ${I.link("M210 86 C 226 78, 236 62, 258 56", SKY, .42)}
    ${I.linkAccent("M210 102 C 226 112, 240 134, 262 146", "sy")}
    ${I.database(50, 56)}
    <g fill="none" stroke="${SKY}" stroke-opacity=".8" stroke-width="1.6">
      <rect x="30" y="134" width="42" height="32" rx="6"/>
      <path d="M38 146 h16 M38 154 h26" stroke-opacity=".45"/>
    </g>
    ${I.screen(160, 92, 96, 62)}
    <g stroke="${SKY}" stroke-opacity=".55" stroke-width="1.5" stroke-linecap="round">
      <path d="M128 104 V92 M142 104 V80 M156 104 V86 M170 104 V72"/>
    </g>
    <path d="M128 78 L142 68 L156 74 L170 60 L186 66" fill="none" stroke="${CORAL}"
      stroke-opacity=".9" stroke-width="1.6" stroke-linecap="round"
      stroke-linejoin="round"/>
    <path d="M184 104 V78" stroke="${SKY}" stroke-opacity=".35" stroke-width="1.5"
      stroke-linecap="round"/>
    ${I.person(272, 56)}
    ${I.spark(272, 152)}
  </svg>`,

  /* Customer Service: the queue on one side, one person and one clear view
     on the other */
  threads: `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" role="img">
    ${artFrame("th", '<stop offset="0" stop-color="#071531"/><stop offset=".55" stop-color="#0B1D3A"/><stop offset="1" stop-color="#16315A"/>')}
    <ellipse cx="140" cy="100" rx="140" ry="96" fill="url(#th-glow)" opacity=".45"/>
    <circle cx="38" cy="100" r="30" fill="url(#th-cglow)"/>
    ${I.person(32, 44)}
    ${I.person(32, 100, CORAL, .95)}
    ${I.person(32, 156)}
    ${I.bubble(86, 42)}
    ${I.bubble(86, 100, 34, 24, CORAL, .95)}
    ${I.bubble(86, 158)}
    ${I.link("M108 42 C 140 44, 146 88, 170 96", SKY, .4)}
    ${I.link("M108 100 C 140 100, 148 98, 170 100", SKY, .4)}
    ${I.link("M108 158 C 140 156, 146 112, 170 104", SKY, .4)}
    ${I.screen(244, 76, 112, 60)}
    <g stroke="${SKY}" stroke-opacity=".55" stroke-width="1.5" stroke-linecap="round">
      <path d="M204 62 h64 M204 76 h76 M204 90 h48"/>
    </g>
    ${I.agent(244, 160)}
  </svg>`
};

/* ------------------------------------------------------- the advisory page */
/* show: false hides any card or section. Leave the line out and it shows */
const visible = x => x && x.show !== false;

/* a photograph if the card has one, the brand drawing if it does not,
   the plain placeholder if it has neither */
function advPicture(block){
  if(block.image){
    return `<img src="${block.image}" alt="${esc(block.title)}" loading="lazy"
      data-art="${block.art || ""}" onerror="advPictureFailed(this)">`;
  }
  return ART[block.art] ||
    `<div class="shot-ph"><b>${esc(block.title)}</b><span>Image</span></div>`;
}
/* if the photograph is missing or misnamed, fall back rather than break */
function advPictureFailed(img){
  img.parentNode.innerHTML = ART[img.getAttribute("data-art")] ||
    `<div class="shot-ph"><b>${esc(img.alt)}</b><span>Image</span></div>`;
}

function advToggle(label){
  return `<button class="more" aria-expanded="false">
    <span class="pm" aria-hidden="true"></span>${esc(label)}</button>`;
}

function renderAdvisory(){
  const A = SITE.advisory;
  const cols = n => `grid-template-columns:repeat(${Math.max(1, n)},minmax(0,1fr))`;
  document.title = "Advisory | " + SITE.brand.mark;
  document.body.insertAdjacentHTML("beforeend", navHTML());

  /* the navy opening band */
  document.body.insertAdjacentHTML("beforeend", `
  <section class="hero centred bg-navy"><div class="w">
    ${A.eyebrow ? `<div class="eyebrow">${esc(A.eyebrow)}</div>` : ""}
    <h1>${esc(A.heading)} ${A.headingAccent
      ? `<span class="accent">${esc(A.headingAccent)}</span>` : ""}</h1>
    <div class="rule"></div>
    <p>${esc(A.body)}</p>
  </div></section>`);

  /* the service cards */
  const areas = (A.areas || []).filter(visible);
  if(A.areasShow !== false && areas.length){
    document.body.insertAdjacentHTML("beforeend", `
    <section class="block" id="services"><div class="w">
      ${A.areasEyebrow ? `<div class="eyebrow">${esc(A.areasEyebrow)}</div>` : ""}
      ${A.areasHeading ? `<h2>${esc(A.areasHeading)}</h2>` : ""}
      ${A.areasIntro ? `<p class="lede">${esc(A.areasIntro)}</p>` : ""}
      <div class="scards" style="${cols(Math.min(A.areaColumns || 2, areas.length))}">
        ${areas.map(s => `
          <div class="scard" data-open="0">
            <div class="thumb">${advPicture(s)}</div>
            <div class="in">
              <h3>${esc(s.title)}</h3>
              ${s.line ? `<p class="sline">${esc(s.line)}</p>` : ""}
              ${advToggle(A.moreLabel || "What this covers")}
              <div class="panel"><div><div class="scard-body">
                ${s.challenge ? `${A.challengeLabel
                  ? `<div class="sub">${esc(A.challengeLabel)}</div>` : ""}
                  <p>${esc(s.challenge)}</p>` : ""}
                ${s.solutions && s.solutions.length ? `${A.solutionsLabel
                  ? `<div class="sub">${esc(A.solutionsLabel)}</div>` : ""}
                  <ul class="slist">${s.solutions.map(x =>
                    `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
              </div></div></div>
            </div>
          </div>`).join("")}
      </div>
    </div></section>`);
  }

  /* the case studies */
  const cases = (A.cases || []).filter(visible);
  if(A.casesShow !== false && cases.length){
    document.body.insertAdjacentHTML("beforeend", `
    <section class="block light" id="cases"><div class="w">
      ${A.casesEyebrow ? `<div class="eyebrow">${esc(A.casesEyebrow)}</div>` : ""}
      ${A.casesHeading ? `<h2>${esc(A.casesHeading)}</h2>` : ""}
      <div class="cases" style="${cols(Math.min(A.caseColumns || 3, cases.length))}">
        ${cases.map(c => {
          const figs = (c.figs || []).filter(visible);
          const head = figs[0], rest = figs.slice(1);
          return `
          <article class="ccard" data-open="0">
            <div class="thumb">${advPicture(c)}</div>
            <div class="cin">
              ${head ? `<div class="hfig">
                <b class="${head.figure === "TBC" ? "tbc" : ""}">${esc(head.figure)}</b>
                <span>${esc(head.label)}</span></div>` : ""}
              <h3>${esc(c.title)}</h3>
              ${c.line ? `<p class="cline">${esc(c.line)}</p>` : ""}
              ${advToggle(A.caseMoreLabel || "The full story")}
              <div class="panel"><div><div class="ccard-body">
                ${c.body ? `<p>${esc(c.body)}</p>` : ""}
                ${rest.length ? `<div class="figs">${rest.map(f =>
                  `<div><b class="${f.figure === "TBC" ? "tbc" : ""}">${esc(f.figure)}</b>
                   <span>${esc(f.label)}</span></div>`).join("")}</div>` : ""}
                ${c.work && c.work.length ? `${A.workLabel
                  ? `<div class="sub">${esc(A.workLabel)}</div>` : ""}
                  <ul class="slist">${c.work.map(x =>
                    `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
              </div></div></div>
            </div>
          </article>`; }).join("")}
      </div>
    </div></section>`);
  }

  /* the closing band */
  if(A.closeShow !== false && A.close){
    document.body.insertAdjacentHTML("beforeend", `
    <section class="endcta"><div class="w">
      <h3>${esc(A.close.heading)}</h3>
      ${A.close.body ? `<p>${esc(A.close.body)}</p>` : ""}
      ${A.close.cta
        ? `<a class="btn" href="contact.html">${esc(A.close.cta)} ${arrow}</a>` : ""}
    </div></section>`);
  }

  document.body.insertAdjacentHTML("beforeend", footHTML());

  /* open and close the cards */
  document.querySelectorAll(".more").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest("[data-open]");
      const open = card.getAttribute("data-open") === "1";
      card.setAttribute("data-open", open ? "0" : "1");
      btn.setAttribute("aria-expanded", String(!open));
    });
  });
}



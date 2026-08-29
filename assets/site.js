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
      ${appHeading(a, "problemHeading", "What it solves")}
      ${colsHTML(a.problem)}
    </div>
  </div></section>

  <section class="block off"><div class="w">
   ${appEyebrow(a, "solutionEyebrow", "The solution")}
    <div class="split">
      <h2>${esc(a.strap)}</h2>
      ${colsHTML(a.solution)}
    </div>
    ${a.gallery && a.gallery.length ? `<div class="gallery">
      ${a.gallery.map(g => `<figure><img src="${g}" alt="${esc(a.name)}" loading="lazy"></figure>`).join("")}
    </div>` : ""}
  </div></section>

  <section class="block"><div class="w">
   ${appEyebrow(a, "featuresEyebrow", "Key features")}
    ${appHeading(a, "featuresHeading", "What it does")}
    <ul class="feats">${a.features.map(f => `<li>${esc(f)}</li>`).join("")}</ul>
  </div></section>

  ${a.howItWorks ? `<section class="block light"><div class="w">
   ${appEyebrow(a, "howEyebrow", "How it works")}
    <div class="split">
      ${appHeading(a, "howHeading", "Under the bonnet")}
      ${colsHTML([a.howItWorks])}
    </div>
  </div></section>` : ""}

  <section class="endcta"><div class="w">
   ${appHeading(a, "endHeading", "See it running.", "h3")}
    <a class="btn" href="${a.launch}" target="_blank" rel="noopener">
      ${esc(a.launchLabel || "Launch prototype")} ${arrow}</a>
  </div></section>`);

  document.body.insertAdjacentHTML("beforeend", footHTML());
}

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
   PASTE 1 of 3  ->  assets/content.js

   A.  Add the Advisory link to the nav list near the top of the file, so it
       reads:

           nav: [
             { label: "Apps",     href: "index.html#apps" },
             { label: "Advisory", href: "advisory.html" },
             { label: "About",    href: "index.html#about" }
           ],

   B.  Paste everything below this comment into content.js, immediately after
       the closing  },  of the  thanks:  block and before  appLabels:  .
       Keep the final comma.
   ========================================================================== */

  advisory: {

  eyebrow: "Advisory",
  heading: "Building the operational foundations",
  headingAccent: "for growth.",
  body: "Helping scaling consumer businesses make their operations simpler, sharper and ready for the stage that comes next.",

  /* ---- the six service cards ---- */
  areasShow: true,
  areasEyebrow: "Where we help",
  areasHeading: "Six places where growth usually starts to bite.",
  areasIntro: "Open any card to see the shape of the problem and the work that answers it.",
  areaColumns: 2,
  moreLabel: "What this covers",
  challengeLabel: "The challenge",
  solutionsLabel: "The work",

  areas: [
    {
      show: true,
      title: "Process & Structure",
      line: "When growth outpaces the way the business operates.",
      art: "flow",
      /* image: "assets/img/adv-process.jpg",   <- add to replace the drawing */
      challenge: "Nobody designs a business to run this way. Processes accrete, one sensible decision at a time, until the shape of the operation reflects its history rather than its size. Ownership blurs at the edges, administration quietly expands to fill the day, and the answer to most questions turns out to live in one person's head. The structure that carried the last stage is usually the thing standing in the way of the next one.",
      solutions: [
        "End-to-end process mapping and redesign",
        "Operating model and team structure",
        "Roles, responsibilities and ownership",
        "SOPs and operational documentation",
        "Operational KPIs and performance management",
        "Building and developing operations teams"
      ]
    },
    {
      show: true,
      title: "Supply & Sourcing",
      line: "A supply chain designed for the business you are becoming.",
      art: "network",
      challenge: "A supplier base assembled in the early days is chosen for availability and goodwill, which are the right criteria at the time and the wrong ones later. Terms go untested, capacity is planned against demand that has already been overtaken, and a single supplier quietly becomes a single point of failure. Supply risk is rarely invisible. It is just rarely looked at until the week it costs something.",
      solutions: [
        "Network design and supplier mapping",
        "Strategic supplier selection and onboarding",
        "Negotiations and commercial optimisation",
        "Secondary sourcing and supply resilience",
        "Supplier performance management",
        "Capacity and supply risk planning",
        "Expansion across DTC, retail, wholesale and marketplaces"
      ]
    },
    {
      show: true,
      title: "Inventory & Demand Planning",
      line: "The right stock, in the right place, at the right time.",
      art: "levels",
      challenge: "Stock is the most expensive opinion a business holds. Too little costs the sale and the customer behind it. Too much locks up the cash needed to grow. Without a forecast worth trusting, buying becomes reactive, safety stock becomes superstition, and lead times are discovered rather than planned for. Across several locations and channels, the spreadsheet that held it together becomes the risk.",
      solutions: [
        "Demand forecasting",
        "Inventory planning and replenishment",
        "Safety stock and reorder point modelling",
        "Purchase planning",
        "Inventory health and working capital",
        "Multi-location and multi-channel planning",
        "Planning for new products and markets"
      ]
    },
    {
      show: true,
      title: "3PL & Fulfilment",
      line: "Fulfilment that works across every channel.",
      art: "routes",
      challenge: "A 3PL chosen to ship parcels to consumers is rarely the partner that can also hit a retailer's delivery window or handle a marketplace's labelling rules. Service slips before anyone can prove it, surcharges appear faster than they can be explained, and warehouse performance stays hard to see from the outside. Moving provider is usually the right call and always the one that feels too risky to make.",
      solutions: [
        "Requirements definition and RFI/RFP management",
        "3PL sourcing, scorecards and evaluation",
        "Commercial and service-level negotiations",
        "Warehouse and fulfilment process design",
        "DTC, retail and marketplace fulfilment",
        "Implementation and 3PL migration",
        "Logistics cost and performance analysis"
      ]
    },
    {
      show: true,
      title: "Technology, Automation & AI",
      line: "Making technology work for the operation.",
      art: "systems",
      challenge: "Where systems do not talk to each other, people become the integration. Information is retyped between platforms, a weekly report takes an afternoon, and ERP data is accurate enough to be relied on and wrong often enough to be dangerous. The data almost always exists. It just does not reach the people who need it, and the software already paid for is doing a fraction of what it was bought to do.",
      solutions: [
        "ERP and WMS optimisation",
        "Systems and data-flow mapping",
        "Systems integration",
        "Operational dashboards and reporting",
        "Workflow automation",
        "AI-enabled processes",
        "Custom operational tools and apps"
      ]
    },
    {
      show: true,
      title: "Customer Service",
      line: "Customer service that scales with the business.",
      art: "threads",
      challenge: "Most customer service problems are operational problems wearing a different hat. Agents investigate by hand because order and stock information sits behind a system they cannot open. Routine queries absorb the capacity the difficult ones need, escalations are handled from memory, and a recurring fault is felt across the team for weeks before anyone can put a number on it.",
      solutions: [
        "Customer journey and service process mapping",
        "Service workflows and escalation processes",
        "Systems and data integration",
        "Automated notifications and workflows",
        "AI-assisted customer service",
        "Customer insight and reporting",
        "Feeding customer feedback back into operations"
      ]
    }
  ],

  /* ---- the case studies ---- */
  casesShow: true,
  casesEyebrow: "Case studies",
  casesHeading: "What this has looked like in practice.",
  caseColumns: 3,
  caseMoreLabel: "The full story",
  workLabel: "The work",

  cases: [
    {
      show: true,
      title: "Retail, from a standing start to half the business",
      line: "Building the operational infrastructure behind a DTC brand's move onto shelves",
      art: "routes",
      figs: [
        { figure: "50%", label: "of the business from retail within 18 months" },
        { figure: "TBC", label: "retail accounts supplied" },
        { figure: "TBC", label: "reduction in cost per unit shipped" }
      ],
      body: "Retail asks a DTC operation to do things it has never had to do. Orders arrive by EDI rather than by website, delivery windows are measured in hours, and a missed one is charged for. Two growing consumer brands took on retail accounts at speed, and the operation behind them had to be built while existing DTC demand and a full launch calendar carried on untouched.",
      work: [
        "Established EDI and retail order processing from scratch",
        "Worked directly with retailer supply chain teams to meet their compliance requirements",
        "Built delivery and fulfilment processes against retailer service windows",
        "Reviewed COGS and margin by account to test which listings were worth taking",
        "Negotiated Incoterms and shipping arrangements",
        "Rerouted shipping lanes to take cost out of the landed price",
        "Held forecasting and supply together through major retail launches"
      ]
    },
    {
      show: true,
      title: "A supply chain rebuilt ahead of the demand",
      line: "Replacing a reactive supplier base before growth exposed it",
      art: "network",
      figs: [
        { figure: "TBC", label: "reduction in unit cost through renegotiation" },
        { figure: "TBC", label: "fall in stockouts across the range" },
        { figure: "TBC", label: "growth in volume supported without supply failure" }
      ],
      body: "The business had suppliers. It did not have a supply chain. Agreements were informal, costs had never been tested against the market, and there was no forecast to buy against, so stockouts arrived on their own schedule. Each one landed at the worst possible moment, which is to say the moment demand was growing fastest.",
      work: [
        "Put strategic relationships and formal agreements in place with core suppliers",
        "Renegotiated costs and commercial terms across the supplier base",
        "Introduced secondary suppliers to add capacity and remove single points of failure",
        "Selected and implemented a new 3PL",
        "Built forecasting and inventory planning from nothing",
        "Recruited and built the operations and customer service teams",
        "Managed supply and capacity risk through a period of rapid demand growth"
      ]
    },
    {
      show: true,
      title: "One connected view of an operation that had none",
      line: "Rebuilding the data layer so the business could finally see itself",
      art: "systems",
      figs: [
        { figure: "TBC", label: "hours a month of manual reporting removed" },
        { figure: "TBC", label: "systems brought into one connected view" },
        { figure: "TBC", label: "of freight spend reconciled automatically" }
      ],
      body: "Business Central held the data and nobody quite trusted it. Reporting was assembled by hand, forecasting did not exist as a capability, and a question as ordinary as what is in stock had to be routed through one person to get a reliable answer. The cost of that is not the reporting time. It is every decision made slightly late.",
      work: [
        "Cleaned and restructured Business Central data and the processes feeding it",
        "Built additional functionality inside the ERP rather than around it",
        "Connected Business Central to BigQuery as a reporting layer",
        "Improved the connections between Business Central, HubSpot and Jira",
        "Built HubSpot workflows and automations",
        "Created operational dashboards the wider team could use unaided",
        "Built a forecasting and purchasing application",
        "Built a logistics tool tracking freight costs, invoices and surcharges"
      ]
    }
  ],

  /* ---- the closing band ---- */
  closeShow: true,
  close: {
    heading: "Scaling does not have to mean adding complexity.",
    body: "The right processes, systems, suppliers and infrastructure create capacity for growth rather than overhead.",
    cta: "Let's talk"
  }
  },



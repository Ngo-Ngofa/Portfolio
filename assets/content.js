/* ============================================================================
   CSC site content
   ----------------------------------------------------------------------------
   Everything written on the site lives in this one file. Nothing else needs
   editing to change wording or to add an app.

   TO ADD A NEW APP
   1. Copy any block inside APPS below and paste it at the end of the list.
   2. Change the id to something short with hyphens, no spaces. This becomes
      the web address, for example  app.html?a=hr-onboarding
   3. Fill in the wording.
   4. Put a screenshot in  assets/img/  and point image at it.
   5. Save. The homepage card and the app page both appear automatically.

   Every field marked OPTIONAL can be deleted and that section simply will
   not appear on the page.
   ========================================================================= */

const SITE = {

  brand: {
    /* The initials in the wordmark */
    mark: "CSC",
    /* The full name. The last word drops onto a second line by itself */
    name: "Cosmos Systems Consulting",
    email: "ngongofa@gmail.com",
    location: "London",
    /* The button at the top right of every page. It opens the contact page */
    navCta: "Contact",
    /* The thin line just above the footer */
    strapline: "Transformation. Automation. Scale."
  },

  /* The links along the top. The Contact button is separate, see brand.navCta */
  nav: [
    { label: "Apps",  href: "index.html#apps" },
    { label: "About", href: "index.html#about" }
  ],

  /* Hero layout. One of: "carousel", "split", "centred" */
  heroStyle: "centred",

  /* Only used when heroStyle is "centred".
     One of: "grid", "navy", "panel", "plain" */
  heroBackground: "navy",

  hero: {
    heading: "Making space",
    headingAccent: "for scale.",
    body: "Building systems from fragmented data, giving teams the visibility they need to act fast and make informed decisions.",
    cta: "Explore the apps"
  },

  intro: {
    heading: "Understands the problem. Builds the solution.",
    body: [
      "Businesses lose time when data is spread across systems or lacks visibility for teams, when processes rely on manual work or existing systems are not quite up to scratch.",
      "We identify the gaps and build the solutions to connect the data and streamline processes, freeing up time for the work that matters."
    ]
  },

  /* The four pillars shown as a strip on the homepage */
  pillars: [
    { title: "Streamline", body: "Simplify processes and remove unnecessary steps." },
    { title: "Automate",   body: "Take repetitive manual work off the team." },
    { title: "Connect",    body: "Bring separate systems into a single view." },
    { title: "Analyse",    body: "Turn the result into numbers people can act on." }
  ],

  /* The heading shown above the three app cards */
  appsHeading: "Apps",

  howItWorks: {
    heading: "Find the problem. Build the solution.",
    body: [
      "Whether the challenge is fragmented data, a manual process, poor visibility or a gap in existing software, the solution is built around what the business actually needs."
    ],
    steps: [
      "Connect the data",
      "Simplify the process",
      "Automate where it makes sense",
      "Build what does not already exist"
    ]
  },

  about: {
    heading: "Practical technology, grounded in how businesses actually work.",
    body: [
      "CSC combines operational expertise with hands-on technical capability to build tools that solve real business problems.",
      "The focus is on making complex information easier to understand, reducing unnecessary manual work and creating systems that people can actually use.",
      "The result is not technology for its own sake. It is a clearer view of what is happening, a better way of working and more useful information for the people making decisions."
    ]
  },

  contact: {
    /* The section at the bottom of the homepage */
    heading: "Have a problem worth solving?",
    body: "Tell us what is not working and we will come back to you.",
    cta: "Get in touch",

    /* The contact page itself */
    pageHeading: "Get in touch",
    pageBody: "A few lines is enough to start.",

    /* The contact form. This is already working. Put an email address here and
       the form sends to it, through a service called FormSubmit. No account, no
       cost, no limit. The first time someone uses the form you get one email
       asking you to confirm the address. Click the link in it once and that is
       the setup finished.

       You can also paste a Google Form embed address here instead, and that
       form gets shown in the page rather than this one. See DEPLOY.md.        */
    form: "ad961f46642453439cecbcd9c583d0f0",

    /* The subject line of the emails you receive */
    emailSubject: "New enquiry from the CSC site",

    /* The field labels on the form. Company name is the only optional field */
    labels: {
      name:    "Name",
      email:   "Email",
      company: "Company name",
      message: "How can we help?"
    },

    /* The send button */
    sendLabel: "Send"
  },

  /* The page people land on after sending the form */
  thanks: {
    heading: "Message sent",
    body: "Thanks for getting in touch. You will hear back shortly.",
    cta: "Back to the apps"
  },

  /* ==========================================================================
     APPS
     ======================================================================= */
  apps: [

    {
      id: "customer-insights",
      name: "Customer Insights",
      cardLine: "Turning scattered customer data into valuable insights",
      launch: "https://ngo-ngofa.github.io/Customer-Insights/",
      launchLabel: "Launch prototype",
      image: "assets/img/customer-insights.png",

      headline: "See what customers are telling you before the problem gets bigger.",
      summary: "Customer feedback is spread across support tickets, emails, reviews, calls and other channels. Customer Insights brings those sources together, identifies emerging themes and puts business impact behind them.",
      strap: "Identify issues. Understand why they matter. Act earlier.",

      problem: [
        "Customer feedback arrives in six or seven different places at once. Support tickets, phone calls, emails, public reviews, reviews on a brand's own site. Each has its own inbox, its own dashboard and its own version of the truth.",
        "The cost of that only becomes obvious when something goes wrong. A genuine product fault shows up as a small rise in three separate systems that nobody is watching together, and by the time it is undeniable it has been shipping for weeks."
      ],

      solution: [
        "Every source is brought into one shape without needing to match customers between them. The connection is the theme, not the person, which removes the hardest problem in this space entirely.",
        "Each theme is measured against its own history rather than a single threshold, so seasonal patterns do not trigger false alarms. Anything running outside its usual range is flagged, priced, and traced back to the product and production batch it concentrates in."
      ],

      features: [
        "Six feedback sources brought into a single view",
        "Themes tracked against their own historical range, so a busy week does not set off every alarm",
        "Cost of each issue built from replacement, refund and lost customer value",
        "Alerts show how many independent sources corroborate them",
        "Twelve month alert history, so recurring problems become visible",
        "Every figure opens to show the calculation behind it"
      ],

      /* OPTIONAL: delete this block if an app has no results yet */
      results: [
        { figure: "4 weeks", label: "earlier detection of a product fault" },
        { figure: "£36k",    label: "value of catching one batch early" },
        { figure: "6",       label: "sources brought together" }
      ],

      /* OPTIONAL: extra screenshots shown lower down the app page */
      gallery: ["assets/img/customer-insights-2.png"],

      /* OPTIONAL */
      howItWorks: "Feeds from CRM, helpdesk, call transcripts, email and review platforms are normalised into a single record type. Every source is put through the same fixed set of questions, and it is the answers that make them comparable. Detection compares each theme's share of all feedback against its own thirteen week baseline."
    },

    {
      id: "forecasting-purchasing",
      name: "Forecasting & Purchasing",
      cardLine: "A clearer view of inventory, purchasing and spend.",
      launch: "https://ngo-ngofa.github.io/Purchasing-App/",
      launchLabel: "Launch prototype",
      image: "assets/img/forecasting-purchasing.png",

      headline: "Know what you have, what you need and what is coming next.",
      summary: "A single operational view of stock, purchasing, transfers, incoming orders and spend. Designed to turn complex inventory data into clear purchasing decisions while giving operations and finance a shared view of the numbers.",
      strap: "See the stock position. Understand the forecast. Control the spend.",

      problem: [
        "Stock information usually lives in spreadsheets that one person maintains and everybody else has to ask about. The models themselves can be perfectly sound. The problem is access.",
        "Finance cannot see what has been spent, what is still to come, or how any of it is tracking against budget without going through the same person every time. Ordering decisions take a day because the answer has to be assembled by hand."
      ],

      solution: [
        "One view the whole team can open. It reads live data and answers the questions people were queuing up to ask: what needs ordering, what should move between locations, what is already inbound, what has been spent and how that is tracking against budget.",
        "Reorder recommendations account for lead time, usage and safety stock, and differ by location where the stock structure differs. Every number opens into an audit panel showing exactly how it was calculated, so nobody has to take it on trust."
      ],

      features: [
        "4,000 SKUs across two locations in a single view",
        "Reorder status on every item, with the calculation visible on the row",
        "Spend against budget in real time, with drill down to the invoice lines",
        "Kit allocation showing what can actually be built once shared components are claimed",
        "Period aware profit and loss, with a revenue cascade so figures stay meaningful before invoicing catches up",
        "Daily audit snapshots"
      ],

      results: [
        { figure: "75%",    label: "less time spent on purchasing decisions" },
        { figure: "£300k",  label: "of stock brought into one view" },
        { figure: "Still running", label: "in daily use, owned by the business" }
      ],

      gallery: ["assets/img/forecasting-purchasing-2.png"],

      howItWorks: "Live ERP data through BigQuery, combined with weekly uploads and reference tables held by the business itself. Built on tools the team already had, so it runs with no servers, no licences and no ongoing cost, and can be maintained without technical help."
    },

    {
      id: "shipping-logistics",
      name: "Shipping & Logistics",
      cardLine: "Understanding the full costs of shipping.",
      launch: "https://ngo-ngofa.github.io/Shipping-Analyser/demo.html",
      launchLabel: "Launch prototype",
      image: "assets/img/shipping-logistics.png",

      headline: "Know what shipping really costs.",
      summary: "Carrier invoices, negotiated rates, surcharges and customer orders rarely line up neatly. Shipping & Logistics brings them together to identify anomalies, track freight costs and understand the true economics of shipping.",
      strap: "Spot overcharges. Understand costs. Protect margin.",

      problem: [
        "Checking carrier invoices properly means modelling every negotiated rate and applying it to every order. That is why it usually does not happen, and why overcharges get paid without anybody noticing.",
        "The larger cost is not the overcharges. It is that nobody can say what a lane actually costs, whether the charge made to the customer still makes sense, or how much margin is being given away in discounts and free shipping."
      ],

      solution: [
        "Invoices from multiple carriers are read and reconciled against the negotiated rate card line by line, with anything that does not match flagged for investigation.",
        "Freight cost is matched back to the sales order, so shipping margin becomes a number rather than a guess. Fuel surcharges are tracked as they move rather than at month end, and overdue invoices surface for credit control."
      ],

      features: [
        "Two carrier invoice formats parsed and reconciled automatically",
        "Every line checked against the negotiated rate card",
        "Anomalies and overcharges flagged as soon as the invoice lands",
        "Freight cost matched to sales orders for a true shipping margin",
        "Fuel surcharges tracked in real time",
        "Overdue invoices surfaced for credit control",
        "Discounts and free shipping made visible"
      ],

      results: [
        { figure: "2 hours", label: "monthly reconciliation, down from two weeks" },
        { figure: "£10k",  label: "of surcharges recovered in three months" },
        { figure: "Month end", label: "used by operations and finance" }
      ],

      gallery: ["assets/img/shipping-logistics-2.png", "assets/img/shipping-logistics-3.png"],

      howItWorks: "A nightly sync pulls accounting data from the ERP. Carrier invoices and rate cards are parsed in the browser, including two entirely different file formats and a three step country to zone lookup. The whole application is served from a single serverless deployment."
    }

  ],

};

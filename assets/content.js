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
    eyebrow: "What we do",
    heading: "Building solutions for business challenges.",
    body: [
      "Businesses lose time when data is spread across systems or lacks visibility for teams, when processes rely on manual work or existing systems are not quite up to scratch.",
      "We identify the gaps and build the solutions to connect the data and streamline processes, freeing up time for the work that matters."
    ]
  },

  /* The four pillars shown as a strip on the homepage */
  pillars: [
    { title: "Identify", body: "Uncover the gaps and inefficiencies holding the business back." },
    { title: "Connect",   body: "Bring disparate systems and information together." },
    { title: "Build",    body: "Automate and build solutions around the needs of the business." },
    { title: "Streamline",    body: "Eliminate friction and turn information into action." }
  ],

  /* The heading shown above the three app cards */
  appsHeading: "Apps",

  /* howItWorks: {
    eyebrow: "How it works",
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
  },*/

  about: {
    eyebrow: "About",
    heading: "Building beyond the obvious.",
    body: [
      "Curiosity drives the search for a better way. Imagination opens up the possibilities.",
      "The challenge is working out how to turn an idea into something that works and that people can actually use.",
      "That approach has shaped a career working inside growing businesses and often building what was needed from scratch.",
      "The result is not a tool for its own sake. It is a clearer view of what is happening, and a more efficient way of working."
    ]
  },

  contact: {
    /* The section at the bottom of the homepage */
    heading: "Need a better way to work?",
    body: "Tell us how we can help.",
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
/* The section labels used on every app page. Change one here and it changes
     on all three apps at once. Any app can override any of these in its own
     labels block, see the note inside the first app below */
  appLabels: {
    problemEyebrow:  "The problem",
    solutionEyebrow: "The solution",
    featuresEyebrow: "",
    featuresHeading: "Key Features",
    howEyebrow:      "",
    howHeading:      "",
    endHeading:      "See it running."
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

      problemHeading: "Multiple channels, no shared view.",
      solutionHeading: "Turn scattered feedback into a clear picture.",
      headline: "Turn scattered customer data into valuable insights.",
      summary: "Customer feedback is spread across support tickets, emails, reviews, calls and other channels. Customer Insights brings those sources together",
      

      problem: [
        "Customer feedback can be spread across several different places susch Support tickets, phone calls and public reviews. Each has its own inbox and only shows part of the picture. This makes patterns difficult to see and isssues hard to qunatify.",
        "A real product issue could stay hidden in the noise, while the focus is on things that may not matter. The cost of that only becomes obvious when something goes wrong."
      ],

      solution: [
        "Feedback from multiple sources is brought into one view and grouped by theme, making it easier to see what is happening across the business rather than in isolated streams. Each theme is measured against its own history, so normal fluctuations do not automatically become alarms.",
        "When something moves outside its usual range, the issue is surfaced and its impact quantified, including the cost of resolving it and the potential cost of losing the customers affected."
      ],

      features: [
        "Bring feedback from multiple channels together in one place.",
        "Group feedback to see what customers keep talking about.",
        "Identify emerging customer and product issues before they get buried.",
        "Compare themes against a rolling 13-week history to separate real shifts from seasonal noise.",
        "Show the potential cost of losing customers, based on acquisition cost.",
        "Compare the cost of fixing an issue with the potential cost of leaving it unresolved."
      ],

      /* OPTIONAL: delete this block if an app has no results yet */
      results: [
        { figure: "£2000",    label: "saved on average each month from customers retained" },
        { figure: "11%", label: "increase in positive feedback" },
        { figure: "6",       label: "feedback channels brought into one view" }
        
        
      ],

      /* OPTIONAL: extra screenshots shown lower down the app page */
      gallery: ["assets/img/customer-insights-2.png","assets/img/customer-insights-3.png"],

      /* OPTIONAL */
      /*howItWorks: "Feeds from CRM, helpdesk, call transcripts, email and review platforms are normalised into a single record type. Every source is put through the same fixed set of questions, and it is the answers that make them comparable. Detection compares each theme's share of all feedback against its own thirteen week baseline."*/
    },

    {
      id: "forecasting-purchasing",
      name: "Forecasting & Purchasing",
      cardLine: "A clearer view of inventory, purchasing and spend.",
      launch: "https://ngo-ngofa.github.io/Purchasing-App/",
      launchLabel: "Launch prototype",
      image: "assets/img/forecasting-purchasing.png",

      problemHeading: "The answer lives in one person's spreadsheet.",
      solutionHeading: "See the stock position. Understand the forecast. Control the spend.",
      headline: "A clearer view of stock. A tighter grip on spend.",
      summary: "A single operational view of stock, purchasing, transfers, incoming orders and spend. Designed to turn complex inventory data into clear purchasing decisions while giving operations and finance a shared view of the numbers.",
   

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
        { figure: "75%",    label: "reduction in purchasing time" },
        { figure: "100%",  label: "of spend within or below budget" },
        { figure: "28%", label: "reduction in overstocks" }
      ],

      gallery: ["assets/img/forecasting-purchasing-2.png"],

      /*howItWorks: "Live ERP data through BigQuery, combined with weekly uploads and reference tables held by the business itself. Built on tools the team already had, so it runs with no servers, no licences and no ongoing cost, and can be maintained without technical help."*/
    },

    {
      id: "shipping-logistics",
      name: "Shipping & Logistics",
      cardLine: "Understanding the full and true costs of shipping.",
      launch: "https://ngo-ngofa.github.io/Shipping-Analyser/demo.html",
      launchLabel: "Launch prototype",
      image: "assets/img/shipping-logistics.png",

      problemHeading: "Nobody checks the invoice.",
      solutionHeading: "Spot overcharges. Understand costs. Protect margin.",
      headline: "Know what shipping really costs.",
      summary: "Carrier invoices, negotiated rates, surcharges and customer orders rarely line up neatly. Shipping & Logistics brings them together to identify anomalies, track freight costs and understand the true economics of shipping.",
     

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

      /*howItWorks: "A nightly sync pulls accounting data from the ERP. Carrier invoices and rate cards are parsed in the browser, including two entirely different file formats and a three step country to zone lookup. The whole application is served from a single serverless deployment."*/
    }

  ],

};

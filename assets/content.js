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
    email: "info@cosmossystems.com",
    location: "Ngo Ngofa",
    /* The button at the top right of every page. It opens the contact page */
    navCta: "Contact",
    /* The thin line just above the footer */
    strapline: "Transformation. Automation. Scale."
  },

  /* The links along the top. The Contact button is separate, see brand.navCta */
  nav: [
             { label: "Apps",     href: "index.html#apps" },
             { label: "Advisory", href: "advisory.html" },
             { label: "About",    href: "index.html#about" }
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
    howEyebrow:      "Systems",
    howHeading:      "The Underlying Infrastructure",
    endHeading:      "Demo"
  },

/* ========================================================================== */

  advisory: {

  eyebrow: "",
  heading: "Building the operational foundations",
  headingAccent: "for growth.",
  body: "Helping scaling businesses make their operations more efficient and ready for the stage for whatever comes next.",

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
  casesShow: false,
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
    cta: "Get in touch"
  }
  },

   
  /* ==========================================================================
     APPS
     ======================================================================= */
  apps: [

      {
      id: "shipping-logistics",
      name: "Shipping & Logistics",
      cardLine: "Understanding the full and true costs of shipping.",
      launch: "/shippinganalyser/",
      launchLabel: "Launch prototype",
      image: "assets/img/shipping-logistics.png",

      problemHeading: "Real costs are buried in the detail",
      solutionHeading: "Every invoice fully reconciled",
      headline: "See the true cost of every shipment.",
      summary: "Carrier invoices, negotiated rates, surcharges and customer orders rarely line up neatly. Shipping & Logistics brings them together to identify anomalies, track freight costs and understand the true economics of shipping.",
     

      problem: [
         "Carrier invoices vary in formats, combining contracted rates with fuel surcharges, brokerage and other additional charges. Reconciling these against sales orders and the relevant rate cards can be time consuming and inaccurate with significant volume.",
         "Freight costs were not always easy to attribute to the relevant sales order, making it harder to assess true order margin or determine whether shipping charges to customers reflected the actual cost."
      ],

      solution: [
         "Invoices from multiple carriers are brought into a single view and reconciled line by line against the negotiated rate cards. Charges that fall outside of agreed rates are flagged, with additional fees such as fuel, brokerage and documentation clearly identified for review.",
         "Freight costs are matched back to the relevant sales order, giving a true picture of shipping margin rather than an estimate. Fuel surcharges are tracked as they change, while overdue invoices surface for credit control and discounts or free shipping are visible in the overall cost."
      ],

      features: [
        "Multi carrier invoice ingestion and reconciliation",
        "Anomalies and overcharges flagged as soon as the invoice lands",
        "Freight cost matched to sales orders for a true shipping margin",
        "Fuel surcharges tracked in real time",
        "Overdue invoices surfaced for credit control",
        "Discounts and free shipping made visible and controlled"
      ],

      results: [
        { figure: "2 hours", label: "monthly reconciliation, instead of 2 weeks" },
        { figure: "£1000s",  label: "of surcharges caught and reclaimed" },
        { figure: "3", label: "loss making lanes identified and rectified" }
      ],

      gallery: ["assets/img/shipping-logistics-2.png", "assets/img/shipping-logistics-3.png"],

      howItWorks: ["Carrier invoice data is parsed line by line so each charge can be identified, categorised and checked against both the carrier's invoice total and the negotiated rate card. Accounting data is handled separately: sales invoice lines and vendor ledger entries are pulled from the ERP through BigQuery, published to the system nightly, and joined with the carrier data so freight costs can be tied back to the relevant sales and accounting records.",
                   "A Cloudflare Worker handles the ingestion and storage layer and exposes the resulting data through a small API. Corrections are stored separately as an overlay, so missing references can be added without changing the original invoice data. The dashboard is a self-contained HTML application that reads from the API, leaving the source data, processing and presentation as separate layers."
         
      ]
   },

    {
      id: "customer-insights",
      name: "Customer Insights",
      cardLine: "Turning scattered customer data into valuable insights",
      launch: "/customerinsights/",
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
      howItWorks: ["API integrations pull data from sources such as Zendesk and Trustpilot twice daily, with webhooks providing event-driven updates where supported. A managed integration platform handles the standard systems, with custom integrations built for those it does not support. A modelling layer then applies a fixed extraction schema across every source, turning calls, support tickets, emails and reviews into a common structure with one record for each issue raised.",
                   "The resulting records are enriched with theme, sentiment, product and severity, with the business-specific logic held separately in theme and product reference tables. These define the classification, ownership, severity and cost rules, alongside product and sales data. The presentation layer reads from this processed dataset rather than the source systems, keeping the integrations, processing and business rules independent of one another."
                   ]
    },

    {
      id: "forecasting-purchasing",
      name: "Forecasting & Purchasing",
      cardLine: "A clearer view of inventory, purchasing and spend.",
      launch: "/purchasing/",
      launchLabel: "Launch prototype",
      image: "assets/img/forecasting-purchasing.png",

      problemHeading: "When spreadsheets start to pile up",
      solutionHeading: "A single view of stock and spend",
      headline: "A clearer view of stock. A tighter grip on spend.",
      summary: "A single operational view of stock, purchasing, transfers, incoming orders and spend. Designed to turn complex inventory data into clear purchasing decisions while giving operations and finance a shared view of the numbers.",
   

      problem: [
        "Stock models in spreadsheets work fine, but rely on interpretation and, ultimately, manual maintenance from the owner. As the business grows across locations and SKUs, keeping the model current becomes a regular task.",
        "The wider team lacks the visibilty of the current position, slow-moving and excess stock can also be harder to spot, making it more difficult to prioritise where cash is tied up. And time is spent explaining purchasing decisions and creating fresh reports."
      ],

      solution: [
        "Live stock and sales data are brought together to show what’s needed at each location. Purchase orders, receipts and budget data make it easy to see what’s being spent and where it sits against plan.",
        "The system calculates reorder recommendations using lead time, usage and safety stock, with different requirements by location. The result is a live view of stock and spend that the whole team can work from."
      ],

      features: [
        "Live stock positions across all locations in a single view",
        "Reorder status on every item based on leadtime, planned usage and safety stock",
        "Spend against budget in real time, with drill down to the invoice lines",
        "Kit allocation showing what can actually be built once shared components are claimed",
        "Period aware profit and loss, where figures stay meaningful before invoicing catches up",
        "Purchase order and inbound tracking"
      ],

      results: [
        { figure: "75%",    label: "reduction in purchasing time" },
        { figure: "100%",  label: "of spend within or below budget" },
        { figure: "28%", label: "reduction in overstocks" }
      ],

      gallery: ["assets/img/forecasting-purchasing-2.png","assets/img/forecasting-purchasing-3.png"],

      howItWorks: ["The data layer is built around BigQuery and Google Sheets. Nightly BigQuery views expose ERP data across tables such item ledger, sales lines, posted shipments, and a further set of supporting tables. Connected Sheets makes these views available in the working model, alongside weekly and monthly uploads for the sales pipeline and other workbooks. Static data like Bills of materials, vendor details, budget targets are maintained as reference tables within the Sheet, which acts as the persistent store.",
       "Apps Script provides both the application backend and its single deployment endpoint. Each refresh consolidates the source and reference data, applies the reorder model at item and location level. Revenue is calculated through a cascade from invoiced lines to open sales orders and then list price, keeping recent periods usable before invoicing is complete. The resulting dataset is returned as a single JSON payload for the front end, including the dashboard views and underlying drill-downs."
                   ]
    }
   

  ],

};

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
    howEyebrow:      "Systems",
    howHeading:      "The Underlying Infastructure",
    endHeading:      "Demo"
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

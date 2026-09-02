# Editing the site and pushing it live

Everything written on the site lives in one file: **`assets/content.js`**.
You never need to touch the HTML.

---

## Getting it live

See [DEPLOY.md](DEPLOY.md). It covers GitHub Pages, connecting the contact form, and
pointing a domain at it later.

---

## Changing the name

The name appears in one place only. Everything else picks it up automatically,
including the page titles.

```
  brand: {
    mark: "CSC",
    name: "Cosmos Systems Consulting",
```

`mark` is the big initials. `name` sits beside them, and the last word drops onto a
second line by itself. Three other lines live in the same block: `navCta` is the button
at the top right, `strapline` is the thin line just above the footer, and `location` is
the line beside the email in the footer, currently the owner's name.

---

## Changing the small section labels

The little coral labels above each section on the homepage are the `eyebrow` lines.

```
  intro: {
    eyebrow: "What we do",

  about: {
    eyebrow: "About",
```

Write anything you like in them. They are plain text and nothing else depends on them.

Each one is optional. Delete the `eyebrow` line and that label goes back to being built
from `brand.mark` on its own, so it reads "What CSC does" or "About CSC" and follows the
name if the name ever changes. Keep the line and it says exactly what you typed, which
means renaming the business will not update it for you.

---

## Changing wording, the easy way

No software to install. Everything happens in the browser.

1. Go to your repository on github.com.
2. Click into the **assets** folder, then click **content.js**.
3. Click the **pencil icon** at the top right of the file.
4. Edit the text between the quote marks. Only ever change what is inside `" "`.
5. Scroll to the bottom, type a short note in the box such as "updated hero copy", and
   click **Commit changes**.

The site rebuilds itself. Give it a minute, then refresh the page. That is the whole loop.

### The one rule

Change what is inside the quote marks. Leave the quote marks, commas and brackets alone.

```
    heading: "Making space",
              ^^^^^^^^^^^^  change this
             ^            ^ leave these
```

If a piece of text needs an apostrophe, that is fine: `"what it does not do"`.
If it needs a double quote inside it, put a backslash first: `"she said \"yes\""`.

### If the site goes blank

You have almost certainly deleted a quote mark, comma or bracket by accident. Go to the
repository, click **content.js**, then click **History** at the top right. Find the version
before your change and restore it. Nothing is ever lost.

---

## Changing the landing section

Two lines near the top of `content.js` control it.

```
  heroStyle: "centred",
  heroBackground: "navy",
```

`heroStyle` can be:

- `"centred"` for headline and copy in the middle of the page
- `"carousel"` for centred copy with a rotating screenshot of each app below it
- `"split"` for copy on the left and the rotating screenshot on the right

`heroBackground` only applies to `"centred"` and can be:

- `"navy"` for a full navy band
- `"panel"` for a navy block sitting inside the white page
- `"grid"` for a white page with a faint grid
- `"plain"` for white and nothing else

The headline is split in two so the second half can be coral:

```
  hero: {
    heading: "Making space",
    headingAccent: "for scale.",
```

---

## Turning the How it works section off

The homepage section called How it works is optional. It is currently switched off by
being commented out in `content.js`, wrapped in `/*` and `*/`:

```
  /* howItWorks: {
    eyebrow: "How it works",
    ...
  },*/
```

Delete the `/*` at the start and the `*/` at the end and the section comes back, steps
and all. Wrap it again and it disappears. Nothing else needs changing either way.

---

## The contact section and the contact page

There is one contact route, not two. The coral **Contact** button at the top right of
every page opens `contact.html`, and the section at the bottom of the homepage has a
button that goes to the same place.

The form on that page is built and working. It is sent through FormSubmit, and the
destination is one line:

```
    form: "ad961f46642453439cecbcd9c583d0f0",
```

That is the FormSubmit code that stands in for the email address, so the address itself is
not sitting in the page source. Three things can go in that line:

- the FormSubmit code, as now
- an email address, which works the same way but is visible to anyone reading the source
- a Google Form embed address starting with `http`, which shows that form in the page
  instead of this one

If the address is ever changed to a fresh one, the first message sent triggers one
confirmation email. Click the link in it once and that is the setup finished. Until then
the sender lands on a FormSubmit page rather than your own thank you page. DEPLOY.md
covers the rest.

The four field labels are editable too:

```
    labels: {
      name:    "Name",
      email:   "Email",
      company: "Company name",
      message: "How can we help?"
    },
```

Company name is the only optional field. The rest of the wording is in the same block:
`pageHeading` and `pageBody` for the contact page, `heading`, `body` and `cta` for the
section on the homepage, and `sendLabel` and `emailSubject` for the form.

The page people land on after sending is `thanks.html`, and its wording is the `thanks`
block just below `contact`.

---

## The labels on the app pages

Every app page is built from the same set of sections, and the small labels and headings
on them are shared. They live in the `appLabels` block, just above the apps themselves.
Change one here and it changes on all the apps at once.

```
  appLabels: {
    problemEyebrow:  "The problem",
    solutionEyebrow: "The solution",
    featuresEyebrow: "",
    featuresHeading: "Key Features",
    howEyebrow:      "Systems",
    howHeading:      "The Underlying Infastructure",
    endHeading:      "Demo"
  },
```

Set any of them to `""` and that label disappears from the page completely, which is what
`featuresEyebrow` is doing now.

A single app can override any of these for itself by adding its own `labels` block inside
that app, using the same names. The order is: the app's own label wins, then `appLabels`,
then a built in default.

---

## Adding a new app

1. Open `assets/content.js`.
2. Find the `apps: [` list.
3. Copy one whole app block, from its opening `{` down to its closing `},`, and paste it
   at the end of the list, just before the closing `]`.
4. Change these:
   - `id` to something short with hyphens and no spaces, for example `hr-onboarding`.
     This becomes the address, `app.html?a=hr-onboarding`
   - `name` and `cardLine` for the homepage card
   - `launch` for the address of the live demo, and `launchLabel` for the wording on the
     button. That button appears twice, at the top of the app page and at the bottom
   - `image` to point at your screenshot
   - `headline` for the line under the title, `problemHeading` and `solutionHeading` for
     the two big headings
   - `problem`, `solution`, `features`
5. Upload a screenshot to `assets/img/` using **Add file**, then **Upload files**.
6. Commit.

The homepage card and the full app page both appear on their own.

Three blocks are optional. Delete any of them and that section simply will not show:

- `results` is the three figures in the navy strip
- `gallery` is the extra screenshots, shown underneath the solution section
- `howItWorks` is the section explaining how it is built

`problemHeading` and `solutionHeading` are optional in the same way: leave one out and the
copy runs without a heading above it.

One field is carried in the file but not shown anywhere on the site: `summary`. It is a
longer version of `cardLine` kept for reference. Nothing breaks if it is left as it is.

---

## Where each piece of text appears

| In `content.js` | On the site |
|---|---|
| `brand` | The wordmark, the Contact button, the strapline, the name and email in the footer |
| `nav` | The links along the top |
| `heroStyle`, `heroBackground` | The shape and background of the landing section |
| `hero` | The big headline, the coral second half, and the paragraph under it |
| `appsHeading` | The heading above the app cards |
| `intro` | The What we do section, label included, see `intro.eyebrow` |
| `pillars` | Identify, Connect, Build, Streamline |
| `howItWorks` | The optional How it works section, currently commented out |
| `about` | The About section, label included, see `about.eyebrow` |
| `contact` | The bottom section, and the contact page |
| `thanks` | The page people land on after sending the form |
| `appLabels` | The shared labels and headings on every app page |
| `apps` | Each card, and everything on each app page |

---

## Screenshots

Live in `assets/img/`. Around 1600px wide is right.

Each app uses `image` for its homepage card and the large shot at the top of its page,
and `gallery` for any extra shots lower down. If an `image` is missing or the file name is
wrong, the app page shows a plain placeholder rather than a broken picture.

---

## Working locally instead

If you would rather not edit in the browser:

```
git clone https://github.com/YOUR-NAME/YOUR-REPO.git
cd YOUR-REPO
# open assets/content.js in any text editor, make changes, then:
git add .
git commit -m "updated copy"
git push
```

Open `index.html` in a browser to preview before pushing. No build step, no dependencies.
One thing to know: opened straight off the disk, the contact form cannot send you back to
`thanks.html`, because the redirect needs a real web address. Everything else previews
normally.

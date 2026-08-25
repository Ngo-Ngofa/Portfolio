# Editing the site and pushing it live

Everything written on the site lives in one file: **`assets/content.js`**.
You never need to touch the HTML.

---

## Getting it live

See [DEPLOY.md](DEPLOY.md). It covers GitHub Pages, connecting the Google Form to the
contact page, and pointing a domain at it later.

---

## Changing the name

The name appears in one place only. Everything else picks it up automatically,
including the page titles and the two section labels that read "What CSC does" and
"About CSC".

```
  brand: {
    mark: "CSC",
    name: "Cosmos Systems Consulting",
```

`mark` is the big initials. `name` sits beside them, and the last word drops onto a
second line by itself. Two other lines live in the same block: `navCta` is the button
at the top right, and `strapline` is the thin line just above the footer.

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
    heading: "Turning complexity",
              ^^^^^^^^^^^^^^^^^^^  change this
             ^                   ^ leave these
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

---

## The contact section and the contact page

There is one contact route, not two. The coral **Contact** button at the top right of
every page opens `contact.html`, and the section at the bottom of the homepage has a
button that goes to the same place.

The form on that page is built and working. It is pointed at your email address:

```
    form: "ngongofa@gmail.com",
```

The first time someone uses it you get one email asking you to confirm the address. Click
the link once and that is the setup finished. DEPLOY.md explains where the messages go on
their way to you, and how to keep your address out of the page source.

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
section on the homepage, and `sendLabel`, `sentMessage` and `emailSubject` for the form.

---

## Adding a new app

1. Open `assets/content.js`.
2. Find the `apps: [` list.
3. Copy one whole app block, from its opening `{` down to its closing `},`, and paste it
   at the end of the list, just before the closing `]`.
4. Change these:
   - `id` to something short with hyphens and no spaces, for example `hr-onboarding`.
     This becomes the address, `app.html?a=hr-onboarding`
   - `name`, `cardLine`, `launch`, `headline`, `summary`, `strap`
   - `problem`, `solution`, `features`
   - `image` to point at your screenshot
5. Upload a screenshot to `assets/img/` using **Add file**, then **Upload files**.
6. Commit.

The homepage card and the full app page both appear on their own.

Two blocks are optional. Delete either one and that section simply will not show:

- `results` is the three figures in the navy strip
- `gallery` is the extra screenshots further down the page
- `howItWorks` is the final section

---

## Where each piece of text appears

| In `content.js` | On the site |
|---|---|
| `brand` | The wordmark, the Contact button, the strapline, the email and location in the footer |
| `nav` | The links along the top |
| `heroStyle`, `heroBackground` | The shape and background of the landing section |
| `hero` | The big headline and the paragraph under it |
| `appsHeading` | The heading above the app cards |
| `intro` | The What CSC does section |
| `pillars` | Streamline, Automate, Connect, Analyse |
| `howItWorks` | Find the problem, and the four numbered steps |
| `about` | The About CSC section |
| `contact` | The bottom section, and the contact page |
| `apps` | Each card, and everything on each app page |

---

## Screenshots

Live in `assets/img/`. Around 1600px wide is right.

Each app uses `image` for its homepage card and the large shot at the top of its page,
and `gallery` for any extra shots lower down.

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

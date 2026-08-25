# CSC site

**To change wording or add an app, see [EDITING.md](EDITING.md).**

**To put it live, and to connect the contact form, see [DEPLOY.md](DEPLOY.md).**

Static site. No build step, no dependencies, no framework. Runs on GitHub Pages as it is.
The contact form is built in and already pointed at your address. It sends through
FormSubmit, which needs no account and no server.

## Adding a new app

Everything written on the site lives in **`assets/content.js`**. That is the only file
you need to touch.

1. Open `assets/content.js` and find the `apps: [` list.
2. Copy an entire app block, from `{` to `},`, and paste it at the end of the list.
3. Change `id` to something short with hyphens and no spaces, for example `hr-onboarding`.
   This becomes the web address: `app.html?a=hr-onboarding`
4. Fill in the wording.
5. Save a screenshot into `assets/img/` and point `image` at it.

The homepage card and the full app page both appear automatically. Nothing else to edit.

Any field marked OPTIONAL in the file can be deleted and that section simply will not
appear on the page. `results` and `howItWorks` are both optional, so a brand new app with
no numbers yet still looks complete.

## Changing wording

Also `assets/content.js`. Headlines, body text, the four pillars, the About section,
contact details and the navigation are all in there, near the top.

## Files

```
index.html            homepage
app.html              the template every app page is rendered from
contact.html          the contact page and its form
assets/content.js     ALL wording and app data. This is the file you edit
assets/site.js        renders the pages. No content in here
assets/styles.css     the brand: colours, type, spacing
assets/img/           screenshots
.nojekyll             tells GitHub Pages to serve the files as they are
```

## Screenshots

Each app has a main screenshot (`image`) used on its homepage card and at the top of its
page, plus an optional `gallery` list of extra shots shown further down. All live in
`assets/img/`. Around 1600px wide works well.

## Fonts

Inter throughout, from Google Fonts. Headings use weight 800, body text 400 and 500.

## Changing the name

`brand.mark` and `brand.name` in `assets/content.js`. Nothing else refers to the name
directly, so changing those two lines renames the whole site.

## Contact

`contact.form` in `assets/content.js`. An email address sends through FormSubmit. A
Google Form embed address shows that form instead. See DEPLOY.md.

## The landing section

`heroStyle` and `heroBackground` in `assets/content.js`. See EDITING.md for the options.

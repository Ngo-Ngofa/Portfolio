# Putting the site live, and the contact form

The site is a plain folder of files. No framework, no build step, no server needed. It
runs on GitHub Pages exactly as it is, which is where the app demos already live, so
there is no reason to move host.

The contact form is already working and already pointed at your address. It needs no
server, so it runs on GitHub Pages like everything else.

---

## The contact form

**It is already built and already pointed at your address.** Nothing to set up before you
publish.

It sends through a service called FormSubmit. No account, no cost, no limit on messages.
The address it sends to is one line in `assets/content.js`:

```
    form: "ngongofa@gmail.com",
```

### The one thing you have to do, once

The first time anyone submits the form, FormSubmit emails you asking to confirm the
address. Click the link in that email and it is done, permanently. Every submission after
that arrives in your inbox.

So once the site is live, fill the form in yourself, send it, and click the link. Two
minutes, and it also tells you the form works.

### Where the messages actually go

The form does not send email by itself. A web page cannot. It hands the message to
FormSubmit, a company that runs a form relay service, and FormSubmit emails it to you.

So the path is: visitor's browser, FormSubmit's servers, your inbox.

That means FormSubmit sees every message. That is normal for this kind of service, and
the same is true of Formspree, Netlify Forms and every other one, but it is worth knowing
rather than assuming the message goes straight to you. They are not storing a database of
your enquiries for you to log into, they pass the message on and that is the end of it.

If you would rather nothing passed through a third party at all, use a Google Form
instead, described below. The messages then sit in your own Google account.

### An optional tidy-up

Your email address is written into the page, so anything crawling the web for addresses
can pick it up. That is the usual cause of spam.

FormSubmit will give you a random code to use instead, so the page no longer contains
your address:

1. After you have confirmed the address, go to formsubmit.co.
2. Put your email address into the box on their homepage and submit it.
3. They show you a random code, something like `a1b2c3d4e5f6`.
4. Put that code into `content.js` where your email address currently is:

```
    form: "a1b2c3d4e5f6",
```

The form works exactly as before. The messages still come to you. Your address is simply
no longer sitting in the page for a crawler to find.

This is optional. Skip it and the only cost is more spam over time.

### Using a Google Form instead

If you would rather the messages went into your own Google account rather than through
FormSubmit, build a form at forms.google.com, click **Send**, then choose the **< >** tab.
It shows you a block of code. Inside it is a web address ending in `?embedded=true`. Copy
that address and paste it into the same line:

```
    form: "https://docs.google.com/forms/d/e/1FAIpQLSd.../viewform?embedded=true",
```

The page then shows your Google Form inside the site instead of the built-in one, and the
answers collect in your own Google Drive with nothing passing through anyone else.

The trade is that it looks like a Google Form sitting in your page rather than part of
your site. The built-in form looks better. The Google Form keeps the data closer to you.
Either is a reasonable choice.

---

## Getting the site live

### GitHub Pages

1. Create a repository and upload the contents of the folder, so `index.html` sits at the
   top level rather than inside a folder.
2. **Settings**, then **Pages**, then Source **Deploy from a branch**, branch **main**,
   folder **/ (root)**. Save.
3. Wait a minute or two. The URL appears at the top of that same screen.

If you want the address to be `ngo-ngofa.github.io` with nothing after it, name the
repository exactly `ngo-ngofa.github.io`. GitHub serves that one at the root.

To update it later, edit `assets/content.js` in the GitHub web editor and commit. The
site rebuilds itself.

---

## A custom domain

Worth doing once the name is settled. Around ten pounds a year, and GitHub Pages supports
it on the free plan.

1. Buy the domain. Namecheap, Cloudflare and Gandi are all fine.
2. In the repository: **Settings**, then **Pages**, then **Custom domain**. Type it in.
3. GitHub shows you the DNS records to enter at the registrar. Copy them across.
4. Tick **Enforce HTTPS** once it appears. The certificate is issued automatically.

A matching email address is the other half of this. Most registrars sell a mailbox for a
few pounds a month, and Google Workspace or Fastmail both do it properly. Then
`hello@yourdomain` replaces the gmail address, which does more for how the site reads
than any amount of design.

---

## Files

```
index.html            the homepage
app.html              the template every app page is rendered from
contact.html          the contact page and its form
assets/content.js     ALL wording and app data. The only file you edit
assets/site.js        renders the pages
assets/styles.css     colours, type, spacing
assets/img/           screenshots
.nojekyll             tells GitHub Pages to serve the files as they are
```

Sabrina Savenkova — Harpist Website
A single-page, responsive personal website built with plain HTML, CSS, and
JavaScript, ready to host on GitHub Pages.
Files
`index.html` — page structure and content
`style.css` — all visual styling (colors, type, layout, responsiveness)
`script.js` — navigation behaviour, the shared link config, the FAQ
accordion, and the contact form
`images/` — placeholder photos and social icons (replace these)
`audio/`, `video/` — placeholder folders for your own media
What's new in this revision
Hero image gaps (actual fix) — removed the forced CSS `aspect-ratio`
box and `object-fit` on the hero image entirely. It previously created a
separate 4:3 "frame" that the browser had to reconcile the photo against
— any tiny mismatch showed up as blank bands (in the page background
color, so they were easy to mistake for layout gaps rather than
letterboxing). The image now just displays at its own natural size, full
width. Since your photo is already exactly 4:3, it renders at that exact
ratio, edge-to-edge, directly under the nav bar — no gaps, no cropping.
Previously
Hero image (mobile fix) — fixed a bug where a mobile CSS rule was
unintentionally re-adding side padding to the hero section.
Weddings & Events — mobile order — Image → Text → View my full
repertoire → Audio → Enquire Now → Frequently Asked Questions, with
tighter spacing between Text/Repertoire and between Enquire/FAQ/Audio.
Mobile header — the hamburger menu button sits in the same row as
"Sabrina Savenkova | Harpist", aligned to the right of the title.
Weddings & Events — desktop — the "Frequently Asked Questions" link
sits directly below "View my full repertoire" in the left-hand column.
Repertoire link — the arrow (→) has been removed; only the download
icon appears next to "View my full repertoire" now.
Color customization guide — see below.
What to replace before going live
1. Images
Every placeholder photo lives in `images/` and is clearly marked in
`index.html` with a `REPLACE ME` comment just above the `<img>` tag:
`hero-placeholder.JPG` — Home section hero photo. Displays at its natural
size, full width. Use a landscape 4:3 photo (e.g. 1600×1200px, or any
multiple of that ratio) so it renders at exactly that ratio.
`about-placeholder.jpg` — About section portrait (portrait 4:3, i.e.
3:4 width:height — e.g. 900×1200px)
`weddings-placeholder.jpg` — Weddings & Events photo (portrait 4:3)
`teaching-placeholder.jpg` — Teaching photo (portrait 4:3)
Keep your replacement photos in the ratio noted above for each one so they
display cleanly without cropping or letterboxing. Just save your own photo
with the same filename (or update the `src`).
2. Video (Listen section)
Open `index.html`, find the `<iframe>` inside `#listen`, and replace
`REPLACE_WITH_VIDEO_ID` with your own YouTube/Vimeo embed — or swap the
`<iframe>` for a `<video>` tag pointing at a file in `video/` (an example is
commented directly above it).
3. Audio (Weddings & Events section)
Replace `audio/wedding-sample-placeholder.mp3` with your own track, and
update the piece name / artist / arranger text next to it. This block
(`.weddings__audio` in `index.html`) spans the full section width on
desktop, and sits fifth on mobile (after the repertoire link, before
Enquire Now).
4. Links — all set in one place
Open `script.js` and edit the `LINKS` object at the top of the file:
```js
const LINKS = {
  recordings: "...",
  gallery: "...",
  biography: "...",
  repertoire: "...",   // your downloadable PDF
  youtube: "...",
  instagram: "...",
  facebook: "...",
};
```
Each URL automatically applies everywhere it's used — for example,
`biography` updates both the "Biography" link in the More menu and the
"Read more about me" link in the About section.
Repertoire is treated as a downloadable PDF: script.js adds a `download`
attribute to every link pointing at it (in the More menu and the "View my
full repertoire" link), and a small download icon appears next to both (no
arrow, just the icon). Browsers only honour `download` for files on the same
site, so for a real download prompt, add your PDF into this repository (e.g.
in a `documents/` folder) and point `repertoire` at that path rather than an
external URL.
5. Contact form (Formspree)
Create a form at formspree.io and copy your
endpoint URL.
In `index.html`, find `<form id="contactForm" ... action="https://formspree.io/f/YOUR_FORM_ID">`
and replace `YOUR_FORM_ID` with your real endpoint.
The form submits asynchronously (no page reload), validates the required
fields, and shows a success or error message beneath the Send button.
6. FAQ content
The five placeholder questions in the Questions section (`#questions` in
`index.html`) can be edited freely — just change the text inside each
`.accordion__trigger` and its matching `.accordion__panel`.
There's also a short italic note below the accordion:
```html
<p class="faq-note"><em>Don't see your question here? Get in touch and I'll be happy to help.</em></p>
```
Edit the text freely, or delete the whole `<p>` if you don't want it.
Section layouts at a glance
Weddings & Events
Desktop: Title (full width) → Summary text + Enquire button + Repertoire
link + FAQ link (left column) + Image (right column) → Audio (full width)
Mobile: Title → Image → Text → Repertoire link → Audio → Enquire Now →
FAQ link
About / Teaching
Desktop: Image + text side by side (unchanged)
Mobile: text first, image below
Changing the background and text colors
All colors are defined once, at the very top of `style.css`, as CSS custom
properties (variables) inside `:root`:
```css
:root {
  --ink: #14161a;          /* main page background (near-black) */
  --surface: #1d2024;      /* slightly lighter panels — audio player, form fields, More menu */
  --ivory: #ede8df;        /* main text color (headings, body copy) */
  --stone: #9c978c;        /* muted/secondary text (captions, labels, the FAQ note) */
  --brass: #c9a24b;        /* accent color — links, underlines, icons, borders */
  --brass-deep: #8b6f2e;   /* darker accent — button hover state */
}
```
To change a color, edit the hex value on the right of the colon — every
element using that variable updates automatically, site-wide. For example,
to switch from the charcoal/brass theme to a warmer cream/burgundy theme:
```css
:root {
  --ink: #faf7f2;
  --surface: #f0e9df;
  --ivory: #2a2420;
  --stone: #6b6158;
  --brass: #7a2e2e;
  --brass-deep: #5a1f1f;
}
```
You don't need to touch anything else in the file — every background,
heading, link, button, and border pulls its color from these six variables.
Publishing to GitHub Pages
Push these files to a GitHub repository.
In the repository settings, open Pages, and set the source to your
main branch (root folder).
Your site will be published at `https://<your-username>.github.io/<repo-name>/`.

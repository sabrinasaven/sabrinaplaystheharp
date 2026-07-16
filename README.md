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
Mobile nav bar — the mobile menu now fully folds away when closed (no
leftover padding/border strip beneath the nav bar), and expands to fit the
remaining screen height when open, scrolling internally if the "More"
submenu makes the list taller than the screen. Selecting a "More" item now
also folds the menu back up.
Weddings & Events — desktop layout — restructured into three rows:
the title spans the full width at the top, then the summary text sits on
the left with the photo on the right, and the audio player spans the full
width underneath both.
Weddings & Events — mobile order — Title → Summary → Audio → Image.
Teaching — mobile order — Summary, then Image (matching how About
already behaves on mobile).
What to replace before going live
1. Images
Every placeholder photo lives in `images/` and is clearly marked in
`index.html` with a `REPLACE ME` comment just above the `<img>` tag:
`hero-placeholder.jpg` — Home section, full-width hero photo (landscape;
this one is not part of the 4:3 portrait set)
`about-placeholder.jpg` — About section portrait (portrait 4:3 ratio)
`weddings-placeholder.jpg` — Weddings & Events photo (portrait 4:3)
`teaching-placeholder.jpg` — Teaching photo (portrait 4:3)
Keep your replacement photos in the same 4:3 portrait ratio (e.g. 900×1200px)
so they display cleanly without cropping or letterboxing. Just save your own
photo with the same filename (or update the `src`).
2. Video (Listen section)
Open `index.html`, find the `<iframe>` inside `#listen`, and replace
`REPLACE_WITH_VIDEO_ID` with your own YouTube/Vimeo embed — or swap the
`<iframe>` for a `<video>` tag pointing at a file in `video/` (an example is
commented directly above it).
3. Audio (Weddings & Events section)
Replace `audio/wedding-sample-placeholder.mp3` with your own track, and
update the piece name / artist / arranger text next to it. This block
(`.weddings__full` in `index.html`) spans the full section width on desktop
and moves to third position (after the Summary, before the Image) on mobile.
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
full repertoire" link), and a small download icon appears next to both.
Browsers only honour `download` for files on the same site, so for a real
download prompt, add your PDF into this repository (e.g. in a `documents/`
folder) and point `repertoire` at that path rather than an external URL.
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
Desktop: Title (full width) → Summary (left) + Image (right) → Audio (full width)
Mobile: Title → Summary → Audio → Image
About / Teaching
Desktop: Image + text side by side (unchanged)
Mobile: text first, image below
Publishing to GitHub Pages
Push these files to a GitHub repository.
In the repository settings, open Pages, and set the source to your
main branch (root folder).
Your site will be published at `https://<your-username>.github.io/<repo-name>/`.

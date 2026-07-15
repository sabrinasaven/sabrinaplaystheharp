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
- Mobile text fit — the top "Sabrina Savenkova | Harpist" bar no longer
wraps onto two lines on narrow phones. That wrap was also the cause of the
nav bar seeming to disappear on mobile: the taller, wrapped header pushed
the sticky nav underneath it. Both are fixed together.
- Hero image — there's now a deliberate gap between the nav bar and your
hero photo, so the top of the image is never sitting flush under the nav.
- Images — About, Weddings, and Teaching photos now display at their true
size and ratio with no cropping, on desktop and mobile alike. Placeholder
images have been regenerated at portrait 4:3 (3:4 width:height).
- About section (mobile only) — the image now appears below the text,
unlike Weddings/Teaching where the image still appears above the text on
mobile.
- More menu — Recordings, Gallery, Biography, and Repertoire are all
present; Repertoire now has a small download icon next to it (see below).
- Audio player (Weddings) — now spans the full width of the section
instead of being squeezed into the text column, and sits below both the
image and the text. It also resizes properly on mobile.
- "Listen to more" — now sits beside the video caption on desktop, and
drops below it on mobile.
- FAQ section — a short italic note now appears beneath the accordion.
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
update the piece name / artist / arranger text next to it.

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

Publishing to GitHub Pages
Push these files to a GitHub repository.
In the repository settings, open Pages, and set the source to your
main branch (root folder).
Your site will be published at `https://<your-username>.github.io/<repo-name>/`.

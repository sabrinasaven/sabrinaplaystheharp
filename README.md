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

What to replace before going live
1. Images
Every placeholder photo lives in `images/` and is clearly marked in
`index.html` with a `REPLACE ME` comment just above the `<img>` tag:
`hero-placeholder.jpg` — Home section, full-width hero photo
`about-placeholder.jpg` — About section portrait
`weddings-placeholder.jpg` — Weddings & Events photo
`teaching-placeholder.jpg` — Teaching photo
Just save your own photo with the same filename (or update the `src`).
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
  repertoire: "...",
  youtube: "...",
  instagram: "...",
  facebook: "...",
};
```
Each URL automatically applies everywhere it's used — for example,
`biography` updates both the "Biography" link in the More menu and the
"Read more about me" link in the About section.
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
Publishing to GitHub Pages
Push these files to a GitHub repository.
In the repository settings, open Pages, and set the source to your
main branch (root folder).
Your site will be published at `https://<your-username>.github.io/<repo-name>/`.

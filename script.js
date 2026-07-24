/* =========================================================================
   SABRINA SAVENKOVA — HARPIST
   script.js
   ========================================================================= */

/* -------------------------------------------------------------------------
   1. SHARED LINKS
   Edit every URL below in ONE place. Any element in index.html with a
   matching data-link="..." attribute (nav "More" menu, in-page text links,
   and the social icons) will automatically be updated to point here.
   ------------------------------------------------------------------------- */
const LINKS = {
  // "More" menu pages — replace with real URLs (external site or another
  // GitHub Pages page in this same repository, e.g. "recordings.html")
  recordings: "https://example.com/recordings",   // used by More > Recordings and "Listen to more"
  gallery: "https://example.com/gallery",          // used by More > Gallery
  biography: "https://example.com/biography",      // used by More > Biography and "Read more about me"

  // Repertoire is a downloadable PDF — point this at the actual file, e.g.
  // "documents/repertoire.pdf" if you add the PDF to this repository.
  repertoire: "documents/Sabrina Savenkova | Repertoire.pdf",

  // Social media — replace with your real profile URLs
  youtube: "https://www.youtube.com/@your-channel",
  instagram: "https://www.instagram.com/your-profile",
  facebook: "https://www.facebook.com/your-page",
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.getAttribute("data-link");
  if (!LINKS[key]) return;

  el.setAttribute("href", LINKS[key]);

  if (key === "repertoire") {
    // Downloadable PDF — prompt a direct download rather than opening a tab.
    // Note: browsers only honour `download` for same-origin files, so this
    // works best once the PDF lives inside this repository.
    el.setAttribute("download", "");
  } else {
    // Every other "More" destination is treated as an external page.
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  }
});

/* -------------------------------------------------------------------------
   2. MOBILE NAV HAMBURGER
   ------------------------------------------------------------------------- */
const navHamburger = document.getElementById("navHamburger");
const navLinks = document.getElementById("navLinks");

navHamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navHamburger.setAttribute("aria-expanded", String(isOpen));
  navHamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

/* -------------------------------------------------------------------------
   3. "MORE" DROPDOWN MENU
   ------------------------------------------------------------------------- */
const moreBtn = document.getElementById("moreBtn");
const moreMenu = document.getElementById("moreMenu");

function closeMoreMenu() {
  moreMenu.classList.remove("is-open");
  moreBtn.setAttribute("aria-expanded", "false");
}

moreBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = moreMenu.classList.toggle("is-open");
  moreBtn.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (e) => {
  if (!moreMenu.contains(e.target) && e.target !== moreBtn) {
    closeMoreMenu();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMoreMenu();
});

// Selecting a More-menu item also folds the mobile nav back up
moreMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    closeMoreMenu();
    navLinks.classList.remove("is-open");
    navHamburger.setAttribute("aria-expanded", "false");
  })
);

/* -------------------------------------------------------------------------
   4. ACTIVE NAV-LINK HIGHLIGHTING
   Watches every primary section, plus SOCIALS and QUESTIONS (which map to
   the "More" button since they have no nav-bar link of their own).
   ------------------------------------------------------------------------- */
const navLinkEls = Array.from(document.querySelectorAll('.nav__links a[data-section]'));

// Sections that map directly to a nav link (id -> matching link)
const directSections = ["home", "about", "listen", "weddings", "teaching", "contact"];
// Sections that should highlight the "More" button instead
const moreSections = ["socials", "questions"];

function setActive(sectionId) {
  navLinkEls.forEach((a) => a.classList.remove("is-active"));
  moreBtn.classList.remove("is-active");

  if (moreSections.includes(sectionId)) {
    moreBtn.classList.add("is-active");
    return;
  }
  const match = navLinkEls.find((a) => a.dataset.section === sectionId);
  if (match) match.classList.add("is-active");
}

const observedSections = [...directSections, ...moreSections]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    // Pick the entry that is most visible right now
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActive(visible.target.id);
  },
  {
    // Trigger once a section occupies the vertical centre of the viewport,
    // accounting for the sticky header + nav.
    rootMargin: "-40% 0px -50% 0px",
    threshold: [0, 0.25, 0.5, 0.75, 1],
  }
);

observedSections.forEach((section) => sectionObserver.observe(section));

// Close the mobile menu after a nav link is clicked
navLinkEls.forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navHamburger.setAttribute("aria-expanded", "false");
  })
);

/* -------------------------------------------------------------------------
   5. "ENQUIRE NOW" BUTTON — scrolls to Contact, heading stays clear of
   the sticky nav thanks to the scroll-margin-top set in style.css.
   ------------------------------------------------------------------------- */
document.getElementById("enquireBtn").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

/* -------------------------------------------------------------------------
   6. FAQ ACCORDION
   ------------------------------------------------------------------------- */
document.querySelectorAll(".accordion__trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const panel = document.getElementById(trigger.getAttribute("aria-controls"));
    const isOpen = trigger.getAttribute("aria-expanded") === "true";

    trigger.setAttribute("aria-expanded", String(!isOpen));
    panel.style.maxHeight = isOpen ? null : `${panel.scrollHeight}px`;
  });
});

/* -------------------------------------------------------------------------
   7. CONTACT FORM — Formspree, async submission, validation, status message
   ------------------------------------------------------------------------- */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

function showFieldError(id, message) {
  const errorEl = document.getElementById(`${id}Error`);
  if (errorEl) errorEl.textContent = message;
}

function clearFieldErrors() {
  ["name", "email", "message"].forEach((id) => showFieldError(id, ""));
}

function validateForm(data) {
  clearFieldErrors();
  let isValid = true;

  if (!data.get("name")?.trim()) {
    showFieldError("name", "Please enter your name.");
    isValid = false;
  }

  const email = data.get("email")?.trim() || "";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    showFieldError("email", "Please enter your email address.");
    isValid = false;
  } else if (!emailPattern.test(email)) {
    showFieldError("email", "Please enter a valid email address.");
    isValid = false;
  }

  if (!data.get("message")?.trim()) {
    showFieldError("message", "Please enter a message.");
    isValid = false;
  }

  return isValid;
}

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  formStatus.textContent = "";
  formStatus.className = "form-status";

  if (!validateForm(formData)) {
    formStatus.textContent = "Please fix the highlighted fields and try again.";
    formStatus.classList.add("error");
    return;
  }

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending…";

  try {
    // NOTE: the endpoint URL itself is set on the <form action="..."> in
    // index.html — replace YOUR_FORM_ID there with your real Formspree ID.
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      formStatus.textContent = "Thank you — your message has been sent! I'll be in touch soon.";
      formStatus.classList.add("success");
      contactForm.reset();
    } else {
      throw new Error("Formspree responded with an error.");
    }
  } catch (err) {
    formStatus.textContent = "Something went wrong sending your message. Please try again, or email me directly.";
    formStatus.classList.add("error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
  }
});

/* -------------------------------------------------------------------------
   8. FOOTER YEAR
   ------------------------------------------------------------------------- */
document.getElementById("year").textContent = new Date().getFullYear();

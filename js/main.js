(function () {
  "use strict";

  var CONFIG = window.SITE_CONFIG;
  var I18N = window.I18N;

  /* =======================================================  CONFIG  ======
     Elements marked data-config="email" show the contact address from
     config.js; on a link the mailto: is set as well.
     ---------------------------------------------------------------------- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-config="email"]'), function (el) {
    el.textContent = CONFIG.email;
    if (el.tagName === "A") { el.setAttribute("href", "mailto:" + CONFIG.email); }
  });

  /* =========================================================  I18N  ======
     All text lives in i18n.js, in both languages. The Arabic is also written
     into the markup, so the page is complete with JavaScript switched off;
     once scripting runs, the strings below take over.
     ---------------------------------------------------------------------- */
  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var altNodes = Array.prototype.slice.call(document.querySelectorAll("[data-alt-of]"));

  // Look up a key in one language and fill the {placeholders} from config.js.
  // A key missing from English falls back to Arabic.
  function t(lang, key) {
    var value = I18N[lang][key];
    if (value == null) { value = I18N.ar[key]; }
    if (value == null) { return null; }
    return value.replace(/\{(company|brand|email|year)\}/g, function (m, name) {
      var v = CONFIG[name];
      return typeof v === "object" ? v[lang] : String(v);
    });
  }

  function applyLang(lang) {
    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = t(lang, key);
      if (value == null) { return; }
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) { el.setAttribute(attr, value); }
      else if (el.hasAttribute("data-i18n-html")) { el.innerHTML = value; }
      else { el.textContent = value; }
    });

    // Each platform shows its name in the OTHER language underneath.
    var otherLang = lang === "en" ? "ar" : "en";
    altNodes.forEach(function (el) {
      var other = t(otherLang, el.getAttribute("data-alt-of"));
      if (other == null) { return; }
      // <bdi> isolates the foreign-script name and derives its direction from
      // its own content, so a trailing "." stays at the end of the Latin run
      // instead of jumping to the far margin. The paragraph itself keeps the
      // page direction, so the line still aligns to the page's reading edge.
      var bdi = document.createElement("bdi");
      bdi.textContent = other;
      bdi.setAttribute("lang", otherLang);
      el.textContent = "";
      el.appendChild(bdi);
    });

    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.title = t(lang, "title");

    Array.prototype.forEach.call(document.querySelectorAll("[data-setlang]"), function (b) {
      var on = b.getAttribute("data-setlang") === lang;
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    try { localStorage.setItem(CONFIG.storageKey, lang); } catch (e) { /* private mode */ }
  }

  function initialLang() {
    var fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "ar" || fromUrl === "en") { return fromUrl; }
    try {
      var saved = localStorage.getItem(CONFIG.storageKey);
      if (saved === "ar" || saved === "en") { return saved; }
    } catch (e) { /* private mode */ }
    return CONFIG.defaultLang;
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-setlang]"), function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-setlang")); });
  });

  applyLang(initialLang());

  /* ---- hero slideshow ----------------------------------------------------
     The timer is the active dot's fill animation (see style.css): when it
     ends, the next slide comes up. Pausing — by the button, by hovering, or
     by tabbing into the controls — only has to freeze that animation.
     With reduced motion the slideshow starts paused; the arrows still work.
     ---------------------------------------------------------------------- */
  var hero = document.getElementById("ecosystem");
  var slideBox = document.getElementById("heroSlides");
  var slides = Array.prototype.slice.call(hero.querySelectorAll(".slide"));
  var dotBox = document.getElementById("heroDots");
  var dots = Array.prototype.slice.call(dotBox.querySelectorAll(".hero__dot"));
  var pauseBtn = document.getElementById("heroPause");
  var currentSlide = 0;
  var paused = false;

  function isRtl() { return document.documentElement.getAttribute("dir") === "rtl"; }

  function go(i) {
    currentSlide = (i + slides.length) % slides.length;
    slides.forEach(function (s, n) { s.classList.toggle("is-active", n === currentSlide); });
    dots.forEach(function (d, n) {
      var on = n === currentSlide;
      d.classList.toggle("is-active", on);
      if (on) { d.setAttribute("aria-current", "true"); } else { d.removeAttribute("aria-current"); }
    });
  }

  function setPaused(p) {
    paused = p;
    hero.classList.toggle("is-paused", p);
    // swap the key too, so a later language switch keeps the right label
    var key = p ? "hero.play" : "hero.pause";
    pauseBtn.setAttribute("data-i18n", key);
    pauseBtn.setAttribute("aria-label", t(document.documentElement.lang, key));
    // announce slide changes only when the visitor is driving them
    slideBox.setAttribute("aria-live", p ? "polite" : "off");
  }

  slides.forEach(function (s, n) { s.setAttribute("aria-label", (n + 1) + " / " + slides.length); });
  dots.forEach(function (d, n) { d.addEventListener("click", function () { go(n); }); });
  document.getElementById("heroPrev").addEventListener("click", function () { go(currentSlide - 1); });
  document.getElementById("heroNext").addEventListener("click", function () { go(currentSlide + 1); });
  pauseBtn.addEventListener("click", function () { setPaused(!paused); });

  dotBox.addEventListener("animationend", function (e) {
    if (e.animationName === "hero-fill" && !paused) { go(currentSlide + 1); }
  });

  // arrow keys inside the controls follow the reading direction
  hero.querySelector(".hero__controls").addEventListener("keydown", function (e) {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") { return; }
    var forward = (e.key === "ArrowRight") !== isRtl();
    go(currentSlide + (forward ? 1 : -1));
    e.preventDefault();
  });

  // swipe on touch screens
  var touchX = null;
  slideBox.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  slideBox.addEventListener("touchend", function (e) {
    if (touchX === null) { return; }
    var dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) < 50) { return; }
    go(currentSlide + ((dx < 0) !== isRtl() ? 1 : -1));
  }, { passive: true });

  hero.querySelector(".hero__controls").hidden = false;
  go(0);
  setPaused(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  /* ---- sticky header hairline ------------------------------------------ */
  var top = document.getElementById("top");
  function onScrollTop() { top.classList.toggle("is-stuck", window.scrollY > 8); }
  onScrollTop();
  window.addEventListener("scroll", onScrollTop, { passive: true });

  /* ---- reveal on entry -------------------------------------------------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  function showAll() { reveals.forEach(function (el) { el.classList.add("is-visible"); }); }

  if (!("IntersectionObserver" in window)) {
    showAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    reveals.forEach(function (el) {
      // Anything already on screen is shown in the first painted frame rather
      // than waiting on an observer callback — the page has to read correctly
      // at rest, including in a screenshot or a preview thumbnail. Only what
      // starts below the fold is left for the observer to fade in.
      if (el.getBoundingClientRect().top < window.innerHeight) { el.classList.add("is-visible"); }
      else { io.observe(el); }
    });
  }

  /* ---- scroll spy: rail dots, nav underline, progress bar ---------------- */
  var ids = ["ecosystem", "platforms", "flow", "reach"];
  var sections = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
  var railLinks = document.querySelectorAll(".rail a");
  var navLinks = document.querySelectorAll(".nav a");
  var progress = document.getElementById("railProgress");
  var ticking = false;

  function mark(list, attr, id) {
    Array.prototype.forEach.call(list, function (a) {
      a.classList.toggle("is-active", a.getAttribute(attr) === id);
    });
  }

  function spy() {
    ticking = false;

    // the section whose top has most recently crossed the reading line
    var line = window.scrollY + window.innerHeight * 0.32;
    var current = sections[0];
    sections.forEach(function (s) { if (s.offsetTop <= line) { current = s; } });
    if (current) {
      mark(railLinks, "data-rail", current.id);
      mark(navLinks, "data-nav", current.id);
    }

    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.height = (scrollable > 0 ? Math.min(1, window.scrollY / scrollable) * 100 : 0) + "%";
  }

  function request() { if (!ticking) { ticking = true; requestAnimationFrame(spy); } }
  spy();
  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", request);
})();

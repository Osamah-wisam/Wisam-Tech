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

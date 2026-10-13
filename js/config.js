/* ============================================================================
   Site configuration — the company's own details, kept in one place.

   This plays the role of a .env file. The site is served as static files by
   GitHub Pages with no build step, so a real .env could never reach the
   browser; this file is loaded first and everything else reads from it.

   Anything here is public — it ships to every visitor. Never put secrets
   (API keys, passwords, tokens) in this file.

   Translation strings can use these values as placeholders:
     {company}  full company name, in the current language
     {brand}    short name shown in the header
     {email}    contact address
     {year}     copyright year
   ========================================================================== */
window.SITE_CONFIG = {
  company: { ar: "شركة وسام البيع التقني", en: "Wisam Tech Co." },
  brand:   { ar: "وسام البيع التقني",      en: "Wisam Tech Co." },

  email: "info@wisamtech.sa",
  year:  2026,

  defaultLang: "ar",            // "ar" or "en"
  storageKey:  "wisam_lang"     // localStorage key that remembers the visitor's choice
};

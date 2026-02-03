/* ===============================
   Easy & Light Recipes - Main JS
   Purpose: UX + Tracking (Safe)
================================ */

(function () {
  "use strict";

  /* ===============================
     1. CTA Click Tracking
     (Local only – no external tools)
  ================================ */
  const ctaButton = document.querySelector(".cta-button");

  if (ctaButton) {
    ctaButton.addEventListener("click", function () {
      try {
        let count = localStorage.getItem("cta_clicks");
        count = count ? parseInt(count, 10) + 1 : 1;
        localStorage.setItem("cta_clicks", count);
      } catch (e) {
        // Fail silently
      }
    });
  }

  /* ===============================
     2. Simple Page View Counter
     (Per page – local)
  ================================ */
  try {
    const pageKey = "views_" + window.location.pathname;
    let views = localStorage.getItem(pageKey);
    views = views ? parseInt(views, 10) + 1 : 1;
    localStorage.setItem(pageKey, views);
  } catch (e) {
    // Fail silently
  }

  /* ===============================
     3. External Links Safety
     (Open in new tab)
  ================================ */
  const links = document.querySelectorAll("a[href^='http']");

  links.forEach(function (link) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

})();

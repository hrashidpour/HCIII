(function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  
  if (!toggle || !nav) return;

  // Toggle menu on hamburger click
  toggle.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    const isOpen = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when clicking on overlay/backdrop
  document.body.addEventListener("click", function(e) {
    if (document.body.classList.contains("nav-open")) {
      // Check if click is outside the nav and toggle button
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    }
  });

  // Close menu when clicking a nav link
  nav.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu on Escape key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });

  // Handle touch events properly
  toggle.addEventListener("touchstart", function(e) {
    e.preventDefault();
    const isOpen = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }, { passive: false });
})();
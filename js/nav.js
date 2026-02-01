(function () {
  const toggles = document.querySelectorAll(".menu-toggle");
  if (!toggles.length) return;

  toggles.forEach((btn) => {
    const nav = btn.parentElement && btn.parentElement.querySelector(".main-nav");
    if (!nav) return;

    btn.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("nav-open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });
})();
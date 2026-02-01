(function () {
  const slider = document.getElementById("lab-slider");
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll(".slide"));
  const prevBtn = slider.querySelector(".slider-btn.prev");
  const nextBtn = slider.querySelector(".slider-btn.next");
  const dotsContainer = slider.querySelector(".slider-dots");

  if (!slides.length) return;

  let current = 0;
  let timer = null;
  const interval = 6000;

  function createDots() {
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = "slider-dot";
      dot.type = "button";
      dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
      dot.addEventListener("click", () => goTo(index));
      dotsContainer.appendChild(dot);
    });
  }

  function setActive(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    const dots = Array.from(dotsContainer.querySelectorAll(".slider-dot"));
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    setActive(current);
    resetTimer();
  }

  function next() {
    goTo(current + 1);
  }

  function prev() {
    goTo(current - 1);
  }

  function resetTimer() {
    if (timer) window.clearInterval(timer);
    timer = window.setInterval(next, interval);
  }

  createDots();
  setActive(current);
  resetTimer();

  if (nextBtn) nextBtn.addEventListener("click", next);
  if (prevBtn) prevBtn.addEventListener("click", prev);
})();
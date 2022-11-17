const fagToggles = document.querySelectorAll(".faq-toggle");

fagToggles.forEach((boss) => {
  boss.addEventListener("click", () => {
    boss.parentNode.classList.toggle("active");
  });
});

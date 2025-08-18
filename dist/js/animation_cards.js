document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1,
  });

  // Sélectionner les cartes
  const cards = document.querySelectorAll("#info-cards article");
  cards.forEach(card => {
    card.classList.add("slide-up"); // Classe initiale pour l’animation
    observer.observe(card);
  });
});

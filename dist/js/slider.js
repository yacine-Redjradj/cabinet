document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const slidesContainer = document.getElementById("slides");
    let currentImages = []; // Pour stocker les images actuellement affichées

    // Fonction pour initialiser ou mettre à jour le slider avec de nouvelles images
    // Cette fonction sera appelée depuis clinic_selector.js
    window.initializeSlider = function(imagePaths) {
        if (!slidesContainer) return;

        currentImages = imagePaths;
        index = 0; // Réinitialiser l'index à 0 lors du changement de clinique

        // Vider le conteneur et ajouter les nouvelles images
        slidesContainer.innerHTML = '';
        currentImages.forEach((path, i) => {
            const img = document.createElement('img');
            img.src = path;
            img.classList.add('w-full', 'h-64', 'object-cover', 'flex-shrink-0');
            // Ajoutez un alt text basé sur le nom de fichier ou la clinique si possible
            img.alt = `Photo de la clinique ${path.includes('genevellier') ? 'Gennevilliers' : 'Suresnes'} - ${i + 1}`;
            slidesContainer.appendChild(img);
        });

        updateSlider(); // Mettre à jour la position initiale
    };

    function updateSlider() {
        if (!slidesContainer || currentImages.length === 0) return;
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    window.prevSlide = function () {
        if (currentImages.length === 0) return;
        index = (index - 1 + currentImages.length) % currentImages.length;
        updateSlider();
    };

    window.nextSlide = function () {
        if (currentImages.length === 0) return;
        index = (index + 1) % currentImages.length;
        updateSlider();
    };

    // Initialisation par défaut avec les images de Cité-jardins au chargement de la page
    // Assurez-vous que les images par défaut sont bien celles de Cité-jardins dans votre HTML au départ.
    // Ou si vous préférez que le JS gère tout, vous pouvez commenter les <img> du HTML et appeler initializeSlider ici.
    // Pour l'instant, on laisse le HTML comme "source de vérité" initiale pour les images.
    // initializeSlider([
    //     "/image/clinique_cite_jardin1.jpg",
    //     "/image/clinique_sersennes_1.jpg",
    //     "/image/clinique_sersennes_2.jpg"
    // ]);
});
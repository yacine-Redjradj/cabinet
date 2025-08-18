document.addEventListener("DOMContentLoaded", () => {
    // Définition des données pour chaque clinique
    const clinics = {
        'cite-jardins': {
            name: 'Centre de santé Cité-jardins',
            address: '11 Place de Stalingrad, 92150 Suresnes',
            // URL d'intégration Google Maps pour Suresnes
            mapUrl: 'https://maps.google.com/maps?q=11%20Place%20de%20Stalingrad%2C%2092150%20Suresnes&t=&z=15&ie=UTF8&iwloc=&output=embed',
            transport: `
                <h3 class="font-semibold text-gray-700">Moyens de transport</h3>
                <ul class="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>RER - Gare du Val d'Or (ligne L)</li>
                    <li>Bus - Place De Stalingrad (ligne 544)</li>
                    <li>Bus - Stalingrad (ligne 241)</li>
                </ul>
            `,
            practical: `
                <h3 class="font-semibold text-gray-700">Parking public</h3>
                <p>119 Avenue de Fouilleuse, Suresnes</p>
            `,
            sliderImages: [
                "/image/clinique_cite_jardin1.jpg",
                "/image/clinique_sersennes_1.jpg",
                "/image/clinique_sersennes_2.jpg"
            ]
        },
        'urgmed-genv': {
            name: 'Centre médical urgmed Genv',
            address: '2 Avenue Chandon, 92230 Gennevilliers',
            // Nouvelle URL d'intégration Google Maps pour Gennevilliers
            mapUrl: 'https://maps.google.com/maps?q=2%20Avenue%20Chandon%2C%2092230%20Gennevilliers&t=&z=15&ie=UTF8&iwloc=&output=embed',
            transport: `
                <h3 class="font-semibold text-gray-700">Moyens de transport</h3>
                <ul class="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Métro - Les Agnettes (ligne 13)</li>
                    <li>Bus - Mairie (lignes 235 et 366)</li>
                    <li>Bus - Mairie De Gennevilliers (ligne 235)</li>
                </ul>
            `,
            practical: `
                <h3 class="font-semibold text-gray-700">Informations pratiques</h3>
                <p>Rez-de-chaussée</p>
                <p>Entrée accessible</p>
            `,
            sliderImages: [
                "/image/clinique_genvellier_1.jpg",
                "/image/clinique_genevellier_3.jpg",
                "/image/clinique_genevellier_2.jpg"
            ]
        }
    };

    // Sélection des éléments HTML à modifier (le reste du code est inchangé)
    const clinicNameCard1 = document.getElementById('clinic-name-card1');
    const clinicAddressCard1 = document.getElementById('clinic-address-card1');
    const clinicNameCard2 = document.getElementById('clinic-name-card2');
    const clinicAddressCard2 = document.getElementById('clinic-address-card2');
    const transportInfo = document.getElementById('transport-info');
    const practicalInfo = document.getElementById('practical-info');
    const googleMap = document.getElementById('google-map');

    const btnCiteJardins = document.getElementById('btn-cite-jardins');
    const btnUrgmedGenv = document.getElementById('btn-urgmed-genv');

    /**
     * Met à jour les informations de la clinique affichées sur la page.
     * @param {Object} clinicData - L'objet contenant les données de la clinique.
     */
    function updateClinicInfo(clinicData) {
        if (clinicNameCard1) clinicNameCard1.textContent = clinicData.name;
        if (clinicAddressCard1) clinicAddressCard1.textContent = clinicData.address;
        
        if (clinicNameCard2) clinicNameCard2.textContent = clinicData.name;
        if (clinicAddressCard2) clinicAddressCard2.textContent = clinicData.address;
        
        if (transportInfo) transportInfo.innerHTML = clinicData.transport;
        if (practicalInfo) practicalInfo.innerHTML = clinicData.practical;
        
        if (googleMap) googleMap.src = clinicData.mapUrl;

        // Mise à jour des images du slider
        if (window.initializeSlider) { // Vérifie si la fonction du slider est disponible
            window.initializeSlider(clinicData.sliderImages);
        }
    }

    /**
     * Gère l'état actif/inactif des boutons de sélection de clinique.
     * @param {HTMLElement} activeButton - Le bouton qui doit être marqué comme actif.
     * @param {HTMLElement} inactiveButton - Le bouton qui doit être marqué comme inactif.
     */
    function setActiveButton(activeButton, inactiveButton) {
        activeButton.classList.remove('bg-blue-100', 'text-blue-800', 'hover:bg-blue-200');
        activeButton.classList.add('bg-blue-700', 'text-white');

        inactiveButton.classList.remove('bg-blue-700', 'text-white');
        inactiveButton.classList.add('bg-blue-100', 'text-blue-800', 'hover:bg-blue-200');
    }

    // Gestionnaire d'événements pour le bouton "Centre de santé Cité-jardins"
    if (btnCiteJardins) {
        btnCiteJardins.addEventListener('click', () => {
            updateClinicInfo(clinics['cite-jardins']);
            setActiveButton(btnCiteJardins, btnUrgmedGenv);
        });
    }

    // Gestionnaire d'événements pour le bouton "Centre médical urgmed Genv"
    if (btnUrgmedGenv) {
        btnUrgmedGenv.addEventListener('click', () => {
            updateClinicInfo(clinics['urgmed-genv']);
            setActiveButton(btnUrgmedGenv, btnCiteJardins);
        });
    }

    // Initialisation au chargement de la page
    if (btnCiteJardins) {
        updateClinicInfo(clinics['cite-jardins']);
        setActiveButton(btnCiteJardins, btnUrgmedGenv);
    }
});
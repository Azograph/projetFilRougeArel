    // --- Récupération des éléments HTML ---
    const track   = document.getElementById('track');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const dotsZone = document.getElementById('dots');

    // --- Variables d'état ---
    let pageActuelle = 0;
    const cardsParPage = 3; // nombre de cards visibles à la fois
    const totalCards = track.children.length;
    const totalPages = Math.ceil(totalCards / cardsParPage); // Math.ceil permet d'arrondir toujours au suppérieur > pour afficher les card.


    // --- Création des dots (un par page) ---
for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.addEventListener('click', () => allerPage(i));
    dotsZone.appendChild(dot);
}


// --- Fonction principale : aller à une page donnée ---
function allerPage(numero) {
    pageActuelle = numero;

    // Calcule le déplacement horizontal
    // On déplace d'une largeur de card + gap, multiplié par le nombre de cards sautées
    const largeurCard = track.children[0].offsetWidth; // offsetWidth = largeur total de l'élément
    const gap = 20;
    const deplacement = pageActuelle * cardsParPage * (largeurCard + gap);

    track.style.transform = `translateX(-${deplacement}px)`;

    // Met à jour les boutons
    btnPrev.disabled = (pageActuelle === 0);
    btnNext.disabled = (pageActuelle === totalPages - 1);

    // Met à jour les dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === pageActuelle);
    });
}


    // --- Écouteurs sur les boutons ---
    btnPrev.addEventListener('click', () => allerPage(pageActuelle - 1));
    btnNext.addEventListener('click', () => allerPage(pageActuelle + 1));


    // --- Initialisation ---
    allerPage(0);

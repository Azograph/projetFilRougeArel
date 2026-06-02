        // /--- CARROUSEL ---\
    // --- Récupération des éléments HTML ---
const track   = document.getElementById('track');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const dotsZone = document.getElementById('dots');

    // --- Variables ---
let pageActuelle = 0;
const cardsParPage = 3; // nombre de cards visibles 
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

    // Déplace l’élément track horizontalement vers la gauche du nombre de pixels contenu dans deplacement
    track.style.transform = `translateX(-${deplacement}px)`;

    // Met à jour les boutons
    btnPrev.disabled = (pageActuelle === 0);
    btnNext.disabled = (pageActuelle === totalPages - 1);

    // Met à jour les dots, ajoute la classe active pour activer ou désactiver les dots
    document.querySelectorAll('.dot').forEach((dot, index) => { // forEach = for(let i = 0; i < dots.length; i++)
    dot.classList.toggle('active', index === pageActuelle);
    });
}

    // --- Écouteurs sur les boutons ---
btnPrev.addEventListener('click', () => allerPage(pageActuelle - 1));
btnNext.addEventListener('click', () => allerPage(pageActuelle + 1));

    // --- Initialisation ---
allerPage(0);


        // /--- MAP INTERACTIVE ---\

var map = L.map('map').setView([45.89409637451172, 3.1103131771087646], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([45.89409637451172, 3.1103131771087646]).addTo(map);


        // /--- MENU BURGER ---\

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("ouvert");
}

const btnBurger = document.getElementById("btnBurger");
btnBurger.addEventListener('click', toggleMenu);

        // -------- ENCART ACTUALITÉ --------

function toggleEncart() {
    document.getElementById("encart").classList.toggle("ouvert");
    document.getElementById("panneau").classList.toggle("ouvert");
}
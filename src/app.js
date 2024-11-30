
// Script pour initialiser AOS
    AOS.init({
		duration: 800,
		easing: 'slide',
		once: true
	});
// });


















// JavaScript pour gérer l'ouverture et la fermeture de l'offcanvas
const openBtn = document.getElementById('open-btn');
// const closeBtn = document.getElementById('close-btn');
const offcanvas = document.getElementById('offcanvas');

openBtn.addEventListener('click', () => {
    offcanvas.classList.add('active');
});

// closeBtn.addEventListener('click', () => {
//     offcanvas.classList.remove('active');
// });

// Fermer l'offcanvas quand on clique en dehors
offcanvas.addEventListener('click', (event) => {
    if (event.target === offcanvas) {
        offcanvas.classList.remove('active');
    }
});
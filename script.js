// Fonction pour ouvrir un certificat
function ouvrirCert(nom) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const link = document.getElementById('modal-link');

    title.textContent = "Certification : " + nom;
    link.href = "#"; // Remplacez par le lien réel vers le certificat

    modal.classList.remove('hidden');
}

// Fonction pour fermer le modal
function fermerCert() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

// Fermer le modal si clic en dehors du contenu
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        fermerCert();
    }
}

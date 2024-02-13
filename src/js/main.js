/* main.js */
// Funktion zum Laden von Produktdaten von einem API-Endpunkt
function loadProducts() {
    fetch('https://api.example.com/products')
        .then(response => response.json())
        .then(data => {
            // Verarbeiten der empfangenen Produktdaten
            displayProducts(data);
        })
        .catch(error => {
            console.error('Fehler beim Laden der Produkte:', error);
        });
}

// Beispiel: Funktion zum Anzeigen von Produkten auf der Website
function displayProducts(products) {
    // Code zum Erstellen von Produktkarten oder -listen basierend auf den Produktdaten
}

// Beispiel: Eventlistener zum Laden von Produkten, wenn die Seite geladen ist
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
});

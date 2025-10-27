// Import du CSS
import '../css/style.css';

import '@bpifrance/design-system/styles.css';
import '@bpifrance/design-system/bpi.css';

import '@bpifrance/design-system/propulsion-web-component.js'
import { ppLeft_Arrow } from '@bpifrance/propulsion-assets/assets/Left_Arrow';
var icons = [ppLeft_Arrow]

// Fonction principale
function init() {
    console.log('Application initialisée !');


    // Binding des icônes au composant pp-icon-initializer
    const iconInitializer = document.querySelector('pp-icon-initializer-component');
    if (iconInitializer) {
        // Assigner la variable icons au composant
        iconInitializer.icons = icons;
        console.log('Icons bound to pp-icon-initializer-component:', icons);
    }

    // Sélection du bouton
    const btn = document.getElementById('btn');
    
    if (btn) {
        // Compteur de clics
        let clickCount = 0;
        
        // Ajout de l'événement click
        btn.addEventListener('click', function() {
            clickCount++;
            
            if (clickCount === 1) {
                btn.textContent = 'Encore !';
                btn.style.background = 'linear-gradient(45deg, #764ba2, #f093fb)';
            } else if (clickCount === 2) {
                btn.textContent = 'Génial !';
                btn.style.background = 'linear-gradient(45deg, #f093fb, #f5576c)';
            } else if (clickCount >= 3) {
                btn.textContent = `${clickCount} clics !`;
                btn.style.background = 'linear-gradient(45deg, #f5576c, #4facfe)';
            }
            
            // Animation de pulse
            btn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);
        });
    }
}

// Initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', init);

// Export pour Webpack
export default init;
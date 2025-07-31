/**
 * Steuert das mobile Drop-Down-Menü durch Ein- und Ausblenden.
 *
 * - `dropBox` referenziert das Element mit der ID 'mobile.drop'.
 * - `ifMenu` speichert, ob das Menü geöffnet (true) oder geschlossen (false) ist.
 *
 * Die Funktion `menu()` prüft den aktuellen Zustand:
 *   - Ist das Menü geschlossen, wird es durch Setzen von `transform: translatex(0%)` eingeblendet.
 *   - Ist das Menü geöffnet, wird es durch Setzen von `transform: translatex(-100%)` ausgeblendet.
 * 
 * Voraussetzung: Ein Element mit der ID 'mobile.drop' muss im DOM vorhanden sein.
 */

let dropBox = document.getElementById('mobile.drop');
let ifMenu = false;

function menu() {
  if (!ifMenu) {
    dropBox.style.transform = 'translatex(0%)';
    ifMenu = true;
  } else {
    dropBox.style.transform = 'translatex(-100%)';
    ifMenu = false;
  }
}
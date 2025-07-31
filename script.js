/**
 * Lädt externe HTML-Dateien in Elemente mit dem Attribut 'w3-include-html'.
 * Sucht im gesamten DOM nach Elementen mit diesem Attribut, lädt die angegebene Datei per XMLHttpRequest
 * und ersetzt den Inhalt des Elements durch die geladene Datei.
 * Wird rekursiv aufgerufen, um verschachtelte Includes zu unterstützen.
 */
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
}

let portionscount = document.getElementById("portionscount");
let nums = document.getElementsByClassName("ingredient");
let btn = document.getElementById("calculate-btn");
let originalNums = [];

/**
 * Berechnet die Zutatenmengen neu basierend auf der eingegebenen Portionsanzahl.
 * Multipliziert jede Zutat (Element mit Klasse 'ingredient') mit dem Wert aus dem Inputfeld 'portionscount'
 * und aktualisiert den Inhalt der jeweiligen Elemente.
 * Setzt das Eingabefeld nach der Berechnung zurück.
 */
function calc(){
    for(let i = 0; i < nums.length; i++){
      originalNums.push(nums[i].innerHTML)
      let result = originalNums[i] * portionscount.value;
      nums[i].innerHTML = result;        
    }
    document.getElementById("portionscount").value = '';
}

// changin the start image
let img = document.getElementById("section-1-img");
let startButton = document.getElementById('startButton');
let recipeIntro = document.getElementById('recipe-intro')
let index = 0;
let data = [  { img: './img/penne-rigate.jpg', href: 'recipe.html', intro : `Die Süße von Zwiebeln und Sahne harmoniert hervorragend mit dem salzigen Käse, etwas Apfelessig und frischer Thymian steuern weitere aromatische Komponenten bei. Diese elegante Pastasauce aus Zwiebeln verlangt nach einer besonderen Begleitung.` },
            { img: './img/haehnchen-suesssauer.jpg', href: 'recipe-2.html', intro: `Hähnchen süßsauer ist ein beliebtes chinesisches Gericht, das aus knusprig gebratenen Hähnchenstücken und Gemüse in einer süß-sauren Sauce besteht. Es ist bekannt für seinen einzigartigen Geschmack, der ausgewogen zwischen süß und sauer ist. Dieses Gericht wird oft mit Reis serviert und ist eine gute Wahl für Menschen, die asiatische Küche genießen. Hähnchen süßsauer ist auch ein leicht zu findendes Gericht in asiatischen Restaurants und kann auch zu Hause leicht zubereitet werden.`},
            { img: './img/gyros-nudelauflauf.jpg', href: 'recipe-3.html', intro: `Gyros-Nudelauflauf ist ein köstliches Gericht aus der griechischen Küche, das sich schnell und einfach zubereiten lässt. Dazu werden Gyros-Streifen mit Zwiebeln und Gewürzen angebraten und mit einer cremigen Sauce aus Sahne, Tomatenmark und Gewürzen verfeinert. Die Nudeln werden separat gekocht und mit der Fleisch-Sauce vermischt. Das Ganze wird in eine Auflaufform gegeben und mit Käse überbacken, bis der Käse goldbraun und knusprig ist. Der Gyros-Nudelauflauf ist ein herzhaftes Gericht, das sich ideal für eine schnelle und leckere Mahlzeit eignet.` }];

 /**
 * Aktualisiert das Startbild, den Link und die Einleitung des Rezepts abhängig vom Wochentag.
 * Wählt anhand des aktuellen Tages einen Eintrag aus dem 'data'-Array aus und setzt die entsprechenden Werte.
 */
function updateImage() {
  let currentDate = new Date();
  let currentDay = currentDate.getDay();
  let dayIndex = currentDay % data.length;
  img.src = data[dayIndex].img;
  startButton.href = data[dayIndex].href;
  recipeIntro.innerText = data[dayIndex].intro;
}

// Initialisiert das Startbild beim Laden der Seite
updateImage();

/**
 * Wechselt das Vergleichsbild ('comparison-img') alle 4 Sekunden zwischen zwei Bildern.
 * Nutzt das Array 'secondData' und setzt den 'src'-Wert des Bildes entsprechend.
 */
setInterval(function (){
  comparisonImg.src = secondData[index2].img;
  index2 = (index2+1) % secondData.length;
}, 4000)
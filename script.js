function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  };

  let portionscount = document.getElementById("portionscount");
  let nums = document.getElementsByClassName("ingredient");
  let btn = document.getElementById("calculate-btn");
  let originalNums = [];

  
  
  function calc(){
      for(let i =0; i< nums.length; i++){
        originalNums.push(nums[i].innerHTML)
        let result = originalNums[i] * portionscount.value;
        nums[i].innerHTML = result;        
      }
      document.getElementById("portionscount").value = '';
  };

  // changin the start image
  let img = document.getElementById("section-1-img");
  let startButton = document.getElementById('startButton');
  let recipeIntro = document.getElementById('recipe-intro')
  let index = 0;
  let data = [  { img: './img/penne-rigate.jpg', href: 'recipe.html', intro : `Die Süße von Zwiebeln und Sahne harmoniert hervorragend mit dem salzigen Käse, etwas Apfelessig und frischer Thymian steuern weitere aromatische Komponenten bei. Diese elegante Pastasauce aus Zwiebeln verlangt nach einer besonderen Begleitung.` },
                { img: './img/haehnchen-suesssauer.jpg', href: 'recipe-2.html', intro: `Hähnchen süßsauer ist ein beliebtes chinesisches Gericht, das aus knusprig gebratenen Hähnchenstücken und Gemüse in einer süß-sauren Sauce besteht. Es ist bekannt für seinen einzigartigen Geschmack, der ausgewogen zwischen süß und sauer ist. Dieses Gericht wird oft mit Reis serviert und ist eine gute Wahl für Menschen, die asiatische Küche genießen. Hähnchen süßsauer ist auch ein leicht zu findendes Gericht in asiatischen Restaurants und kann auch zu Hause leicht zubereitet werden.`},
                { img: './img/gyros-nudelauflauf.jpg', href: 'recipe-3.html', intro: `Gyros-Nudelauflauf ist ein köstliches Gericht aus der griechischen Küche, das sich schnell und einfach zubereiten lässt. Dazu werden Gyros-Streifen mit Zwiebeln und Gewürzen angebraten und mit einer cremigen Sauce aus Sahne, Tomatenmark und Gewürzen verfeinert. Die Nudeln werden separat gekocht und mit der Fleisch-Sauce vermischt. Das Ganze wird in eine Auflaufform gegeben und mit Käse überbacken, bis der Käse goldbraun und knusprig ist. Der Gyros-Nudelauflauf ist ein herzhaftes Gericht, das sich ideal für eine schnelle und leckere Mahlzeit eignet.` }];
  
  function updateImage() {
    let currentDate = new Date();
    let currentDay = currentDate.getDay();
    let dayIndex = currentDay % data.length;
    img.src = data[dayIndex].img;
    startButton.href = data[dayIndex].href;
    recipeIntro.innerText = data[dayIndex].intro;
  }
  
  updateImage(); // update the image on page load
  
  // run the updateImage function once per day
  setInterval(function() {
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentSecond = currentDate.getSeconds();
    let remainingMilliseconds = (24 * 60 * 60 * 1000) - (currentHour * 60 * 60 * 1000) - (currentMinute * 60 * 1000) - (currentSecond * 1000);
    setTimeout(function() {
      updateImage();
    }, remainingMilliseconds);
  }, 24 * 60 * 60 * 1000);


  // 
  let index2 = 0;
  let secondData = [
    { img: './img/wok.jpg'},
    {
      img: './img/pfanne.png'
    }
  ];
  let comparisonImg = document.getElementById('comparison-img');

  setInterval(function (){
    comparisonImg.src = secondData[index2].img;
    index2 = (index2+1) % secondData.length;
  }, 4000)
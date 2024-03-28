let dropBox = document.getElementById('mobile.drop');
  let ifMenu = false;

  function menu(){
    if(!ifMenu){
      dropBox.style.transform ='translatex(0%)';
      ifMenu = true;
    } else{
      dropBox.style.transform ='translatex(-100%)';
      ifMenu = false;
    }
  };
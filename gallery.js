// GALLERY
function toggleState3() {
    let galleryView = document.getElementById("galleryView")
      galleryView.style.display = "flex";
      
      while (tilesContainer.hasChildNodes()) {
        tilesContainer.removeChild(tilesContainer.firstChild)
      }; 
  };
  
  let imgObject = [
    "ss/sklep-main.jpg",
    "ss/sklep-ceny.jpg",
    "ss/sklep-kategorie.jpg",
    "ss/sklep-kategorie-2.jpg",
    "ss/sklep-wyszukiwanie.jpg",
    "ss/sklep-dodawanie-do-koszyka.jpg",
    "ss/sklep-koszyk.jpg",
  ];
  
  let imgTitle = [
      "Główna strona sklepu",
      "Ceny promocyjne oraz sortowanie według cen",
      "Sortowanie według kategorii: honey",
      "Sortowanie według kategorii: candle",
      "Wyszukiwanie produktów poprzez nazwę",
      "Dodawanie i usuwanie produktów z koszyka",
      "Widok koszyka z produktami",
  ];
  
  let mainImg = 0;
  let prevImg = imgObject.length - 1;
  let nextImg = 1;
  
  let mainTitle = 0;
  let prevTitle = imgTitle.length - 1;
  let nextTitle = 1;
  
  function loadGallery() {
  
    let mainView = document.getElementById("mainView");
    let titleView = document.getElementById("titleView");
  
  
  
    mainView.style.background = "url(" + imgObject[mainImg] + ")";
    titleView.innerHTML = imgTitle[mainTitle];
  };
  
  function viewAllTitle(e) {
      let title = document.getElementById("titleView");
  
      title.style.display = "block";
  };
  function clearAllTitle(e) {
      let title = document.getElementById("titleView");
  
      title.style.display = "none";
  };
  
  
  function scrollRight() {
    
    prevImg = mainImg;
    mainImg = nextImg;
    prevTitle = mainTitle;
    mainTitle = nextTitle;
    if (nextImg >= (imgObject.length -1)) {
      nextImg = 0;
      nextTitle = 0;
    } else {
      nextImg++;
      nextTitle++;
    }; 
    loadGallery();
  };
  
  function scrollLeft() {
    nextImg = mainImg
    mainImg = prevImg;
    nextTitle = mainTitle;
    mainTitle = prevTitle;
    if (prevImg === 0) {
      prevImg = imgObject.length - 1;
      prevTitle = imgTitle.length - 1;
    } else {
      prevImg--;
      prevTitle--;
    };
    loadGallery();
  };
  
  document.getElementById("navRight").addEventListener("click", scrollRight);
  document.getElementById("navLeft").addEventListener("click", scrollLeft);
  document.addEventListener('keyup',function(e){
      if (e.keyCode === 37) {
      scrollLeft();
    } else if(e.keyCode === 39) {
      scrollRight();
    }
  });
  
  loadGallery();
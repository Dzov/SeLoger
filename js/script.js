// Animation scroll header, Icon et landingFooter 
 function scroll() {
  let landingFooter = document.getElementById("landingPage_footer"); 
  let mainHeader = document.getElementById("mainHeader"); 
  let mainIcon = document.getElementById("seLogerIcon"); 

  if (window.scrollY  > 70) {
    // fait disparaitre les éléments landingFooter, mainHeader et l'icone SeLoger
    landingFooter.classList.add("animated", "fadeOutDown"); 
    mainHeader.classList.add("animated", "fadeOutUp"); 
    mainIcon.classList.add("animated", "fadeOutUp");  
  } else if ( window.scrollY < 60) {
    // Fait réapparaitre les éléments lorsque l'on est au début de la page 
    landingFooter.classList.remove("fadeOutDown"); 
    landingFooter.classList.add("fadeInUp"); 
    
    mainHeader.classList.remove("fadeOutUp");
    mainHeader.classList.add("fadeInDown"); 

    mainIcon.classList.remove("fadeOutUp"); 
    mainIcon.classList.add("fadeInDown"); 
  }
}

// Fait apparaitre le formulaire correspondant à l'onglet sélectionné 
function formTabs( activeForm , hiddenForm , tab ) {
  let buttons = document.querySelectorAll(".formTab");
  let formTab = document.getElementById(tab); 
  let hideForm = document.getElementById(hiddenForm); 
  let activateForm = document.getElementById(activeForm); 

  buttons.forEach(function( button ) {
    button.classList.remove("activeTab");
  });

  formTab.classList.add("activeTab"); 
  hideForm.classList.add("fadeOut", "hidden"); 
  activateForm.classList.remove('fadeOut', "hidden"); 
  activateForm.classList.add("fadeIn"); 
}



// Fait apparaitre le menu déroulant du header onmouseover
function menu( menu , listItem ) {
  let getMenu = document.getElementById(menu); 
  getMenu.classList.remove("hidden");  
}

// PreFooter Slider
let sliderIcons = [
  ["Img/webimm.svg" , "Img/seloger-vacances-B.svg" , "Img/agites.svg" , "Img/vacances.svg" , "Img/immostreet.svg" , "Img/louer-vite-B.svg"] ,
  ["Img/la-cote-immo.svg" , "Img/les-avis-immo.svg" , "Img/seloger-neuf-B.svg" , "Img/seloger-construire-B.svg" , "Img/bellesdemeures-black.svg" , "Img/agorabiz.svg"]
  ];
let firstSlide = ""; 
let secondSlide = ""; 

// créer le contenu du slider
function sliderContent() {
  let firstSlide_icons = sliderIcons[0]; 
  let secondSlide_icons = sliderIcons[1]; 

  for (let j = 0 ; j < firstSlide_icons.length ; j++ ) {
    firstSlide += "<li><img src=' " + firstSlide_icons[j] + " ' alt='" + firstSlide_icons[j].substr(4) + "'></li>";  
  }
  for (let j = 0 ; j < secondSlide_icons.length ; j++ ) {
    secondSlide += "<li><img src=' " + secondSlide_icons[j] + " ' alt='" + secondSlide_icons[j].substr(4) + "'></li>";    
  }
  document.getElementById("sliderList").innerHTML = firstSlide; 
} sliderContent(); 

let i = 0; 
// change de slide au click du bouton suivant ou précédent
function slider() {
  var iconList = document.getElementById("sliderList"); 


  if (i == 0) {
    iconList.innerHTML = firstSlide;
    i++;  
  } else {
    iconList.innerHTML = secondSlide; 
    i = 0; 
  }
}

console.log(sliderIcons[0][0].substr(4)); 












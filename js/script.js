document.addEventListener("wheel", function() {

if (window.scrollY  > 70) {
  document.getElementById("landingPage_footer").classList.add("animated", "fadeOutDown"); 
  document.getElementById("mainHeader").classList.add("animated", "fadeOutUp"); 
  document.getElementById("seLogerIcon").classList.add("animated", "fadeOutUp");  
} else if ( window.scrollY < 60) {
  document.getElementById("landingPage_footer").classList.remove("fadeOutDown"); 
  document.getElementById("landingPage_footer").classList.add("fadeInUp"); 
  
  document.getElementById("mainHeader").classList.remove("fadeOutUp");
  document.getElementById("mainHeader").classList.add("fadeInDown"); 

  document.getElementById("seLogerIcon").classList.remove("fadeOutUp"); 
  document.getElementById("seLogerIcon").classList.add("fadeInDown"); 
  }
});

var mainForm = document.getElementById('mainForm'); 
var secondForm = document.getElementById('secondForm'); 

function formTabs(activeForm, hiddenForm) {

  hiddenForm.classList.add("fadeOut"); 
  activeForm.classList.remove('fadeOut', "active"); 
  activeForm.classList.add("active", "fadeIn"); 
}
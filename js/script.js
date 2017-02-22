var scrolled = false; 

document.addEventListener("wheel", function() {

  if (window.scrollY  > 70) {
    document.getElementById("landingPage_footer").classList.add("animated", "fadeOutDown"); 
    document.getElementById("mainHeader").classList.add("animated", "fadeOutUp"); 
    document.getElementById("seLogerIcon").classList.add("animated", "fadeOutUp"); 
    scrolled = true; 
  } else if ( scrolled && window.scrollY < 60) {
    document.getElementById("landingPage_footer").classList.remove("fadeOutDown"); 
    document.getElementById("landingPage_footer").classList.add("fadeInUp"); 
    
    document.getElementById("mainHeader").classList.remove("fadeOutUp");
    document.getElementById("mainHeader").classList.add("fadeInDown"); 

    document.getElementById("seLogerIcon").classList.remove("fadeOutUp"); 
    document.getElementById("seLogerIcon").classList.add("fadeInDown"); 
    }
});
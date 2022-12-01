// toggle nav on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-dark").style.top = "0";
  } else {
    document.getElementById("navbar-dark").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}
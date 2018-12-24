// Multiple functions that support modals and a lightbox 
// for showing a higher resolution image when clicked
// Inspired by...
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_lightbox

// Open modal screen
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close modal screen
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

// Set slide index to start at 1
var slideIndex = 1;
showSlides(slideIndex);

// Loop through slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Set current slide value to img selected
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Show slides of index n
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1};
  // restarts loop 
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
/*
// countdown timer
function countdown() {
    var seconds = document.getElementById("seconds").value; // Get the value of the input field with id "seconds"

    function tick() {
        seconds = seconds - 1; // Decrement the seconds by 1
        timer.innerHTML = seconds; // Update the innerHTML of the element with id "timer" to show the remaining seconds
        var time = setTimeout (tick, 1000); // Call the tick function again after 1000 milliseconds (1 second)
        if (seconds == -1) { // If the seconds reach -1, it means the countdown is over
            alert("Time's up!");
            clearTimeout(time); // Clear the timeout to stop the countdown
            timer.innerHTML = ""; // Clear the timer display
        }
    }
    tick() // Call the tick function to start the countdown
}
*/
/*
// normal slideshow JS from W3Schools.com
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
*/
// automatic slideshow JS from W3Schools.com
let slideIndex = 0; // Declare a variable slideIndex and initialize it to 0
showSlides(); // Call the showSlides function to start the slideshow

function showSlides() { 
  let i; // Declare a variable i for the loop
  let slides = document.getElementsByClassName("mySlides"); // Get all elements with the class name "mySlides"
  for (i = 0; i < slides.length; i++) { // Loop through all slides
    slides[i].style.display = "none"; // Hide each slide
  }
  slideIndex++; // Increment the slide index
  if (slideIndex > slides.length) {slideIndex = 1} // If the slide index exceeds the number of slides, reset it to 1
  slides[slideIndex-1].style.display = "block"; // Display the current slide
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
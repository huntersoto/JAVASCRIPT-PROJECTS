//Initialize Popovers

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img src='" + imgSrc + "' class='star-rating'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

// Initialize Toast
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)   // ", option" removed to avoid an error
})

// Function to display toast with selected options
function displaySelectedMovieOptions() {
  var movie = document.getElementById('movie-select').options[document.getElementById('movie-select').selectedIndex].text;
  var time = document.getElementById('time-select').options[document.getElementById('time-select').selectedIndex].text;
  var quantity = document.getElementById('quantity').value;
  var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

  // Display Toast
  var toastBody = document.getElementById('toast-body');
  toastBody.textContent = message;
  var toast = new bootstrap.Toast(document.getElementById('toast-display'));
  toast.show();
}

function buyTickets() {
  displaySelectedMovieOptions();
}

//JQUERY

//Shrinks header size when the document is scrolled down by 80 pixels
$(document).on("scroll", function () {
    //When the webpage is scrolled down from the top by 50px this if statement will trigger
    if ($(document).scrollTop() > 50) {
        //Once the 50px requirment has been met add the nav-shrink class selector to the same HTML element that has the nav class
        $("nav").addClass("nav-shrink");
        //Adjust the position of the mobile drop menu to accommodate the new height decrease
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //if the webpage has not been scrolled down or is back at the top the nav-shrink class selector is removed from the HTML element with the nav class selector
        $("nav").removeClass("nav-shrink");
        //The margin for the drop down menu is now returned to it's original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});

// Close mobile menu when a link is clicked
$(document).ready(function () {
  //On click when and element contains just the nav-link class and not the dropdown-toggle and then also close when an element with the class .dropdown-item (each movie link) has been clicked.
  $(".navbar-nav").on("click", '.nav-link:not(".dropdown-toggle"), .dropdown-item', function () {
      //Collapse the navbar when a link or a dropdown item is clicked
      $(".navbar-collapse").collapse('hide');
    });
});
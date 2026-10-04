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
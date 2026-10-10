function getRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const img = document.getElementById('dogDisplay'); // get the image element for displaying the dog image
            img.src = data.message; // set the image source to the fetched dog image
            img.style.display = "block";   // show the image
        })
        .catch(err => {
            const img = document.getElementById('dogDisplay'); // get the image element for error handling
            img.alt = 'Error fetching dog image'; // set alt text for error state
            img.style.display = "block";   // show error state
        });
}
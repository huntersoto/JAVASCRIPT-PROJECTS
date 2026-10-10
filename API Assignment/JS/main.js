function getRandomJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => document.getElementById('jokeDisplay').textContent = `${data.setup} - ${data.punchline}`)
        .catch(err => {
            document.getElementById('jokeDisplay').textContent = 'Error Fetching Joke';
        });
}
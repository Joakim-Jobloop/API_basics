const apiUrl = 'https://v2.jokeapi.dev/joke/Any';
// const apiUrl = 'https://jokeapi.dev/api/jokes/random';
const jokeContainer = document.getElementById('joke-container');


function displayJoke(joke) {
    // Clear previous content in the joke container
    while (jokeContainer.firstChild) {
        jokeContainer.removeChild(jokeContainer.firstChild);
    }

    // Create a paragraph element to display the joke text
    const jokeText = document.createElement('p');
    jokeText.textContent = joke;

    // Append the joke text to the joke container
    jokeContainer.appendChild(jokeText);
}

function fetchRandomJoke() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.type === 'single') {
                displayJoke(data.joke);
            } else if (data.type === 'twopart') {
                // For two-part jokes, concatenate setup and delivery
                const joke = `${data.setup} ${data.delivery}`;
                displayJoke(joke);
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
}




// Fetch a random joke when the page loads
fetchRandomJoke();
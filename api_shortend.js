//! forkortet, men uten error handling:
const jokeText = document.getElementById("joke-text");

const fetchJoke = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    if (response.ok) {
        const data = await response.json();
        jokeText.textContent = data.value;
    } else {
        jokeText.textContent = "Kunne ikke hente vits.";
    }
};

fetchJoke();
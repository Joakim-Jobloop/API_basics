// Henter referanser til DOM-elementer ved hjelp av deres id-attributter
const jokeText = document.getElementById("joke-text"); // Tekstelementet for å vise vitser
const loadingText = document.getElementById("loading-text"); // Tekstelementet for å vise "Laster..."
const getJokeButton = document.getElementById("get-joke-button"); // Knappen for å hente en ny vits

// Definerer en asynkron funksjon for å hente en vits fra API-en
const fetchJoke = async () => {
    try {
        // Oppdaterer teksten til "Laster vits..." mens vi venter på svar fra API-et
        loadingText.textContent = "Laster vits...";
        
        // Utfører en HTTP-forespørsel for å hente en tilfeldig vits fra API-en
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        
        // Hvis responsen er vellykket (status 200 OK), behandle dataen og vis vitsen
        if (response.ok) {
            const data = await response.json(); // Konverterer responsen til JSON-format
            jokeText.textContent = data.value; // Viser vitsen i tekstelementet
        } else {
            // Hvis responsen ikke er vellykket, vis en feilmelding
            jokeText.textContent = "Kunne ikke hente vits.";
        }
    } catch (error) {
        // Hvis det oppstår en feil under henting av vitsen, logg feilen og vis en feilmelding
        console.error("En feil oppstod:", error);
        jokeText.textContent = "En feil oppstod under henting av vitsen.";
    } finally {
        // Skjuler "Laster..."-teksten uavhengig av om henting er vellykket eller mislykkes
        loadingText.style.display = "none";
    }
};


// kjører funksjonen en gang når siden lastes
fetchJoke();





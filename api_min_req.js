//! Enda mer forkortet, men gir ikke beskjed på om vitsen ikke kan bli hentet:
const jokeText = document.getElementById("joke-text");

const fetchJoke = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");

  const data = await response.json();
  console.log(data)
  jokeText.textContent = data.value;
};

fetchJoke();

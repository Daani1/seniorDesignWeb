const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

document.addEventListener("click", function (event) {
  // Checking if the button was clicked
  if (!event.target.matches("#button")) return;

  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => renderJoke(data));
});

function renderJoke(data) {
  const setup = document.getElementById("setup");
  const punchline = document.getElementById("punchline");
  setup.innerHTML = data.setup;
  punchline.innerHTML = data.punchline;
}

// https://www.shecodes.io/athena/10692-what-is-an-api-key-and-how-to-use-it-in-javascript ;using an API key
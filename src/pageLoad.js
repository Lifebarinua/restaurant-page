// src/pageLoad.js
function loadPage() {
  const content = document.getElementById('content');

  // Create elements
  const heading = document.createElement('h1');
  heading.textContent = "Welcome to EXTRA RESTAURANT!";

const description = document.createElement('p');
description.innerHTML = "We serve the best food in town, made fresh every day.<br>Enjoy your meal!";
description.id = "intro-text";

  // Append to #content
  content.appendChild(heading);
  content.appendChild(description);
}

export default loadPage;

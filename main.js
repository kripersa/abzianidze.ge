document.addEventListener("DOMContentLoaded", function () {
  fetch("projects.json")
    .then((response) => response.json())
    .then((data) => generateCards(data))
    .catch((error) => console.error("Error loading projects:", error));
});

function generateCards(projects) {
  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = ""; 

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url(${project.image})`;

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const link = document.createElement("a");
    link.href = project.link;
    link.classList.add("btn");
    link.textContent = "View Project";

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);
    cardsContainer.appendChild(card);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const contactBox = document.getElementById('contact');
  const aboutMe = document.getElementById('about-me');

  // Function to start the rotation (only called once)
  function startRotation() {
    contactBox.classList.add('rotate-left');
    aboutMe.classList.add('rotate-right');
  }

  // Call the rotation function ONCE on DOMContentLoaded
  startRotation();

  const stopRotation = () => {
    contactBox.classList.remove('rotate-left');
    aboutMe.classList.remove('rotate-right');
    contactBox.style.transform = 'rotate(0deg)';
    aboutMe.style.transform = 'rotate(0deg)';
  };

  contactBox.addEventListener('mouseover', stopRotation);
  aboutMe.addEventListener('mouseover', stopRotation);

});
const url = "data/discover.json"

const cards = document.querySelector('.businesses');

let businessData = [];

async function getBusinesses() {
    const response = await fetch(url);
    const data = await response.json();
    businessData = data.businesses;
    displayBusinesses(businessData);
}

const displayBusinesses = (businesses) => {
    cards.innerHTML = "";

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let figure = document.createElement('figure');
        let pic = document.createElement('img');
        let button = document.createElement('button');

        name.textContent = business.name;
        address.textContent = business.address;
        description.textContent = business.description;
        card.setAttribute('class', 'business-card');
        pic.setAttribute('src', business.image);
        pic.setAttribute('alt', `${business.name} image`);
        pic.setAttribute('loading', 'lazy');
        pic.setAttribute('width', '300');
        pic.setAttribute('height', '200');
        pic.setAttribute('class', 'hover');
        figure.appendChild(pic);
        button.textContent = "Learn More";

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(pic);
        card.appendChild(button);

        cards.appendChild(card);
    });
}
getBusinesses();

const timestampInput = document.getElementById("timestamp");
if (timestampInput) {
  const now = new Date();
  timestampInput.value = now.toLocaleString();
}

const sidebarMessage = document.createElement("div");
sidebarMessage.classList.add("visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  sidebarMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const difference = now - lastVisit;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  sidebarMessage.textContent = days < 1
    ? "Back so soon! Awesome!"
    : `You last visited ${days} day${days === 1 ? "" : "s"} ago.`;
}

localStorage.setItem("lastVisit", now);
const h1 = document.querySelector("main h1");
h1.insertAdjacentElement("afterend", sidebarMessage);
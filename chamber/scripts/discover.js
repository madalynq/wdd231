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
        let address = document.createElement('p');
        let description = document.createElement('p');
        let pic = document.createElement('img');

        name.textContent = business.name;
        address.textContent = business.address;
        description.textContent = business.description;
        card.setAttribute('class', 'business-card');
        pic.setAttribute('src', business.image);
        pic.setAttribute('alt', `${business.name} image`);
        pic.setAttribute('loading', 'lazy');
        pic.setAttribute('width', '300');
        pic.setAttribute('height', '200');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(pic);

        cards.appendChild(card);
    });
}
getBusinesses();
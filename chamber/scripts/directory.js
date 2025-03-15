const url = "data/members.json";

const cards = document.querySelector('.card');

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let pic = document.createElement('img');
        let membership = document.createElement('p');

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.innerHTML = `<a href="${member.website}" target="_blank">${member.website}</a>`;
        membership.textContent = `Membership Level: ${member.membership}`;

        card.setAttribute('class', 'member-card');
        pic.setAttribute('src', member.imageurl);
        pic.setAttribute('alt', `${member.name} image`);
        pic.setAttribute('loading', 'lazy');
        pic.setAttribute('width', '400');
        pic.setAttribute('height', '250')

        card.appendChild(name);
        card.appendChild(pic);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);

        cards.appendChild(card);

    });
}
getMembers();
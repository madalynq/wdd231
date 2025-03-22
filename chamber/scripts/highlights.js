const url = "data/members.json";

const cards = document.querySelector('article');

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    membersData = data.members;
    const silver = membersData.filter(member => member.membership === "Silver");
    const gold = membersData.filter(member => member.membership === "Gold");

    const combined = [...silver, ...gold];
    const shuffled = combined.sort(() => Math.random() - 0.5);

    const selectedMembers = shuffled.slice(0, 3);

    displayMembers(selectedMembers);
}

const displayMembers = (members) => {
    cards.innerHTML = "";

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
        membership.textContent = `Membership Level: ${member.membership}`;
        website.innerHTML = `<a href="${member.website}" target="_blank">View Website</a>`;

        website.style.textDecoration = "none";
        card.setAttribute('class', 'member-card');
        pic.setAttribute('src', member.imageurl);
        pic.setAttribute('alt', `${member.name} image`);
        pic.setAttribute('loading', 'lazy');
        pic.setAttribute('width', '250');
        pic.setAttribute('height', '450');

        card.appendChild(name);
        card.appendChild(pic);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(website);

        cards.appendChild(card);

    });
}
getMembers();

const url = "data/members.json";

const cards = document.querySelector('article');

let membersData = [];
let isGridView = true;

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    membersData = data.members;
    displayMembers(membersData);
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

        if (isGridView) {
            website.innerHTML = `<a href="${member.website}" target="_blank">View Website</a>`;
        } else {
            website.innerHTML = `<a href="${member.website}" target="_blank">${member.website}</a>`
        }

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

document.getElementById("grid").addEventListener("click", () => {
    isGridView = true;
    document.querySelector("article").classList.remove("list");
    document.querySelector("article").classList.add("grid");
    displayMembers(membersData); // Re-render members in grid view
});

document.getElementById("list").addEventListener("click", () => {
    isGridView = false;
    document.querySelector("article").classList.remove("grid");
    document.querySelector("article").classList.add("list");
    displayMembers(membersData); // Re-render members in list view
});
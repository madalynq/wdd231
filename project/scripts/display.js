import { openModal } from './projects.js';

export function displayProjects(projects) {
    const cards = document.querySelector('.project-cards');
    cards.innerHTML = "";
    
    projects.forEach((project) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let hook = document.createElement('p');
        let yarnWeight = document.createElement('p');
        let yarnNumber = document.createElement('p');
        let estimatedWeight = document.createElement('p');
        let figure = document.createElement('figure');
        let pic = document.createElement('img');
        let button = document.createElement('button');

        name.textContent = project.name;
        hook.innerHTML = `<span class="label">Hook:</span> <span class="value">${project.hook}</span>`;
        yarnWeight.innerHTML = `<span class="label">Yarn Weight:</span> <span class="value">${project.weight}</span>`;
        yarnNumber.innerHTML = `<span class="label">Yarn #:</span> <span class="value">${project.number}</span>`;
        estimatedWeight.innerHTML = `<span class="label">Estimated Weight Needed:</span> <span class="value">${project.estimatedTotalWeight} ounces</span>`;
        card.setAttribute('class', 'single-project');
        pic.setAttribute('src', project.image);
        pic.setAttribute('alt', `${project.name} image`);
        pic.setAttribute('loading', 'lazy');
        pic.setAttribute('width', '200');
        pic.setAttribute('height', '200');
        pic.setAttribute('class', 'hover');
        figure.appendChild(pic);
        button.textContent = "Learn More";
        button.addEventListener('click', () => {
            openModal(project);
        });

        card.appendChild(name);
        card.appendChild(pic);
        card.appendChild(hook);
        card.appendChild(yarnWeight);
        card.appendChild(yarnNumber);
        card.appendChild(estimatedWeight);
        card.appendChild(button);

        cards.appendChild(card);
    });
}

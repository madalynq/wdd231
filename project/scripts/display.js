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
        hook.textContent = `Hook: ${project.hook}`;
        yarnWeight.textContent = `Yarn weight: ${project.weight}`;
        yarnNumber.textContent = `Yarn number: ${project.number}`;
        estimatedWeight.textContent = project.estimatedTotalWeight;
        card.setAttribute('class', 'single-project');
        pic.setAttribute('src', project.image);
        pic.setAttribute('alt', `${project.name} image`);
        pic.setAttribute('loading', 'lazy');
        pic.setAttribute('width', '200');
        pic.setAttribute('height', '200');
        pic.setAttribute('class', 'hover');
        figure.appendChild(pic);
        button.textContent = "Learn More";

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

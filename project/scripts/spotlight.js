import {projectFile} from "../data/project-library.js";

const spotlight = document.querySelector('#random-project');

function getSingleProject() {
    const projectData = projectFile.projects;

    const randomIndex = Math.floor(Math.random() * projectData.length);
    const selectedProject = projectData[randomIndex];

    displayProject(selectedProject);
}

function displayProject(project) {
    const img = spotlight.querySelector('img');
    img.src = project.image;
    img.alt = `${project.name} image`;

    const paragraph = spotlight.querySelector('p');
    paragraph.textContent = project.name;
        
}

getSingleProject();
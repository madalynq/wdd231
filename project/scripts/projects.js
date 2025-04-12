import { displayProjects } from "./display.js";
import { projectFile } from "../data/project-library.js";

displayProjects(projectFile.projects);

export function openModal(project) {
    const modal = document.querySelector('#modal');
    const modalContent = modal.querySelector('.modal-content');
    
    modalContent.innerHTML = `
      <h2>${project.name}</h2>
      <p>${project.description}</p>
      <a href="${project.patternLink}" target="_blank">View Pattern</a>
      <button id="closeModal">Close</button>
    `;
  
    modal.style.display = 'flex';
  
   
    document.querySelector('#closeModal').addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
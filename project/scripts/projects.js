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
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop() || "index.html"; // Handle root page
    console.log("Current page:", currentPage); // Debugging log

    document.querySelectorAll(".navigation a").forEach(link => {
        const href = link.getAttribute("href").split("/").pop(); // Extract file name
        console.log("Checking:", href); // Debugging log

        if (href === currentPage) {
            link.classList.add("active");
        }
    });
});

// Mobile menu toggle
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


document.getElementById("join-btn").addEventListener("click", function() {
    window.location.href = "#";
});
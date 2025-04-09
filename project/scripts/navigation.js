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

    // Mobile menu toggle (Ensuring elements exist first)
    const mainnav = document.querySelector('.navigation');
    const hambutton = document.querySelector('#menu');

    if (mainnav && hambutton) {
        hambutton.addEventListener('click', () => {
            mainnav.classList.toggle('show');
            hambutton.classList.toggle('show');
        });
    }
});
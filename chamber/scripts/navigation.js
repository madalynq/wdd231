document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navigation a");
    const currentPath = window.location.pathname.split("/").pop(); // Get current page filename

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });

    // Mobile menu toggle
    const mainnav = document.querySelector(".navigation");
    const hambutton = document.querySelector("#menu");

    hambutton.addEventListener("click", () => {
        mainnav.classList.toggle("show");
        hambutton.classList.toggle("show");
    });
});
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function() {
	let currentPage = window.location.pathname.split("/").pop(); // Get current page file name
	let navLinks = document.querySelectorAll(".navigation a");

	navLinks.forEach(link => {
		if (link.getAttribute("href") === currentPage) {
			link.classList.add("active");
		}
	});
});
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".accordion-toggle").forEach(button => {
      button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        button.classList.toggle("active");
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
      });
    });
  });
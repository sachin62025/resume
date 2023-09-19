// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("nav a");
  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }
});

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });

  // Show selected section
  const sections = document.querySelectorAll("section");
  for (const section of sections) {
    if (section.id === href.slice(1)) {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  }
}

 
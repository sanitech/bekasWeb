let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".links li a");
let link = document.querySelector(".links");
let filter = document.querySelector(".filter");
let links = document.querySelector(".links li");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".links li a[href*=" + id + "]")
          .classList.add("active");
        link.classList.remove("open-toggle");

        console.log(id);
      });
    }
  });
};
const toggle = document.getElementById("toggle");
const openFilter = document.getElementById("filter-mobile");
toggle.addEventListener("click", () => {
  link.classList.toggle("open-toggle");
});
openFilter.addEventListener("click", () => {
  filter.classList.toggle("open-filter");
});

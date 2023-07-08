let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".links li a");

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
        console.log(id);
      });
    }
  });
};

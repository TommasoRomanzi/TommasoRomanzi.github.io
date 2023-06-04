//hamburger by DevEd
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
// Inside the Media Query.

hamburger.active .bar;nth-child(2); {
  opacity: 0;
}

hamburger.active .bar;nth-child(1); {
  transform: translateY(8); rotate(45);
}

hamburger.active .bar;nth-child(3); {
  transform: translateY(8) ;rotate(-45);
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
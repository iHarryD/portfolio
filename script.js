// Variables

const hamburgerNav = document.querySelector("#hamburger-nav");
const crossNav = document.querySelector("#cross-nav");
const navBar = document.querySelector("nav");
const navItems = document.querySelectorAll("header nav ul li a");

// Event Listener

hamburgerNav.addEventListener("click", openPhoneNav);
crossNav.addEventListener("click", closePhoneNav);

// Functions

function openPhoneNav() {
  navBar.style.transform = "translateX(0)";
  document.body.classList.add("overlay");
}

function closePhoneNav() {
  navBar.style.transform = "translateX(100%)";
  document.body.classList.remove("overlay");
}

navItems.forEach((item) => {
  if (item.href === location.href) {
    item.classList.toggle("active");
  }
});

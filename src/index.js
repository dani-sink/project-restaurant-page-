import { contact_load } from "./Contact/contact.js";
import { home_load } from "./Home/home.js";
import { menu_load } from "./Menu/menu.js";

const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const contactButton = document.querySelector("#contact-btn");
const contentSection = document.querySelector("#content");

homeButton.addEventListener("click", function() {
    contentSection.replaceChildren();
    homeButton.classList.add("active");
    menuButton.classList.remove("active");
    contactButton.classList.remove("active");
    home_load();
});

menuButton.addEventListener("click", function() {
    contentSection.replaceChildren();
    homeButton.classList.remove("active");
    menuButton.classList.add("active");
    contactButton.classList.remove("active");
    menu_load();
});

contactButton.addEventListener("click", function(){
    contentSection.replaceChildren();
    homeButton.classList.remove("active");
    menuButton.classList.remove("active");
    contactButton.classList.add("active");
    contact_load();
});

home_load();
homeButton.classList.add("active");
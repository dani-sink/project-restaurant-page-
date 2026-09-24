import { contact_load } from "./Contact/contact.js";
import { home_load } from "./Home/home.js";
import { menu_load } from "./Menu/menu.js";

const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const contactButton = document.querySelector("#contact-btn");
const contentSection = document.querySelector("#content");

homeButton.addEventListener("click", function() {
    contentSection.replaceChildren();
    home_load();
});

menuButton.addEventListener("click", function() {
    contentSection.replaceChildren();
    menu_load();
});

contactButton.addEventListener("click", function(){
    contentSection.replaceChildren();
    contact_load();
});

home_load();

console.log("Hello");
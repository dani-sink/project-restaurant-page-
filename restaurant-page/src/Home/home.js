import { hero_section } from "./hero_section.js";
import { card_section } from "./card_section.js";

export const home_load = function(){
    const contentSection = document.querySelector("#content");
    
    const heroSection = hero_section();
    const cardSection = card_section();
    contentSection.appendChild(heroSection);
    contentSection.appendChild(cardSection);
}
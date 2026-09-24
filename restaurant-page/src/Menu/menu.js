import { menuSummary } from "./menu_summary";
import { menu_item_load } from "./menu_item";

export const menu_load = function() {
    const contentSection = document.querySelector("#content");

    const menuHeader = document.createElement("h2");
    menuHeader.textContent = "The menu";
    const menuSubHead = document.createElement("p");
    menuSubHead.textContent = "Made to share. Changes with the season — this is roughly what's on now.";
    contentSection.appendChild(menuHeader);
    contentSection.appendChild(menuSubHead);

    for (const menuItem of menuSummary) {
        const menuItemSection = menu_item_load(menuItem.menu_title, menuItem.menu_summary);
        contentSection.appendChild(menuItemSection);
    }
}
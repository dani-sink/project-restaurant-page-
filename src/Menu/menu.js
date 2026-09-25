import { menuSummary } from "./menu_summary";
import { menu_item_load } from "./menu_item";

export const menu_load = function() {
    const contentSection = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuHeaderContainer = document.createElement("div");
    menuHeaderContainer.classList.add("menu-header-container");
    const menuHeader = document.createElement("h2");
    menuHeader.textContent = "The menu";
    const menuSubHead = document.createElement("p");

    menuSubHead.textContent = "Made to share. Changes with the season — this is roughly what's on now.";

    menuHeaderContainer.appendChild(menuHeader);
    menuHeaderContainer.appendChild(menuSubHead);

    menuContainer.appendChild(menuHeaderContainer);

    for (const menuItem of menuSummary) {
        const menuItemSection = menu_item_load(menuItem.menu_title, menuItem.menu_summary);
        menuContainer.appendChild(menuItemSection);
    }

    contentSection.appendChild(menuContainer);
}
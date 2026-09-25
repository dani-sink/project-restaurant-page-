export const menu_item_load = function(menu_title, menu_summary) {
    const menuItemSection = document.createElement("section");
    menuItemSection.classList.add("menu-item-section");

    const menuSectionHeader = document.createElement("h3");
    menuSectionHeader.classList.add("menu-section-header");
    menuSectionHeader.textContent = menu_title;
    menuItemSection.appendChild(menuSectionHeader);

    for (const menu_item of menu_summary) {
        const menuSectionItemContainer = document.createElement("div");
        menuSectionItemContainer.classList.add("menu-dish");

        const menuSectionItemName = document.createElement("p");
        menuSectionItemName.classList.add("menu-dish-name");
        menuSectionItemName.textContent = menu_item.name;

        const menuSectionItemIngredients = document.createElement("p");
        menuSectionItemIngredients.classList.add("menu-dish-ingredients");
        menuSectionItemIngredients.textContent = menu_item.ingredients;

        const menuSectionItemPrice = document.createElement("p");
        menuSectionItemPrice.classList.add("menu-dish-price");
        menuSectionItemPrice.textContent = String(menu_item.price);

        menuSectionItemContainer.appendChild(menuSectionItemName);
        menuSectionItemContainer.appendChild(menuSectionItemPrice);
        menuSectionItemContainer.appendChild(menuSectionItemIngredients);
        menuItemSection.appendChild(menuSectionItemContainer);
    }

    return menuItemSection;
}
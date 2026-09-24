export const menu_item_load = function(menu_title, menu_summary) {
    const menuItemSection = document.createElement("section");

    const menuSectionHeader = document.createElement("h3");
    menuSectionHeader.textContent = menu_title;
    const menuSectionDivider = document.createElement("hr");
    menuItemSection.appendChild(menuSectionHeader);
    menuItemSection.appendChild(menuSectionDivider);

    for (const menu_item of menu_summary) {
        const menuSectionItemContainer = document.createElement("div");
        const menuSectionItemName = document.createElement("p");
        menuSectionItemName.textContent = menu_item.name;
        const menuSectionItemIngredients = document.createElement("p");
        menuSectionItemIngredients.textContent = menu_item.ingredients;
        const menuSectionItemPrice = document.createElement("p");
        menuSectionItemPrice.textContent = String(menu_item.price);
        menuSectionItemContainer.appendChild(menuSectionItemName);
        menuSectionItemContainer.appendChild(menuSectionItemIngredients);
        menuSectionItemContainer.appendChild(menuSectionItemPrice);
        menuItemSection.appendChild(menuSectionItemContainer);
    }

    return menuItemSection;
}
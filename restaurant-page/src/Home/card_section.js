export const card_section = function () {
    // Whole section container
    const cardSection = document.createElement("section");
    cardSection.id = "card-section";

    const cardGridContainer = document.createElement("div");
    cardGridContainer.classList.add("card-grid-container");
    
    // First Card
    const firstCardContainer = document.createElement("div");
    firstCardContainer.id = "first-card-container";
    const firstCardHighlight = document.createElement("h2");
    firstCardHighlight.textContent = "Everything touches the flame.";
    const firstCardText = document.createElement("p");
    firstCardText.textContent = "We cook over oak and almond wood because it makes food taste like somewhere. The menu changes with what the farms brings us, so it's short, and it's different every few weeks.";
    firstCardContainer.appendChild(firstCardHighlight);
    firstCardContainer.appendChild(firstCardText);

    // Second Card
    const secondCardContainer = document.createElement("div");
    secondCardContainer.id = "second-card-container";
    const secondCardHighlight = document.createElement("h3");
    secondCardHighlight.textContent = "Over live fire";
    const secondCardText = document.createElement("p");
    secondCardText.textContent = "One hearth, a wood oven, and a grill built for coals — every plate passes through the flame.";
    secondCardContainer.appendChild(secondCardHighlight);
    secondCardContainer.appendChild(secondCardText);

    // Third Card
    const thirdCardContainer = document.createElement("div");
    thirdCardContainer.id = "third-card-container";
    const thirdCardHighlight = document.createElement("h3");
    thirdCardHighlight.textContent = "From nearby farms";
    const thirdCardText = document.createElement("p");
    thirdCardText.textContent = "Produce picked the same morning it's cooked, from growers we know by name.";
    thirdCardContainer.appendChild(thirdCardHighlight);
    thirdCardContainer.appendChild(thirdCardText);

    // Fourth Card
    const fourthCardContainer = document.createElement("div");
    fourthCardContainer.id = "fourth-card-container";
    const fourthCardHighlight = document.createElement("h3");
    fourthCardHighlight.textContent = "Natural wine";
    const fourthCardText = document.createElement("p");
    fourthCardText.textContent = "A small, low-intervention list that leans toward the odd and the delicious.";
    fourthCardContainer.appendChild(fourthCardHighlight);
    fourthCardContainer.appendChild(fourthCardText);

    cardGridContainer.appendChild(secondCardContainer);
    cardGridContainer.appendChild(thirdCardContainer);
    cardGridContainer.appendChild(fourthCardContainer);

    cardSection.appendChild(firstCardContainer);
    cardSection.appendChild(cardGridContainer);

    return cardSection;
}
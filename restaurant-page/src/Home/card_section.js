export const card_section = function () {
    // Whole section container
    const cardSection = document.createElement("section");
    
    // First Card
    const firstCardContainer = document.createElement("div");
    const firstCardHighlight = document.createElement("h2");
    firstCardHighlight.textContent = "Everything touches the flame.";
    const firstCardText = document.createElement("p");
    firstCardText.textContent = "We cook over oak and almond wood because it makes food taste like somewhere. The menu changes with what the farms brings us, so it's short, and it's different every few weeks.";
    firstCardContainer.appendChild(firstCardHighlight);
    firstCardContainer.appendChild(firstCardText);

    // Second Card
    const secondCardContainer = document.createElement("div");
    const secondCardHighlight = document.createElement("h3");
    secondCardHighlight.textContent = "Over live fire";
    const secondCardText = document.createElement("p");
    secondCardText.textContent = "One hearth, a wood oven, and a grill built for coals — every plate passes through the flame.";
    secondCardContainer.appendChild(secondCardHighlight);
    secondCardContainer.appendChild(secondCardText);

    // Third Card
    const thirdCardContainer = document.createElement("div");
    const thirdCardHighlight = document.createElement("h3");
    thirdCardHighlight.textContent = "From nearby farms";
    const thirdCardText = document.createElement("p");
    thirdCardText.textContent = "Produce picked the same morning it's cooked, from growers we know by name.";
    thirdCardContainer.appendChild(thirdCardHighlight);
    thirdCardContainer.appendChild(thirdCardText);

    // Fourth Card
    const fourthCardContainer = document.createElement("div");
    const fourthCardHighlight = document.createElement("h3");
    fourthCardHighlight.textContent = "Natural wine";
    const fourthCardText = document.createElement("p");
    fourthCardText.textContent = "A small, low-intervention list that leans toward the odd and the delicious.";
    fourthCardContainer.appendChild(fourthCardHighlight);
    fourthCardContainer.appendChild(fourthCardText);

    cardSection.appendChild(firstCardContainer);
    cardSection.appendChild(secondCardContainer);
    cardSection.appendChild(thirdCardContainer);
    cardSection.appendChild(fourthCardContainer);

    return cardSection;
}
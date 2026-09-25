import "/src/styles.css";

export const hero_section = function() {
    const heroSection = document.createElement("section");
    heroSection.id = "hero-section";

    const heroTextContainer = document.createElement("div");
    heroTextContainer.classList.add("hero-text-container");

    const eyebrow = document.createElement("p");
    eyebrow.id = "hero-eyebrow";
    eyebrow.textContent = "Wood-fired · dinner nightly";

    const headline = document.createElement("h1");
    headline.id = "hero-headline";
    headline.textContent = "A long table by the fire.";

    const subhead = document.createElement("p");
    subhead.id = "hero-subhead";
    subhead.textContent = "Live-fire cooking, natural wine, and vegetables from the farms just north of town. Come hungry, stay late.";

    const address = document.createElement("p");
    address.id = "hero-address";
    address.textContent = "Reservations recommended · 142 Kiln Street";

    heroTextContainer.appendChild(eyebrow);
    heroTextContainer.appendChild(headline);
    heroTextContainer.appendChild(subhead);
    heroTextContainer.appendChild(address);

    heroSection.appendChild(heroTextContainer);

    return heroSection;
}
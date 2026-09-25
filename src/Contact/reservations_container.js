export const reservations_container = function() {
    const reservationsContainer = document.createElement("div");
    reservationsContainer.classList.add("reservations-container");

    const reservationsText = document.createElement("p");
    reservationsText.classList.add("reservations-text");
    reservationsText.textContent = "Reservations";
    
    const reservationsSubtext = document.createElement("p");
    reservationsSubtext.classList.add("reservations-subtext");
    reservationsSubtext.textContent = "Book a table up to 30 days ahead. Walk-ins welcome at the bar.";

    const reservationsButton = document.createElement("button");
    reservationsButton.classList.add("reservations-button");
    reservationsButton.textContent = "Book a table";

    reservationsContainer.appendChild(reservationsText);
    reservationsContainer.appendChild(reservationsSubtext);
    reservationsContainer.appendChild(reservationsButton);
    return reservationsContainer;
}
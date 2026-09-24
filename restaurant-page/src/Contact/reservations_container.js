export const reservations_container = function() {
    const reservationsContainer = document.createElement("div");

    const reservationsText = document.createElement("p");
    reservationsText.textContent = "Reservations";
    
    const reservationsSubtext = document.createElement("p");
    reservationsSubtext.textContent = "Book a table up to 30 days ahead. Walk-ins welcome at the bar.";

    const reservationsButton = document.createElement("button");
    reservationsButton.textContent = "Book a table";

    reservationsContainer.appendChild(reservationsText);
    reservationsContainer.appendChild(reservationsSubtext);
    reservationsContainer.appendChild(reservationsButton);
    return reservationsContainer;
}
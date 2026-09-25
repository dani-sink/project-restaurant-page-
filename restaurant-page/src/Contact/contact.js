import { hours_container } from "./hours_container";
import { reservations_container } from "./reservations_container";
import { where_container } from "./where_container";

export const contact_load = function() {
    const contentSection = document.querySelector("#content");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const contactHeader = document.createElement("h2");
    contactHeader.classList.add("contact-header");
    contactHeader.textContent = "Find us";

    const contactGridContainer = document.createElement("div");
    contactGridContainer.classList.add("contact-grid-container");
    
    // Where container
    const addressContainer = where_container();

    // Reservations container
    const reservationsContainer = reservations_container();

    // Hours of operation container
    const hoursContainer = hours_container();

    const addressAndReservationsContainer = document.createElement("div");
    addressAndReservationsContainer.classList.add("address-and-reservations");
    addressAndReservationsContainer.appendChild(addressContainer);
    addressAndReservationsContainer.appendChild(reservationsContainer);

    contactContainer.appendChild(contactHeader);
    contactGridContainer.appendChild(addressAndReservationsContainer);
    contactGridContainer.appendChild(hoursContainer);

    contactContainer.appendChild(contactGridContainer);

    contentSection.appendChild(contactContainer);
}
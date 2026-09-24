import { hours_container } from "./hours_container";
import { reservations_container } from "./reservations_container";
import { where_container } from "./where_container";

export const contact_load = function() {
    const contentSection = document.querySelector("#content");

    const contactHeader = document.createElement("h2");
    contactHeader.textContent = "Find us";

    // Where container
    const addressContainer = where_container();

    // Reservations container
    const reservationsContainer = reservations_container();

    // Hours of operation container
    const hoursContainer = hours_container();

    contentSection.appendChild(contactHeader);
    contentSection.appendChild(addressContainer);
    contentSection.appendChild(reservationsContainer);
    contentSection.appendChild(hoursContainer);
}
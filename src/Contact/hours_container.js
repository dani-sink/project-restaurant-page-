export const hours_container = function(){
    const hoursContainer = document.createElement("div");

    const hoursText = document.createElement("p");
    hoursText.classList.add("hours-text");
    hoursText.textContent = "Hours";

    hoursContainer.appendChild(hoursText);

    const scheduleData = [
        {
            days: "Tue — Thu", 
            hours: "5 — 10 pm",
        },
        {
            days: "Fri — Sat",
            hours: "5 — 11 pm",
        },
        {
            days: "Sunday",
            hours: "4 — 9 pm",
        },
        {
            days: "Monday",
            hours: "Closed",
        },
    ]

    for (const data of scheduleData) {
        const hoursRow = document.createElement("div");
        hoursRow.classList.add("hours-row");

        const daysOfTheWeek = document.createElement("p");
        daysOfTheWeek.classList.add("days-of-the-week");
        daysOfTheWeek.textContent = data.days;

        const hoursOfOperation = document.createElement("p");
        hoursOfOperation.classList.add("hours-of-operation");
        hoursOfOperation.textContent = data.hours;

        hoursRow.appendChild(daysOfTheWeek);
        hoursRow.appendChild(hoursOfOperation);
        hoursContainer.appendChild(hoursRow);
    }


    return hoursContainer;
}
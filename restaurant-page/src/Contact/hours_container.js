export const hours_container = function(){
    const hoursContainer = document.createElement("div");

    const hoursText = document.createElement("p");
    hoursText.textContent = "Hours";

    // Create the table container elements
    const hoursTable = document.createElement("table");
    const hoursTableHead = document.createElement("thead");
    const hoursTableBody = document.createElement("tbody");

    // Create and append the Header Row
    const headerRow = document.createElement("tr");
    const headers = ["Hours"];

    headers.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });
    hoursTableHead.appendChild(headerRow);

    // Create and append the data rows
    const scheduleData = [
        ["Tue — Thu", "5 — 10 pm"],
        ["Fri — Sat", "5 — 11 pm"],
        ["Sunday", "4 — 9 pm"],
        ["Monday", "Closed"],
    ]

    scheduleData.forEach(rowData => {
        const row = document.createElement("tr");

        rowData.forEach(cellData => {
            const td = document.createElement("td");
            td.textContent = cellData;
            row.appendChild(td);
        });

        hoursTableBody.appendChild(row);
    });

    // Assemble the table components
    hoursTable.appendChild(hoursTableHead);
    hoursTable.appendChild(hoursTableBody);

    // Link text and table
    hoursContainer.appendChild(hoursText);
    hoursContainer.appendChild(hoursTable);

    return hoursContainer;
}
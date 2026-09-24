export const where_container = function() {
    const addressContainer = document.createElement("div");

    const whereText = document.createElement("p");
    whereText.textContent = "Where";
    
    const addressLineOne = document.createElement("p");
    addressLineOne.textContent = "142 Kiln Street";

    const addressLineTwo = document.createElement("p");
    addressLineTwo.textContent = "Old Mill District";

    const addressNumber = document.createElement("p");
    addressNumber.textContent = "(555) 019-4471";

    addressContainer.appendChild(whereText);
    addressContainer.appendChild(addressLineOne);
    addressContainer.appendChild(addressLineTwo);
    addressContainer.appendChild(addressNumber);
    return addressContainer;
}
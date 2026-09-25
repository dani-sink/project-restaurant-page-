export const where_container = function() {
    const addressContainer = document.createElement("div");
    addressContainer.classList.add("where-container");

    const whereText = document.createElement("p");
    whereText.classList.add("where-text");
    whereText.textContent = "Where";
    
    const addressLineOne = document.createElement("p");
    addressLineOne.classList.add("address-line-one");
    addressLineOne.textContent = "142 Kiln Street";
    
    const addressLineTwo = document.createElement("p");
    addressLineTwo.classList.add("address-line-two");
    addressLineTwo.textContent = "Old Mill District";
    
    const addressNumber = document.createElement("p");
    addressNumber.classList.add("address-number");
    addressNumber.textContent = "(555) 019-4471";

    addressContainer.appendChild(whereText);
    addressContainer.appendChild(addressLineOne);
    addressContainer.appendChild(addressLineTwo);
    addressContainer.appendChild(addressNumber);
    return addressContainer;
}
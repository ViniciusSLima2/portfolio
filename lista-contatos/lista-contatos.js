const contactsObject = JSON.parse(localStorage.getItem("contacts"))
const contacts = contactsObject["data"]
const deleteAllRowsBtn = document.querySelector(".delete-messages")
const table = document.querySelector(".contact-table")

contacts.forEach((contact)=> {
    let row = table.insertRow(-1)
    let nameCell = row.insertCell(-1)
    nameCell.innerHTML = contact["name"]
    let emailCell = row.insertCell(-1)
    emailCell.innerHTML = contact["email"]
    let descriptionCell = row.insertCell(-1)
    descriptionCell.classList.add("remove-row-btn")
    descriptionCell.innerHTML = contact["description"]

    let deleteCell = row.insertCell(-1);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Remover";
    deleteButton.addEventListener("click", () => {
        table.deleteRow(row.rowIndex);
        removeRowById(contact.id);
    });
    deleteCell.appendChild(deleteButton);

})

function removeRowById(idToRemove){
    const newMessagesArray = contacts.filter(item => item.id !== idToRemove)
    let newContactsObject = contactsObject
    newContactsObject["data"] = newMessagesArray
    localStorage.setItem("contacts", JSON.stringify(newContactsObject))
}

deleteAllRowsBtn.addEventListener("click", () => {
    contacts.forEach((contact, index) => {
        table.deleteRow(1)
    })
    localStorage.removeItem("contacts")
})


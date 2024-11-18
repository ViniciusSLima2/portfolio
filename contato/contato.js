function handleSubmit(event) {
    event.preventDefault();
    const contacts = JSON.parse(localStorage.getItem("contacts"))
    
    if (contacts === null) {
        console.log("1")
        localStorage.setItem("contacts", JSON.stringify({
            "data": [{
                "name": document.forms["contact"]["name"].value,
                "email": document.forms["contact"]["email"].value,
                "description": document.forms["contact"]["description"].value,
            }]
        }));
    } else {
        console.log("2")
        localStorage.setItem("contacts", JSON.stringify({
            "data": [...contacts["data"], {
                "name": document.forms["contact"]["name"].value,
                "email": document.forms["contact"]["email"].value,
                "description": document.forms["contact"]["description"].value,
            }]
        }));
    }

}
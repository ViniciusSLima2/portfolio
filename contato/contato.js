function handleSubmit(event) {
    event.preventDefault();
    const contacts = JSON.parse(localStorage.getItem("contacts"))
    
    if (contacts === null) {
        console.log("1")
        localStorage.setItem("contacts", JSON.stringify({
            "data": [{
                "id" : 1,
                "name": document.forms["contact"]["name"].value,
                "email": document.forms["contact"]["email"].value,
                "description": document.forms["contact"]["description"].value,
            }],
            "lastIndex" : 1
        }));
    } else {
        console.log("2")
        const lastIndex = contacts["lastIndex"]
        localStorage.setItem("contacts", JSON.stringify({
            "data": [...contacts["data"], {
                "id" : lastIndex + 1,
                "name": document.forms["contact"]["name"].value,
                "email": document.forms["contact"]["email"].value,
                "description": document.forms["contact"]["description"].value,
            }],
            "lastIndex" : lastIndex + 1
        }));
    }

}
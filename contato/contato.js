function handleSubmit(event) {
    event.preventDefault();
    const contacts = JSON.parse(localStorage.getItem("contacts"))
    
    if (contacts === null) {
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
    alert("Mensagem enviada com sucesso!")
    document.forms["contact"]["name"].value = "";
    document.forms["contact"]["email"].value = "";
    document.forms["contact"]["description"].value = "";
}
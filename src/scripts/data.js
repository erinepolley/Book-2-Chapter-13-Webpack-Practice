
const API = {
    saveContactToJson(contactObj) {
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactObj)
        })
            .then(response => response.json())
    },

    getContactsFromJson() {
        return fetch("http://localhost:8088/contacts")
            .then(response => response.json())
            // .then(response => console.log(response))
    }
}

export default API
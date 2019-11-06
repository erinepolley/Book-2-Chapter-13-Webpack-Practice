const htmlGenerator = {
    entriesHtml(objFromJson) {
        return `
            <h3>${objFromJson.name}</h3>
            <p>${objFromJson.phone}</p>
            <p>${objFromJson.address}</p>
            `
    },

    formHtml () {
        return `
        <header>
            <h1>Add Contact</h1>
        </header>
        <form id="contact-form">
            <fieldset>
                <label for="name">Name:</label>
                <br>
                <input type="text" id="name" name="name">
                <br>
                <label for="phone">Phone Number:</label>
                <br>
                <input type="tel" id="phone" name="phone" placeholder="ex. 888-888-8888">
                <br>
                <label for="address">Address:</label>
                <br>
                <input type="text" id="address" name="address">
                <br>
                <button id="button">Submit</button>
        </form>
        
        `

    }
}

export default htmlGenerator
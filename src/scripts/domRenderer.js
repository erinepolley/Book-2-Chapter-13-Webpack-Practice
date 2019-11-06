import htmlGenerator from "./contactFormHtml.js"

const domRenderer = {
    innerHtmlString: "",
    renderContactToDom (entryObj) {
        let divForEntries = document.querySelector("#contacts-container")
        this.innerHtmlString += htmlGenerator.entriesHtml(entryObj)
        divForEntries.innerHTML = this.innerHtmlString
    },

    renderFormToDom() {
        let divForForm = document.querySelector("#form-container")
        divForForm.innerHTML = htmlGenerator.formHtml()
        
    }



}

export default domRenderer
import API from "./data.js"
import domRenderer from "./domRenderer"

console.log("Hi there. Does this work?")

domRenderer.renderFormToDom()

API.getContactsFromJson()
    .then(parsedEntries => {
        parsedEntries.forEach(entryObj => {
            console.log(entryObj)
        domRenderer.renderContactToDom(entryObj)
    })
})

domRenderer.renderFormToDom()
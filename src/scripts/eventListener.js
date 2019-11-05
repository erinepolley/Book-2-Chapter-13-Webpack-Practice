import factoryFunction from "./objectFactoryFunction.js"
import API from "./data.js"

const eventListeners = {
    submitButtonListener() {
        let submitButtonListenerDiv = document.querySelector("#button")
        submitButtonListenerDiv.addEventListener("click", () => {
            let objName = document.querySelector("#name").value
            let objPhone = document.querySelector("#phone").value
            let objAddress = document.querySelector("#address").value

            let returnedFactoryObject = factoryFunction.factoryFunctionMaker(objName, objPhone, objAddress)

            API.saveContactToJson(returnedFactoryObject)
                .then(API.getContactsFromJson)
                .then(parsedEntries => {
                    parsedEntries.forEach(entryObj => {
                        domRenderer.renderContactToDom(entryObj)
                        location.reload(true)


                        //get the values of all the boxes
                        //pass them through a factory function
                        //post them to JSON
                        //get new list and render to DOM

                    })
                })
        })
    }
}

export default eventListeners
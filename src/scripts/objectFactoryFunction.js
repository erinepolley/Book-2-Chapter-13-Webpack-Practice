const factoryFunction = {
    factoryFunctionMaker (objName, objPhone, objAddress) { 
        return {
        name: objName,
        phone: objPhone,
        address: objAddress
        }
    }
}

export default factoryFunction
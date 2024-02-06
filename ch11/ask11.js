function filterobject (antikeimeno, pinakaskleidion) {

    let newobject= {}

    for (kleidi of pinakaskleidion) {
        newobject[kleidi] = antikeimeno[kleidi]

    }

    return newobject
}



console.log (filterobject ( {name:"Meropi", location:"Athens", age:24}, ["name", "age"] ))

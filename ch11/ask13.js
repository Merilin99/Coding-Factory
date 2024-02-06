function newobject (antikeimeno, sinartisi) {

    let antikeimenoep= {};

    for (kleidi in antikeimeno) {

        antikeimenoep[sinartisi(kleidi)] = sinartisi(antikeimeno[kleidi]);
    }
    
    return (antikeimenoep)
}




function sinartisimapping (timi) {
    return (timi.toUpperCase()) 
}

console.log (newobject ({onoma:"meropi"}, sinartisimapping)); 
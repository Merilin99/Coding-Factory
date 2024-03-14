function newobject (antikeimeno, sinartisi) {

    let antikeimenoep= {};

    for (kleidi in antikeimeno) {

        antikeimenoep[kleidi] = sinartisi(antikeimeno[kleidi]);
    }
    
    return (antikeimenoep)
}

let objecttimon= {
    timi1:5, timi2:10, timi3:12

}

function sinartisimapping (timi) {
    return (timi * 2) 
}

console.log (newobject (objecttimon, sinartisimapping)); 
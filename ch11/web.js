// Δήλωση πίνακα
let array = ['Athens', 'London', 'Paris']
let numbers = [1, 5, -600, 78]
// Δήλωση κενού πίνακα
let empty = []

// Δήλωση ενός Object
let user = {
    name: 'Myname',
    id: 1
}
// Δήλωση κενού Object
let emptyObj = {}


// Πρόσβαση στα attributes ενός αντικειμένου με τον τελεστή .
console.log (user.name, user.id)

// Δήλωση μίας σταθεράς
// Δεν μπορεί να γίνει αυτό a = b, διότι η a είναι σταθερά (const)
const a = "StatheraA";
const b = "StatheraB";


// Δήλωση μιας μεταβηλητής με το let
// Εδώ μπορεί να γίνει αυτό x = y
let x = 5
let y = 7
x = y


// Δήλωση συνάρτησης με ECMAscript 5
function myfunc (element) {
    console.log (element)
}

// Δήλωση συνάρτησης με ECMAscript 6
const myfunc = (element) => {
    console.log (element)
}


// Functional μέθοδος forEach () στους πίνακες, για την προσπέλαση των στοιχείων τους
// Για κάθε element του array, εκτελείται η συνάρτηση myfunc ()
array.forEach ( (element) => myfunc (element) )

// To ίδιο με το πάνω, μόνο που εδώ το σώμα της συνάρτησης βρίσκεται μέσα στα άγγυστρα {}
array.forEach ( (element) => {
    console.log (element)
} )


let array= [
    {name:"Alice", age:30},
    {name: "Bob", age:25},
    {name:"Charlie", age:28}
]

let newarray= array.filter ( (antikeimeno) => { if (antikeimeno.age <30) return true})

console.log (JSON.stringify (newarray))
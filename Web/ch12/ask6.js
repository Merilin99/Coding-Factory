let array= [
    {name:"Alice", age:30},
    {name: "Bob", age:25},
    {name:"Charlie", age:28}
]

let newarray= array.map ( (antikeimeno) => { return {name:antikeimeno.name} })

console.log (JSON.stringify (newarray))
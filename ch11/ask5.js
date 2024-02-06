const user = {
    name : "Meropi",
    age: 24,
    city: "Athens", 

    hello : function () {
       console.log ("Hello, ", this.name)
     
    }
    
}


user.hello ()


// function hello () {
//     console.log ("Hello, ", user.name)
// }

// hello ()
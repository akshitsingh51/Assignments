// Write a function that takes a user as an input and greets them with their name and age

let user = {
    name : "Akshit Singh",
    age : 19,
    gender : "male"
}

function greet(user) {
    if(user.gender === "male") {
        console.log(`Hi Mr ${user.name}, your age is ${user.age}`);
    }
    else if(user.gender === "female") {
        console.log(`Hi Mrs ${user.name}, your age is ${user.age}`)
    }
    else {
        console.log(`Hi others ${user.name}, your age is ${user.age}`)
    }
}

greet(user);

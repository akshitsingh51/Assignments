// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

function findAdults(users) {
    let result = users.filter((user) => {
        return user.age >= 18;
    });
    return result;
}

let users = [{
    name : "Akshit Singh",
    age : 19
}, {
    name : "raman",
    age : 17
}, {
    name : "naman",
    age : 20
}];

let ans = findAdults(users);

console.log(ans);

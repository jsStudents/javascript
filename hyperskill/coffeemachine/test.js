const input = require('prompt-sync')();

let user = {
    age: undefined
}

let newUser = {
    newAge: () => user.age + 18
}
user.age = +input();
console.log(user.age, newUser.newAge());
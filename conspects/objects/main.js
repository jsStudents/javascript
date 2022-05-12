const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 37,
    fullName: () => console.log(user.firstName + user.lastName),  // в стрелочных функциях нельзя использовать this
    sayHi: function () {console.log(`My age is ${this.age}`)}
}
user.fullName();
user.sayHi();



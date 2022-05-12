const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 37,
    sayHi: () => console.log('Hi')
}
const workers = ['Mike', 'John', 'Sam'];

/*
Деструктуризация параметров функции, способ передачи параметров в функцию
 */
const sayName = ({firstName, lastName}) => console.log(`I am ${firstName} ${lastName}`);
sayName(user);

/*
деструктуризация массива, присвоение переменным значениями из массива
 */
const [worker1, worker2, worker3] = workers;
console.log(worker1, worker2, worker3);

/*
деструктуризация объекта, присвоение переменным свойствами объекта
 */
const {firstName, lastName} = user;
console.log(firstName + '\n' + lastName);
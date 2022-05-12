const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 37,
}

const arrKey = Object.keys(user);  // массив ключей объекта
const arrValues = Object.values(user);  // Массив значений объекта
const arrEntries = Object.entries(user);  // Массив массивов по типу ключ/значение

/*
копирование объектов
 */

const user2 = Object.assign({}, user);  // не копирует вложенные свойства
const user3 = {... user};  // не копирует вложенные свойства
const user4 = JSON.parse(JSON.stringify(user));  // копирует вложенные свойства

/*
итерации по объектам
 */
for (const key in user) {
    console.log(key, user[key]);
}

Object.keys(user2).forEach(key => console.log(key, user2[key]));
Object.values(user3).forEach(value => console.log(value));
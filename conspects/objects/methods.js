const user = {
    firstName: 'Nacht',
    lastName: 'Gast',
    age: 37,
}

const arrKey = Object.keys(user);  // массив ключей объекта
const arrValues = Object.values(user);  // Массив значений объекта
const arrEntries = Object.entries(user);  // Массив массивов по типу ключ/значение
console.log(arrEntries);
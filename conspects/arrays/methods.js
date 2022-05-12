const myArray = [1, 'Moscow', 2, 'Saransk', 3, true];

// методы массивов (32)


// 1: длина масива
console.log(myArray.length); // 5

// 2: добавление в конец
myArray.push('I');   // [1, 'Moscow', 2 , 'Saransk', 3, true, 'I']

// 3: удаление с конца (возвращает удаленный элемент)
myArray.pop();  // [1, 'Moscow', 2 , 'Saransk', 3, true]

// 4: добавление в начало
myArray.unshift('I');  // [1, 'Moscow', 2 , 'Saransk', 3, true, 'I']

// 5: удаление с начала (возвращает удаленный элемент)
myArray.shift();  // ['Moscow', 2 , 'Saransk', 3, true, 'I']

// 6: удаление и замена (возвращает массив удаленных элементов)
myArray.splice(1, 2, "Evgen", 33, 5);  // [ 1, 'Evgen', 33, 5, 'Saransk', 3, true ]

// 7: копирование по индексам (возвращает новый массив)
const newArray = myArray.slice(1, 3);  // [ 'Evgen', 33 ] c 1 по 3 индекс

// 8: копирование из массивов и/или других значений
const testArray = myArray.concat(newArray, 5, 'Loh');

// 9: пербор значений
myArray.forEach((el, index, array) => {
    console.log('Элемент ' + el + ' имеет индекс ' + index + ' в массиве ' + '[' + array + ']');
})

// 10: поиск индекса значения в массиве
myArray.indexOf('Saransk', 0);  // возвращает индекс значения Saransk начиная поиск с индекса 0(необ) если нет вернет -1

// 11: тоже самое но с конца
myArray.lastIndexOf('Saransk', -1);  // возвращает индекс значения Saransk начиная поиск с индекса -1(посл) (необ) если нет вернет -1

// 12: поиск наличия значения в массиве
myArray.includes('Evgen', 0) // вернет true если значение Evgen есть в массиве начиная с индекса 0(необ) иначе false

// 13: поиск первого значения с условием
const users = [
    {id: 1, name: "Evgen"},
    {id: 2, name: "Sosok"},
    {id: 3, name: "Kosov"},
]
let userId2 = users.find((user, index, array) => user.id === 2);  // Sosok если нет то undefined

// 14: тоже самое но индекс элемента
let indexUserId2 = users.findIndex(user => user.id === 2);  // 1 если нет то -1

// 15: поиск всех значений с условием, возвращает новый массив
let ifStrings = users.filter(user => typeof user.name === 'string');

// 16: создает новый массив с условием
const lengthName = users.map(user => user.name.length);  // [ 5, 5, 5 ]

// 17: Сортировка (нужна функция для сортировки)
const numbers = [1, 3, 2, 8, 6, 4, 7, 9, 5];
numbers.sort((a, b) => a - b);  // числа по возрастанию
numbers.sort((a, b) => b - a);  // числа по убыванию


// 18: разворот
numbers.reverse();

// 19: Массив из строки по разделителю
let arr = 'Евген сосет хуи'.split(' ');  // [ 'Евген', 'сосет', 'хуи' ]

// 20: наоборот
let oldString = arr.join(' ');

// 21: вычисления какого-нибудь единого значения на основе всего массива
let summ = numbers.reduce((sum, current) => sum + current);  // 45 (сумма всех чисел)

// 22: тоже самое только с конца
summ = numbers.reduceRight((sum, current) => sum + current);  // 45 (сумма всех чисел)

// 23: удовлетворяет ли любой элемент условию (вернет true or false)
console.log(numbers.some(el => el % 2 === 0));  // true

// 24: удовлетворяет ли все элементы условию (вернет true or false)
console.log(numbers.every(el => el % 2 === 0));  // false

// 25: массив массивов в один массив (только для одного уровня!!)
const someArr = [[1, 2, 3], ['evgen', true]];
const newSomeArr = someArr.flat();  // [ 1, 2, 3, 'evgen', true ]

// 26: Заполнить массив
arr = new Array(10);
arr.fill(55, 0, 10);

// 27: Массив как строка
console.log(arr.toString());



let myString = 'I Learn JavaScript';

/*
нарезка (возвращает новую строку)
*/
let newString = myString.slice(8);  // JavaScript

/*
разделение (возвращает массив)
 */
newString = myString.split(' ');
console.log(newString);  // [ 'I', 'Learn', 'JavaScript' ]

/*
замена
 */
newString = myString.replace(/a/g, 'y');
console.log(newString);
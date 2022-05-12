/*
How iteration arrays!
 */

const myArrays = [1, 2, -7, 'item4', true, 'item6'];

// simple -for-
for (let i = 0; i < myArrays.length; i++) {
    console.log(myArrays[i]);
}

// -forEach-  !!! not mutate myArrays and not return new array
myArrays.forEach(el => console.log(el));
myArrays.forEach((item, index, array) => {
    console.log('myArrays[' + index + '] = ' + item + ' from ' + array);
})

// -forOf
for (let myArray of myArrays) {
    console.log(myArray);
}

// -forMap-  create new array
const newArray = myArrays.map((el) => el + '!!!');
newArray.forEach(e => console.log(e));
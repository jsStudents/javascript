const input = require('prompt-sync')();

console.log('Write how many ml of water the coffee machine has:');
let water = +input();
console.log('Write how many ml of milk the coffee machine has:');
milk = +input();
console.log('Write how many grams of coffee beans the coffee machine has:')
coffeeBeans = +input();
console.log('Write how many cups of coffee you will need:');
let needCoffee = +input();
let possibleCup = [water / (200), milk / (50), coffeeBeans / (15)];
let newPossibleCup = possibleCup.map((el) => Math.trunc(el));
let countCup = Math.min(...newPossibleCup);
if (countCup === needCoffee) {
    console.log('Yes, I can make that amount of coffee');
} else if (countCup < needCoffee) {
    console.log(`No, I can make only ${countCup} cups of coffee`);
} else if (countCup > needCoffee) {
    console.log(`Yes, I can make that amount of coffee (and even ${countCup - needCoffee} more than that)`)
}




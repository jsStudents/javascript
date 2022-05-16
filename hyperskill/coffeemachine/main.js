const input = require('prompt-sync')();

const coffeeMachine = {
    water: 400,
    milk: 540,
    coffeeBeans: 120,
    disposableCups: 9,
    money: 550,
    hasIngredients: function () {
        console.log(`The coffee machine has:
${this.water} ml of water
${this.milk} ml of milk
${this.coffeeBeans} g of coffee beans
${this.disposableCups} disposable cups
$${this.money} of money`)
    },
    makeEspresso: function () {
        if (this.water < 250) {
            console.log("Sorry, not enough water!");
            return;
        } else if (this.coffeeBeans < 16) {
            console.log("Sorry, not enough coffee beans!");
            return;
        } else if (this.disposableCups < 1) {
            console.log("Sorry, not enough cups!");
            return;
        } else {
            console.log('I have enough resources, making you a coffee!');
        }
        this.water -= 250;
        this.coffeeBeans -= 16;
        this.disposableCups -= 1;
        this.money += 4
    },
    makeLatte: function () {
        if (this.water < 350) {
            console.log("Sorry, not enough water!");
            return;
        } else if (this.milk < 75) {
            console.log('Sorry, not enough milk!');
            return;
        } else if (this.coffeeBeans < 20) {
            console.log("Sorry, not enough coffee beans!");
            return;
        } else if (this.disposableCups < 1) {
            console.log("Sorry, not enough cups!");
            return;
        } else {
            console.log('I have enough resources, making you a coffee!');
        }
        this.water -= 350;
        this.milk -= 75;
        this.coffeeBeans -= 20;
        this.disposableCups -= 1;
        this.money += 7;
    },
    makeCappuccino: function () {
        if (this.water < 200) {
            console.log("Sorry, not enough water!");
            return;
        } else if (this.milk < 100) {
            console.log('Sorry, not enough milk!');
            return;
        } else if (this.coffeeBeans < 12) {
            console.log("Sorry, not enough coffee beans!");
            return;
        } else if (this.disposableCups < 1) {
            console.log("Sorry, not enough cups!");
            return;
        } else {
            console.log('I have enough resources, making you a coffee!');
        }
        this.water -= 200;
        this.milk -= 100;
        this.coffeeBeans -= 12;
        this.disposableCups -= 1;
        this.money += 6;
    }
}

function coffeeMachineBuy() {
    console.log('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:');
    let coffeeChoice = +input();
    switch (coffeeChoice) {
        case 1: {
            coffeeMachine.makeEspresso();
            break;
        }
        case 2: {
            coffeeMachine.makeLatte();
            break;
        }
        case 3: {
            coffeeMachine.makeCappuccino();
            break
        }
        case 'back': {
            break;
        }
    }
}

function coffeeMachineFill() {
    console.log('Write how many ml of water you want to add:');
    let ingredient = +input();
    coffeeMachine.water += ingredient;
    console.log('Write how many ml of milk you want to add:');
    ingredient = +input();
    coffeeMachine.milk += ingredient;
    console.log('Write how many grams of coffee beans you want to add:');
    ingredient = +input();
    coffeeMachine.coffeeBeans += ingredient;
    console.log('Write how many disposable coffee cups you want to add:');
    ingredient = +input();
    coffeeMachine.disposableCups += ingredient;
}

function coffeeMachineTake() {
    console.log(`I gave you $${coffeeMachine.money}`);
    coffeeMachine.money = 0;
}

function action() {
    let flag = true;
    while (flag) {
        console.log('Write action (buy, fill, take, remaining, exit):');
        let actionChoice = input();
        switch (actionChoice) {
            case 'buy': {
                coffeeMachineBuy();
                break;
            }
            case 'fill': {
                coffeeMachineFill();
                break;
            }
            case 'take': {
                coffeeMachineTake();
                break;
            }
            case 'remaining': {
                coffeeMachine.hasIngredients();
                break;
            }
            case 'exit': {
                flag = false;
                break;
            }
        }
    }
}


action();






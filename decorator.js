"use strict";
//CONCRETE COMPONENTS
class SimpleCoffee {
    cost() {
        return 5;
    }
    description() {
        return "Simple coffee";
    }
}
// BASE DECORATOR
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    cost() {
        return this.coffee.cost();
    }
    description() {
        return this.coffee.description();
    }
}
// CONCRETE DECORATORS
class MilkDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 1;
    }
    description() {
        return this.coffee.description() + " " + "milk";
    }
}
class CaramelDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 2;
    }
    description() {
        return this.coffee.description() + " + caramel";
    }
}
// Using our decorators
let myCoffee = new SimpleCoffee();
console.log(myCoffee.description());
console.log(myCoffee.cost());
// Add Milk
myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.description());
console.log(myCoffee.cost());
// Add Caramel
myCoffee = new CaramelDecorator(myCoffee);
console.log(myCoffee.description());
console.log(myCoffee.cost());

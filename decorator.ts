// component interface
interface Coffee {
  cost(): number;
  description(): string;
}

//CONCRETE COMPONENTS
class SimpleCoffee implements Coffee {
  cost(): number {
    return 5;
  }

  description(): string {
    return "Simple coffee";
  }
}

// BASE DECORATOR
abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost();
  }

  description(): string {
    return this.coffee.description();
  }
}

// CONCRETE DECORATORS

class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1;
  }
  description(): string {
    return this.coffee.description() + " " + "milk";
  }
}

class CaramelDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 2;
  }
  description(): string {
    return this.coffee.description() + " + caramel";
  }
}

// Using our decorators
let myCoffee: Coffee = new SimpleCoffee();
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

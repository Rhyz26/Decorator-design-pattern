from abc import ABC, abstractmethod


# The base interface
class Coffee(ABC):
    @abstractmethod
    def cost(self) -> int:
        pass

    @abstractmethod
    def description(self) -> str:
        pass


# Basic coffee (the base component)
class SimpleCoffee(Coffee):
    def cost(self) -> int:
        return 5

    def description(self) -> str:
        return "Simple coffee"


# Base decorator class
class CoffeeDecorator(Coffee):
    def __init__(self, coffee: Coffee):
        self._coffee = coffee

    def cost(self) -> int:
        return self._coffee.cost()

    def description(self) -> str:
        return self._coffee.description()


# Concrete decorators
class MilkDecorator(CoffeeDecorator):
    def cost(self) -> int:
        return self._coffee.cost() + 1

    def description(self) -> str:
        return self._coffee.description() + " + milk"


class CaramelDecorator(CoffeeDecorator):
    def cost(self) -> int:
        return self._coffee.cost() + 2

    def description(self) -> str:
        return self._coffee.description() + " + caramel"


# Using the decorators
my_coffee = SimpleCoffee()
print(my_coffee.description())  # "Simple coffee"
print(my_coffee.cost())  # 5

# Add milk
my_coffee = MilkDecorator(my_coffee)
print(my_coffee.description())  # "Simple coffee + milk"
print(my_coffee.cost())  # 6

# Add caramel
my_coffee = CaramelDecorator(my_coffee)
print(my_coffee.description())  # "Simple coffee + milk + caramel"
print(my_coffee.cost())  # 8

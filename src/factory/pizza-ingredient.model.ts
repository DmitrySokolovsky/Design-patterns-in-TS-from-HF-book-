import { Dough, Sause, Veggies, Cheese, Pepperoni, Clams } from './ingredients.model';

export interface IPizzaIngredientFactory {
    createDough: () => Dough;
    createCheese: () => Cheese;
    createSause: () => Sause;
    createVeggies: () => Veggies[];
    createPepperoni: () => Pepperoni;
    createClams: () => Clams;
}
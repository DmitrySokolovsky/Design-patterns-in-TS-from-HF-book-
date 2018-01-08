import { Pizza } from './pizza.models';
import { PizzaStore } from './pizza_store.models';
import { IPizzaIngredientFactory } from './pizza-ingredient.model';
import { 
    CheesePizza,
    ClamsPizza,
    VeggiePizza,
    PepperoniPizza
} from './pizza.types';
import { NYPizzaIngredientFactory, ChikagoPizzaIngredientFactory } from './ingredientsfactory.types';

export class NYPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        let pizza: Pizza;
        let factory: IPizzaIngredientFactory = new NYPizzaIngredientFactory();

        if (type === 'cheese') {
            pizza = new CheesePizza(factory);
            pizza.setName('New York Cheese Pizza');
            return pizza;            
        } else if (type === 'clams') {
            pizza = new ClamsPizza(factory);
            pizza.setName('New York Clams Pizza');
            return pizza;
        } else if (type === 'veggie') {
            pizza = new VeggiePizza(factory);
            pizza.setName('New York Veggie Pizza');
            return pizza;
        } else {
            pizza = new PepperoniPizza(factory);
            pizza.setName('New York Pepperoni Pizza');
            return pizza;
        }
    }
}

export class ChicagoPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        let pizza: Pizza;
        let factory: IPizzaIngredientFactory = new ChikagoPizzaIngredientFactory();
        if (type === 'cheese') {
            pizza = new CheesePizza(factory);
            pizza.setName('Chicago Cheese Pizza');
            return pizza;
        } else if (type === 'veggie') {
            pizza =  new VeggiePizza(factory);
            pizza.setName('Chicago Veggie Pizza');
            return pizza;
        } else if (type === 'clams') {
            pizza = new ClamsPizza(factory);
            pizza.setName('Chicago Clams Pizza');
            return pizza;
        } else {
            pizza = new PepperoniPizza(factory);
            pizza.setName('Chicago Pepperoni Pizza');
            return pizza;
        }
    }
}
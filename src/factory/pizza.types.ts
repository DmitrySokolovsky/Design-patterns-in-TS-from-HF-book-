import { Pizza } from './pizza.models';
import { IPizzaIngredientFactory } from './pizza-ingredient.model';

export class CheesePizza extends Pizza {
    ingredientFactory: IPizzaIngredientFactory; 

    constructor(factory: IPizzaIngredientFactory) {
        super();
        this.ingredientFactory = factory;
    }

    prepare(): void {
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSause();
        this.veggies = this.ingredientFactory.createVeggies();
        this.cheese = this.ingredientFactory.createCheese();
        console.log(`Taking ${this.dough.name} add ${this.sauce.name} and decorating whlth a lot of ${this.cheese.name}`);
    }
}

export class ClamsPizza extends Pizza {
    ingredientFactory: IPizzaIngredientFactory; 

    constructor(factory: IPizzaIngredientFactory) {
        super();
        this.ingredientFactory = factory;
    }

    prepare(): void {
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSause();
        this.clams = this.ingredientFactory.createClams();
        console.log(`Taking ${this.dough.name} add ${this.sauce.name} and decorating whlth ${this.clams.name}`);
    }
}

export class VeggiePizza extends Pizza {
    ingredientFactory: IPizzaIngredientFactory; 

    constructor(factory: IPizzaIngredientFactory) {
        super();
        this.ingredientFactory = factory;
    }

    prepare(): void {
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSause();
        this.veggies = this.ingredientFactory.createVeggies();
        console.log(`Taking ${this.dough.name} add ${this.sauce.name} and decorating whlth ${this.veggies.map((item) => {return item.name})}`);
    }
}

export class PepperoniPizza extends Pizza {
    ingredientFactory: IPizzaIngredientFactory; 

    constructor(factory: IPizzaIngredientFactory) {
        super();
        this.ingredientFactory = factory;
    }

    prepare(): void {
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSause();
        this.veggies = this.ingredientFactory.createVeggies();
        this.pepperoni = this.ingredientFactory.createPepperoni();
        console.log(`Taking ${this.dough.name} add ${this.sauce.name} and decorating whlth ${this.pepperoni.name}`)
    }
}


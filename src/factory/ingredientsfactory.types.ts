import { 
    Dough,
    Cheese, 
    Sause,
    Clams, 
    Pepperoni, 
    Veggies 
} from './ingredients.model';

import { 
    ThickDough, 
    ThinDough, 
    RegganoCheese, 
    MozzarelloCheese,
    Garelic,
    Mashroom,
    RedPepper,
    SlicedPepperoni,
    UnSlicedPepperoni,
    FreshClams,
    FrozenClams,
    TomatoSause,
    MayonezzSause
 } from './ingredient.types';

import { IPizzaIngredientFactory } from './pizza-ingredient.model';

export class NYPizzaIngredientFactory implements IPizzaIngredientFactory {
    createDough(): Dough {
        return new ThinDough();
    }

    createSause(): Sause {
        return new TomatoSause();
    }

    createCheese(): Cheese {
        return new RegganoCheese();
    }

    createVeggies(): Veggies[] {
        let veggies: Veggies[] = [new Garelic(), new RedPepper()];
        return veggies;
    }

    createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    createClams(): Clams {
        return new FreshClams();
    }
}

export class ChikagoPizzaIngredientFactory implements IPizzaIngredientFactory {
    createDough(): Dough {
        return new ThickDough();
    }

    createSause(): Sause {
        return new MayonezzSause();
    }

    createCheese(): Cheese {
        return new MozzarelloCheese();
    }

    createVeggies(): Veggies[] {
        let veggies: Veggies[] = [new Mashroom(), new RedPepper()];
        return veggies;
    }

    createPepperoni(): Pepperoni {
        return new UnSlicedPepperoni();
    }

    createClams(): Clams {
        return new FrozenClams();
    }
}
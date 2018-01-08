import { Dough, Cheese, Sause, Veggies, Pepperoni, Clams } from './ingredients.model';

export class ThinDough extends Dough {
    name: string = 'Thin dough';
}

export class ThickDough extends Dough {
    name: string = 'Thick dough';
}

export class RegganoCheese extends Cheese {
    name: string = 'Reggano Cheese';
}

export class MozzarelloCheese extends Cheese {
    name: string = 'Mozzarell Cheese';
}

export class Garelic extends Veggies {
    name: string = 'Garelic';
}

export class Mashroom extends Veggies {
    name: string = 'Mashroom';
}

export class RedPepper extends Veggies {
    name: string = 'Red Pepper';
}

export class SlicedPepperoni extends Pepperoni {
    name: string = 'Sliced pepperoni';
}

export class UnSlicedPepperoni extends Pepperoni {
    name: string = 'Unsliced pepperoni';
}

export class FreshClams extends Clams {
    name: string = 'Fresh Clams';
}

export class FrozenClams extends Clams {
    name: string = 'Frozen Clams';
}

export class TomatoSause extends Sause {
    name: string = 'Tomato Sause';
}

export class MayonezzSause extends Sause {
    name: string = 'Mayonezz Sause';
}


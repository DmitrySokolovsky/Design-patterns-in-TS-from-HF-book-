import { Beverage } from './model';

// Class for expresso
export class Expresso extends Beverage {
    constructor() {
        super();
        this.description = 'Expresso';
    }

    cost(): number {
        return 1.99;
    }
}

// Class for House Blend
export class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = 'House Blend';
    }

    cost(): number {
        return 2.50;
    }
}

// Class for Dark Roast
export class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = 'Dark Roast';
    }

    cost(): number {
        return 2.15;
    }
}
import { Beverage, CondimentDecorator } from './model';

export class Mocha extends CondimentDecorator {
    beverage: Beverage;

    constructor(b: Beverage) {
        super();
        this.beverage = b;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', Mocha, ';
    }

    cost(): number {
        return 0.2 + this.beverage.cost();
    }
}

export class Soy extends CondimentDecorator {
    beverage: Beverage;

    constructor(b: Beverage) {
        super();
        this.beverage = b;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', Soy, ';
    }

    cost(): number {
        return 0.15 + this.beverage.cost();
    }
}

export class Whip extends CondimentDecorator {
    beverage: Beverage;

    constructor(b: Beverage) {
        super();
        this.beverage = b;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ', Whip, ';
    }

    cost(): number {
        return 0.05 + this.beverage.cost();
    }
}
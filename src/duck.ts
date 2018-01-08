import { IFlyBehavior, FlyNo, FlyWithWings } from './fly';
import { IQuack, Quack, Squeack, NoQuack } from './quack';

export abstract class Duck {   
    quackBehavior: IQuack;
    flyBehavior: IFlyBehavior;

    abstract display(): void;

    performFly(): void {
        this.flyBehavior.fly();
    }

    performQuack(): void {
        this.quackBehavior.quack();
    }
}

export class MallardDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    display(): void {
        console.log('I am Mallard');
    }
}

export class ModelDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Squeack();
        this.flyBehavior = new FlyNo();
    }

    display(): void {
        console.log('Model');
    }
}

export class RubberDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = new FlyNo();
        this.quackBehavior = new NoQuack();
    }

    display(): void {
        console.log('Rubber');
    }
}
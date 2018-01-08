export abstract class Beverage {
    description: string;

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}

export abstract class CondimentDecorator extends Beverage {
    public abstract getDescription(): string;
}

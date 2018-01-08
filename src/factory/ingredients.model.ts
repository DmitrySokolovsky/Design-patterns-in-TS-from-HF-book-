export interface IIngredient {
    name: string;
    showName: () => string;
}

export class Dough implements IIngredient {
    name: string;
    showName(): string {
        return this.name;
    }
}

export class Cheese implements IIngredient {
    name: string;
    showName(): string {
        return this.name;
    }
}

export class Sause implements IIngredient {
    name: string;
    showName(): string {
        return this.name;
    }
}

export class Veggies implements IIngredient {
    name: string;
    showName(): string {
        return this.name;
    }
}

export class Pepperoni implements IIngredient {
    name: string;
    showName(): string {
        return this.name;
    }
}

export class Clams implements IIngredient {
    name: string;
    showName(): string {
        return this.name;
    }
}
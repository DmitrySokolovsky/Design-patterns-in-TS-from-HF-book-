import { Dough, Sause, Veggies, Cheese, Pepperoni, Clams } from './ingredients.model';
export abstract class Pizza {
    name: string;
    dough: Dough;
    sauce: Sause;
    veggies: Veggies[];
    cheese: Cheese;
    pepperoni: Pepperoni;
    clams: Clams;

    abstract prepare(): void; 

    bake(): void {
        console.log('Baking for 20 min at 250deg...');
    }

    cut(): void {
        console.log('Cutting into 8 peices');
    }

    box(): void {
        console.log(`Boxing ready ${this.name}`);
    }

    getName(): string {
        return this.name;
    }

    setName(str: string): void {
        this.name = str;
    }
}
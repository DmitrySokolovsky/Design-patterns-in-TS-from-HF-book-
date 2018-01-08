export interface IQuack {
    quack: () => void;
}

export class Quack implements IQuack {
    quack(): void {
        console.log('Quack');
    }
}

export class NoQuack implements IQuack {
    quack(): void {
        console.log('<-Silence->');
    }
}

export class Squeack implements IQuack {
    quack(): void {
        console.log('Squeack');
    }
}
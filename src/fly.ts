export interface IFlyBehavior {
    fly: () => void;
}

export class FlyWithWings implements IFlyBehavior {
    fly(): void {
        console.log('FLY WITH WINGS');
    }
}

export class FlyNo implements IFlyBehavior {
    fly(): void {
        console.log('Cant Fly =(');
    }
}

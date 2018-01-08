import { ISubject, IObserver } from './models';

export class WeatherData implements ISubject {
    private _observers: Array<IObserver>;
    private _temperature: number;
    private _humidity: number;
    private _pressure: number;

    constructor() {
        this._observers = new Array();        
    }

    registerObserver(o: IObserver): void {
        this._observers.push(o);
    }

    removeObserver(o: IObserver) {
        let i: number = this._observers.indexOf(o);
        if (i >= 0) {
            this._observers.splice(i, 1);
        }
    }

    notifyObservers(): void {
        for ( let i = 0; i < this._observers.length; i++) {
            let observer: IObserver = this._observers[i];
            observer.update(this._temperature, this._humidity, this._pressure);
        }
    }

    measuresChanged(): void {
        this.notifyObservers();
    }

    setMeasurements(t: number, h: number, p: number): void {
        this._temperature = t;
        this._humidity = h;
        this._pressure = p;
        this.measuresChanged();
    }
}
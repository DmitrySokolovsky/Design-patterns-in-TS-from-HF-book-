import { IDisplayElement, IObserver, ISubject } from './models';

export class CurrentConditionsDisplay implements IDisplayElement, IObserver {
    private temperature: number;
    private humidity: number;
    private weatherData: ISubject;

    constructor(weatherData: ISubject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(t: number, h: number, p: number): void {
        this.temperature = t;
        this.humidity = h;
        this.display();
    }

    display(): void {
        console.log(`Temp: ${this.temperature} ; Humidity: ${this.humidity}`);
    }
}
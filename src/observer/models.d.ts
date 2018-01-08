export interface ISubject {
    registerObserver: (o: IObserver) => void;
    removeObserver: (o: IObserver) => void;
    notifyObservers: () => void;
}

export interface IObserver {
    update: (temp: number, humidity: number, pressure: number) => void; 
}

export interface IDisplayElement {
    display: () => void;
}
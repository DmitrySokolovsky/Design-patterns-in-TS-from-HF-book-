import * as React from 'react';
import './App.css';
/*import { Duck, MallardDuck, RubberDuck, ModelDuck } from './duck';
import { WeatherData } from './observer/weather_data';
import { CurrentConditionsDisplay } from './observer/visual_elements';
import { DarkRoast, Expresso, HouseBlend } from './decorator/beveragetypes';
import { Mocha, Soy, Whip } from './decorator/CondimentionDecorators';
import { Beverage } from './decorator/model';
*/
import { NYPizzaStore, ChicagoPizzaStore } from './factory/pizza-stores.types';
import { PizzaStore } from './factory/pizza_store.models';

const logo = require('./logo.svg');

class App extends React.Component {

  componentDidMount(): void {
   /* let model: Duck = new ModelDuck();
    model.display();
    model.performFly();
    model.performQuack();
    let mallard: Duck = new MallardDuck();
    mallard.display();
    mallard.performQuack();
    let rubber: Duck = new RubberDuck();
    rubber.display();
    rubber.performFly();

    console.log('-------');

    let wd: WeatherData = new WeatherData();
    let current: CurrentConditionsDisplay = new CurrentConditionsDisplay(wd);
    current.display();
    wd.setMeasurements(12, 25, 44);

    console.log('-------');

    let bev1: Beverage = new Expresso();
    console.log(bev1.getDescription());

    let bev2: Beverage = new DarkRoast(); 
    bev2 = new Mocha(bev2);
    bev2 = new Soy(bev2);
    console.log(bev2.getDescription() + ' $: ' + bev2.cost());

    let bev3: Beverage = new HouseBlend();
    bev3 = new Whip(bev3);
    console.log(bev3.getDescription() + ' $: ' + bev3.cost());
    */

    let nyStore: PizzaStore = new NYPizzaStore();
    let chicagoStore: PizzaStore = new ChicagoPizzaStore();

    nyStore.orderPizza('cheese');

    chicagoStore.orderPizza('clams');
    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

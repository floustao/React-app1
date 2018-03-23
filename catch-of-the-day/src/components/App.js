import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    // 1. copy state data we want to populate to avoid mutations
    const fishes = {...this.state.fishes};
    // 2. add new data to state
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new object to the piece of State you want to update
    this.setState({ fishes: fishes });
  };

  loadSamples = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Create your menu"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSamples={this.loadSamples}
        />
      </div>
    );
  }
}

export default App;

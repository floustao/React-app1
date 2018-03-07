import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

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
    // 3. Set the new object to State
    this.setState({ fishes: fishes });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Create your menu"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>
    );
  }
}

export default App;

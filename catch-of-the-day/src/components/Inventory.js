import React from 'react';
import AddFormFish from './AddFormFish';

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFormFish addFish={this.props.addFish} />
      </div>
    );
  }
}

export default Inventory;

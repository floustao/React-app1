import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, i) => {
      const count = this.props.order[i];
      const fish = this.props.fishes[i];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        prevTotal += count * fish.price
      }
      return prevTotal
    }, 0);

    return (
      <div className="order">
        <h2>Order</h2>
        {formatPrice(total)}
      </div>
    )
  }
}

export default Order;

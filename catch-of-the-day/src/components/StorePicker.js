import React, { Fragment } from 'react';
import { getRestaurantName } from '../helpers'

class StorePicker extends React.Component {
  render() {
    return (
      <Fragment>
        <form className="store-selector">
          <h2>Enter your store name</h2>
          <input type="text" required placeholder="store name" defaultValue={getRestaurantName()}/>
          <button type="submit">Visit →</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;

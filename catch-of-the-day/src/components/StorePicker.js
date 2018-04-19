import React, { Fragment } from 'react';
import { getRestaurantName } from '../helpers';
import PropTypes from "prop-types";

class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object
  };

  goToStore = (e) => {
    // Stop the form from submitting
    e.preventDefault();
    // get user input
    const userStore = this.myInput.value.value;
    // route to /store/:input
    this.props.history.push(`/store/${userStore}`);
  }

  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Enter your store name</h2>
          <input type="text" ref={this.myInput} required placeholder="store name" defaultValue={getRestaurantName()}/>
          <button type="submit">Visit →</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;

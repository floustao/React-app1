import React, { Fragment } from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <Fragment>
        <form className="store-selector">
          <h2>Enter your store name</h2>
          <input type="text" required placeholder="store name"/>
          <button type="submit">Visit →</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;

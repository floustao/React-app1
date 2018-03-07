import React from 'react';

class AddFormFish extends React.Component {
  render() {
    return (
      <form className='fish-edit'>
        <input type="text" name='name' placeholder='Name'/>
        <input type="text" name='price' placeholder='Price'/>
        <select name="status">
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea type="text" name='desc' placeholder='Desc'/>
        <input type="text" name='image' placeholder='Image'/>
        <button type='submit'>+ item</button>
      </form>
    );
  }
}

export default AddFormFish;

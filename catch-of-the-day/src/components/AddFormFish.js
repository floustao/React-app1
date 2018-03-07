import React from 'react';

class AddFormFish extends React.Component {

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (e) => {
    // 1. prevent default refresh after submitting
    e.preventDefault();
    // 2. create fish object
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    }
    // 3. pass fish object to parent state
    this.props.addFish(fish);
  }

  render() {
    return (
      <form className='fish-edit' onSubmit={this.createFish}>
        <input type="text" name='name' placeholder='Name' ref={this.nameRef}/>
        <input type="text" name='price' placeholder='Price' ref={this.priceRef}/>
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea type="text" name='desc' placeholder='Desc' ref={this.descRef}/>
        <input type="text" name='image' placeholder='Image' ref={this.imageRef}/>
        <button type='submit'>+ item</button>
      </form>
    );
  }
}

export default AddFormFish;

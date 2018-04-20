import React from 'react';
import AddFormFish from './AddFormFish';
import EditFishForm from './EditFishForm';
import PropTypes from "prop-types";
import firebase from 'firebase';
import Login from './Login';
import base, { firebaseApp } from '../base';


class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    addFish: PropTypes.func,
    loadSamples: PropTypes.func
  };

  state = {
    uid: null,
    owner: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.authHandler({ user });
    })
  }

  authHandler = async authData => {
    //1. Look up the current store in the firebase databse
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log(store);
    //2. Claim it if there is no owner
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    //3. Set the state of the inventory component to reflect the current user
    this.setState({
      uid: authData.user.uid, // who is the current user ?
      owner: store.owner || authData.user.uid // who is the current owner of the store ?
    })
  };

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  logout = async () => { // await for firebase to log out
    await firebase.auth().signOut(); //
    this.setState({ uid: null }); // reset state
  };

  render() {
    const logout = <button onClick={this.logout}>Log out !</button>

    //1. check if logged in
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    };

    //2. Check if user = owner
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you are not the owner!</p>
          {logout}
        </div>
      );
    };

    //3. render inventory if user = owner
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
        {Object.keys(this.props.fishes).map(key =>
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />)}
        <AddFormFish addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load sample fishes</button>
      </div>
    );
  }
}

export default Inventory;

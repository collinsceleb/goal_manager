import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp} from './firebase';
import AddGoal from './components/AddGoal';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Goals</h1>
        <AddGoal />
        <div>Goal List</div>
        <button 
            className="btn btn-danger"
            onClick={() => this.signOut()}>
              Sign Out
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log('state', state);
  return {}

}

export default connect(mapStateToProps, null) (App);

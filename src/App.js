import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp} from './firebase';
import AddGoal from './components/AddGoal';
import logo from './logo.svg';
import './App.css';
import GoalList from './components/GoalList';
import CompleteGoalList from './components/CompleteGoalList';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div 
        className="App"
        style={{margin:'5px'}}>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h3>Goal Manager</h3>
        <AddGoal />
        <hr/>
        <h4>Goals</h4>
        <GoalList />
        <hr/>
        <h4>Goal List</h4>
        <CompleteGoalList />
        <hr/>
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
 // console.log('state', state);
  return {}

}

export default connect(mapStateToProps, null) (App);

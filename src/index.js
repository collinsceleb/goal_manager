import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import { logUser } from './actions';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import './index.css';
import App from './App';
import SignIn from './components/signin';
import SignUp from './components/signup';
import * as serviceWorker from './serviceWorker';


const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user =>{
    if(user) {
     //   console.log('User signed in or up', user);
        const {email} = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app')
    } else {
      //  console.log('user signed out or never signed in');
        browserHistory.replace('/signin');
    }
});

ReactDOM.render(
    <Provider store= {store}>
        <Router path="/" history={browserHistory}>
            <div>
                <Route path="/app" component={App} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
            </div>
    
        </Router>
    </Provider>, 
    document.getElementById('root'));

// const routes = (
//     <Router history = {browserHistory}>
//         <Route path="/" component = {App} >
//             <Route path="/signin" component = {SignIn} />
//             <Route path="/signup" component = {SignUp} />
//         </Route>
//     </Router>
// );
// ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

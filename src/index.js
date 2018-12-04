import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import './index.css';
import App from './App';
import SignIn from './components/signin';
import SignUp from './components/signup';
import * as serviceWorker from './serviceWorker';


firebaseApp.auth().onAuthStateChanged(user =>{
    if(user) {
        console.log('User signed in or up', user);
    } else {
        console.log('user signed out or never signed in');
    }
});

ReactDOM.render(
<Router path="/" history={browserHistory}>
    <div>
        <Route path="/app" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
    </div>
    
</Router>, 
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

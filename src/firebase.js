import * as firebase from 'firebase';



  const config = {
    apiKey: "AIzaSyAQyq0GemO0Ae0PqPz70mzywL0_Gt4f92Q",
    authDomain: "goalmanager-68b5f.firebaseapp.com",
    databaseURL: "https://goalmanager-68b5f.firebaseio.com",
    projectId: "goalmanager-68b5f",
    storageBucket: "goalmanager-68b5f.appspot.com",
    messagingSenderId: "859015048806"
  };
 export const firebaseApp = firebase.initializeApp(config);
 export const goalRef = firebase.database().ref('goals');
 export const completeGoalRef = firebase.database().ref('completeGoals');

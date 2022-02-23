import firebase from 'firebase';
// eslint-disable-next-line no-unused-vars
require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyBvxC66GhpMklkslro3Ka61__D_PQ5k3BQ",
  authDomain: "modpackstore.firebaseapp.com",
  projectId: "modpackstore",
  storageBucket: "modpackstore.appspot.com",
  messagingSenderId: "992733945544",
  appId: "1:992733945544:web:f75931a75dfa4d8f4e4ffd",
  measurementId: "G-PVCLZMZCXC"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars

const auth = firebase.default.auth()

export default { firebase, auth }


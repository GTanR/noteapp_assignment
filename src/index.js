import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { firebase } from '@firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFmeuLB8VHGDDD0uEeKjk5LhMZLWsmWE4",
  authDomain: "note-application-d23df.firebaseapp.com",
  projectId: "note-application-d23df",
  storageBucket: "note-application-d23df.appspot.com",
  messagingSenderId: "964734523087",
  appId: "1:964734523087:web:4a58644a4f2597d1b049ba"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


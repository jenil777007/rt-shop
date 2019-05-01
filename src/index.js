import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDpfrc7lNgjVD_obN6v2UQkf4W0uCeUjKc",
    authDomain: "rt-shop-3de0b.firebaseapp.com",
    databaseURL: "https://rt-shop-3de0b.firebaseio.com",
    projectId: "rt-shop-3de0b",
    storageBucket: "rt-shop-3de0b.appspot.com",
    messagingSenderId: "47724748844"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

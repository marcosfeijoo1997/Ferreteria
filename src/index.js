import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClf945zGf8sPQ0hU9oBTsHqtDWjkM4erw",
  authDomain: "ferre-965e1.firebaseapp.com",
  projectId: "ferre-965e1",
  storageBucket: "ferre-965e1.appspot.com",
  messagingSenderId: "1064290711052",
  appId: "1:1064290711052:web:9bea29982a22524f8aa029",
  measurementId: "G-DF5G81B9B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

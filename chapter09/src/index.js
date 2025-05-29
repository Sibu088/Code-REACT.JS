import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//firebase dependancies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7MBAwoU1RcQ3TlJdl0sFiOgHObQXLsjU",
  authDomain: "rural-code-academy.firebaseapp.com",
  projectId: "rural-code-academy",
  storageBucket: "rural-code-academy.firebasestorage.app",
  messagingSenderId: "914229230554",
  appId: "1:914229230554:web:4830a54015ee430e9b1ee3",
  measurementId: "G-99PY1YKK4S"
};


firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

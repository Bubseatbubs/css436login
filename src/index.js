import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import 'firebase/auth';
import 'firebaseui/dist/firebaseui.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginForm from './LoginForm';
import './index.css';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgHz6ji6kGlYE3oWiFUCFj0T-dYLlAkCs",
  authDomain: "css436finalproject-e429d.firebaseapp.com",
  projectId: "css436finalproject-e429d",
  storageBucket: "css436finalproject-e429d.firebasestorage.app",
  messagingSenderId: "727283676444",
  appId: "1:727283676444:web:f8840e79fbf453147236d9",
  measurementId: "G-TJWEPPJQ7S"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginForm />
  </React.StrictMode>
);

// Handle signup form submission
// document.getElementById('signup-form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = document.getElementById('signup-email').value;
//   const password = document.getElementById('signup-password').value;

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed up
//       const user = userCredential.user;
//       console.log('User signed up:', user);
//       // Redirect or show a success message
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error('Error signing up:', errorCode, errorMessage);
//     });
// });
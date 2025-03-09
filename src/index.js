import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import 'firebase/auth';
import 'firebaseui/dist/firebaseui.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import SignupForm from './SignupForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
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

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loggedIn === null) return <></>;
  if (loggedIn === true) return <Dashboard />;
  if (loggedIn === false) return <LoginForm />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

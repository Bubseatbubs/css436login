import React from 'react';
import { useLocation } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";



const Dashboard = () => {
    const auth = getAuth();

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('User signed out');
        }).catch((error) => {
            // An error happened.
            console.error('Sign out error', error);
        });
    };
    
    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <p>You have successfully logged in.</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;

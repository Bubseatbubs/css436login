import React, { useState } from 'react';
import './LoginForm.css';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import 'firebase/auth';

const SignupForm = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [matchPassword, setMatchPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== matchPassword) {
            document.getElementById('error-message').innerText = 'Passwords do not match.';
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Successfully signed up user
                const user = userCredential.user;
                console.log('User signed up:', user);

                // Redirect
                window.location.href = '/';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error signing up:', errorCode, errorMessage);
                var userErrorMessage;
                if (errorCode === 'auth/email-already-in-use') {
                    userErrorMessage = 'The email provided is already in use. Please sign in.';
                }
                else if (errorCode === 'auth/invalid-email') {
                    userErrorMessage = 'The provided email is not a valid email address.';
                }
                else if (errorCode === 'auth/weak-password') {
                    userErrorMessage = 'The provided password is too weak. Please try a stronger password.';
                }
                else {
                    userErrorMessage = 'An unknown error occurred. Please try again.';
                }

                document.getElementById('error-message').innerText = userErrorMessage;
            });
    };

    const handleGoogleLogin = () => {
        // Google sign in
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // Signed in
                const user = result.user;
                console.log('User signed in:', user);
                // Redirect or show a success message

                // Redirect to the home page
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error signing in with Google:', errorCode, errorMessage);
                var userErrorMessage;
                if (errorCode === 'auth/account-exists-with-different-credential') {
                    userErrorMessage = 'An account already exists with the same email address but different sign-in credentials. Please sign in with the correct provider.';
                }
                else if (errorCode === 'auth/popup-closed-by-user') {
                    userErrorMessage = 'The Google sign-in popup was closed before signing in.';
                }
                else if (errorCode === 'auth/cancelled-popup-request') {
                    userErrorMessage = 'The Google sign-in popup was closed before signing in.';
                }
                else if (errorCode === 'auth/popup-blocked') {
                    userErrorMessage = 'The Google sign-in popup was blocked by the browser.';
                }
                else {
                    userErrorMessage = 'An unknown error occurred. Please try again.';
                }

                document.getElementById('error-message').innerText = userErrorMessage;
            });
    };

    return (
        <div className='login-form-container'>
            <div className='login-form'>
                <h2 className='login-header'>Sign Up</h2>
                <div className='error-message' id='error-message'></div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            className='input-field'
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className='input-field'
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className='input-field'
                            placeholder="Confirm Password"
                            type="password"
                            value={matchPassword}
                            onChange={(e) => setMatchPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <button className='login-button' type="submit">Sign Up</button>
                        <br></br>
                        <text className='text-below-button'>Already have an account? <a href='/'>Sign In</a></text>
                        <br></br>
                        <button className="googlelogin-button" onClick={handleGoogleLogin}>
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo" />
                            Sign in with Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
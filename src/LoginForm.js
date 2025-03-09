import React, { useState } from 'react';
import './LoginForm.css';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import 'firebase/auth';

const LoginForm = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('User signed in:', user);
                // Redirect or show a success message

                // Redirect to the home page
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error signing in:', errorCode, errorMessage);
                var userErrorMessage;
                if (errorCode === 'auth/user-not-found') {
                    userErrorMessage = 'The email provided could not be found. Please create an account.';
                }
                else if (errorCode === 'auth/wrong-password') {
                    userErrorMessage = 'The provided password did not match the email provided.';
                }
                else if (errorCode === 'auth/invalid-email') {
                    userErrorMessage = 'The provided email is not a valid email address.';
                }
                else if (errorCode === 'auth/too-many-requests') {
                    userErrorMessage = 'Too many requests. Please wait a while before trying again.';
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
                <h2 className='login-header'>Sign In</h2>
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
                        <button className='login-button' type="submit">Sign In</button>
                        <br></br>
                        <text className='text-below-button'>Don't have an account? <a href='signup'>Sign Up</a></text>
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

export default LoginForm;
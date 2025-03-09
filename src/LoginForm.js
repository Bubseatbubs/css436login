import React, { useState } from 'react';
import './LoginForm.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
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
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error signing in:', errorCode, errorMessage);
            });
    };

    return (
        <div className='login-form-container'>
            <div className='login-form'>
                <h2 className='login-header'>Sign In</h2>
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
                        <text className='text-below-button'>Already have an account? <a href='signup'>Sign Up</a></text>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
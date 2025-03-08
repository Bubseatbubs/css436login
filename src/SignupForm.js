import React, { useState } from 'react';
import './LoginForm.css';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className='login-form-container'>
            <div className='login-form'>
                <h2 className='login-header'>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            className='input-field'
                            placeholder="Username"
                            type="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <button className='login-button' type="submit">Sign Up</button>
                        <br></br>
                        <text className='text-below-button'>By signing up, you agree to our Terms of Service and Privacy Policy.</text>
                        <br></br><br></br>
                        <text className='text-below-button'>Already have an account? <a href='signin'>Sign In</a></text>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
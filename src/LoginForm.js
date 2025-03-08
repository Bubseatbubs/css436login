import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add backend support for logging in
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className='login-form-container'>
            <div className='login-form'>
                <h2 className='login-header'>Sign In</h2>
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
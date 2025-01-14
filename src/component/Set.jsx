import React, { useState } from 'react';

function Set() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log('Email:', email);
        setMessage('A password reset link has been sent to your email.');
        setEmail(''); 
    };

    return (
        <div style={{ maxWidth: '300px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Set Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', marginBottom: '10px', padding: '8px' }} 
                    />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px' }}>Send</button>
            </form>
            {message && <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>}
        </div>
    );
}

export default Set;
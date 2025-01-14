import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
   
    navigate('/success');
  };

  const handleForgetPassword = () => {
    navigate('/set'); 
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Username or Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px' }}>Log In</button>
      </form>
      
      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        <a 
          onClick={handleForgetPassword} 
          style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
        >
          Forget Password?
        </a>
      </p>
    </div>
  );
};

export default LogIn;
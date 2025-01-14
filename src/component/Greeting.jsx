import React from 'react';
import { useNavigate } from 'react-router-dom'; 
const Greeting = () => {
    const navigate = useNavigate(); 

    const handleLogin = () => {
        console.log('Login button clicked');
        navigate('/logIn'); 
    };

    const handleRegister = () => {
        console.log('Sign up button clicked');
        navigate('/SignUp'); 
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>WELCOME!</h1>
            <button 
                onClick={handleLogin} 
                style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
            >
                Log In
            </button>
            <button 
                onClick={handleRegister} 
                style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
            >
                Sign up
            </button>
        </div>
    );
};

export default Greeting;
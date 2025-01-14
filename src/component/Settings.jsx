import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const navigate = useNavigate();
    const [showProfileOptions, setShowProfileOptions] = useState(false);

    const handleProfile = () => {
        setShowProfileOptions(!showProfileOptions); 
    };

    const handlePrivacy = () => {
        navigate('/privacy'); 
    };

    const handleChangePassword = () => {
        navigate('/set'); 
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Settings</h2>
            <div>
                <button 
                    onClick={handleProfile} 
                    style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
                >
                    Profile
                </button>
                {showProfileOptions && (
                    <div style={{ margin: '10px' }}>
                        <p>Name: <input type="text" placeholder="Enter your name" /></p>
                        <p>Email: <input type="email" placeholder="Enter your email" /></p>
                        <p>Mobile Number: <input type="tel" placeholder="Enter your mobile number" /></p>
                    </div>
                )}
                <button 
                    onClick={handlePrivacy} 
                    style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
                >
                    Privacy
                </button>
                <button 
                    onClick={handleChangePassword} 
                    style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
                >
                    Set Password
                </button>
            </div>
        </div>
    );
};

export default Settings;
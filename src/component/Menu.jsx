import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ConfirmSignOut from './ConfirmSignOut';

const Menu = () => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleSignOut = () => {
    setIsConfirmOpen(true); 
  };

  const handleConfirm = () => {
    setIsConfirmOpen(false);
    navigate('/'); 
  };

  const handleCancel = () => {
    setIsConfirmOpen(false); 
    navigate('/menu'); 
  };

  return (
    <div style={{ display: 'flex', textAlign: 'center', marginTop: '50px' }}>
      <div style={{ width: '200px', textAlign: 'center' }}>
        <h2>Home</h2>
        <div style={{ marginBottom: '20px' }}>
          <button 
            onClick={() => navigate('/settings')} 
            style={{ padding: '10px 20px' }}
          >
            Settings  
          </button>
        </div>
        <div style={{ 
            border: '2px solid #555', 
            borderRadius: '10px', 
            padding: '20px', 
            display: 'inline-block' 
          }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <button 
                onClick={() => navigate('/services')} 
                style={{ padding: '10px', margin: '5px' }}
              >
                Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigate('/booking')} 
                style={{ padding: '10px', margin: '5px' }}
              >
                Booking
              </button>
            </li>
            <li>
              <button onClick={handleSignOut} style={{ padding: '10px', margin: '5px' }}>
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>

      {isConfirmOpen && (
        <ConfirmSignOut 
          onConfirm={handleConfirm} 
          onCancel={handleCancel} 
        />
      )}
    </div>
  );
};

export default Menu;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate(); 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Registration has been completed successfully !</h2>
      <button 
        onClick={() => navigate('/menu')}
        style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
      >
       Home Page 
      </button>
    </div>
  );
};

export default Success;
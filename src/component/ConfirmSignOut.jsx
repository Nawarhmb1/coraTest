
import React from 'react';

const ConfirmSignOut = ({ onConfirm, onCancel }) => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Are you sure?</h2>
            <div>
                <button 
                    onClick={onConfirm} 
                    style={{ padding: '10px 20px', margin: '10px' }}
                >
                    yes
                </button>
                <button 
                    onClick={onCancel} 
                    style={{ padding: '10px 20px', margin: '10px' }}
                >
                    no
                </button>
            </div>
        </div>
    );
};

export default ConfirmSignOut;
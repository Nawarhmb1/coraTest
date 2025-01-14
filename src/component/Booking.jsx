import React, { useState } from 'react';

const Booking = () => {
    const [selectedService, setSelectedService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // التحقق من ملء جميع الحقول
        if (!selectedService || !date || !time) {
            setConfirmationMessage('Please fill in all fields.');
            return;
        }

        // عرض رسالة تأكيد الحجز
       
        
        // إعادة تعيين الحقول بعد التأكيد
        setSelectedService('');
        setDate('');
        setTime('');
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Booking</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Select Service:
                    <select 
                        value={selectedService} 
                        onChange={(e) => setSelectedService(e.target.value)} 
                        required
                    >
                        <option value="">Select a service</option>
                        <option value="Service 1">Service 1</option>
                        <option value="Service 2">Service 2</option>
                        <option value="Service 3">Service 3</option>
                    </select>
                </label>
                <br />
                <label>
                    Date:
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Time:
                    <input 
                        type="time" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <button type="submit">Confirm Booking</button>
            </form>

            {confirmationMessage && (
                <p style={{ color: 'green', marginTop: '20px' }}>{confirmationMessage}</p>
            )}
        </div>
    );
};

export default Booking;
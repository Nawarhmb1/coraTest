import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

     if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

     setIsSubmitting(true);

     const formData = new FormData();
    formData.append("action", "register");
    formData.append("firstname", firstName);
    formData.append("lastname", lastName);
    formData.append("email", email);
    formData.append("password", password);

     const url = "https://script.google.com/macros/s/AKfycbxvWixa4eeqNU0bWcGA4QqLj-xhF2nNPHoReP18NV7IL7KdkdWf7-QJBKm1LV3Y9_n0/exec";

    try {
       const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.status === "success") {
        setMessage("User registered successfully!");
        setTimeout(() => {
          navigate('/success');  
        }, 2000);
      } else {
        setMessage(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);  
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          />
        </div>
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
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: isSubmitting ? '#ccc' : '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Sign Up'}
        </button>
      </form>
      {message && (
        <p style={{ textAlign: 'center', marginTop: '10px', color: message.includes('success') ? 'green' : 'red' }}>
          {message}
        </p>
      )}
      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        <a 
          onClick={() => navigate('/login')} 
          style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
        >
          Already have an account? Log In
        </a>
      </p>
    </div>
  );
};

export default SignUp;
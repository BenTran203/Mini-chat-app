// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/api';

const Register = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registerUser({ name, phone });
      alert('Registration successful! Please login.');
      navigate('/login'); 
    } catch (error) {
      alert(error.response?.data?.error || 'Error registering user');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Phone" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
      />
      <button onClick={handleRegister}>Register</button>
      
      {/* Add Button to Go to Login */}
      <button onClick={() => navigate('/login')} style={{ marginTop: '10px' }}>
        Already Registered? Go to Login
      </button>
    </div>
  );
};

export default Register;

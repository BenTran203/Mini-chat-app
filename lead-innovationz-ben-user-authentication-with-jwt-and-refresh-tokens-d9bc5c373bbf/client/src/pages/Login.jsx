// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api';

const Login = ({ onLogin }) => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await loginUser({ phone });
      localStorage.setItem('token', data.token);
      onLogin(data.user);
      alert('Login successful!');
      navigate('/chat');
    } catch (error) {
      alert(error.response?.data?.error || 'Error logging in');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Phone" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
      
      {/* Add Button to Go to Register */}
      <button onClick={() => navigate('/register')} style={{ marginTop: '10px' }}>
        New User? Go to Register
      </button>
    </div>
  );
};

export default Login;

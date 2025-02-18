// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/chat" element={user ? <Chat user={user} /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

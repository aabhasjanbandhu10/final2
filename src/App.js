
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './comp/SIDE/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './comp/login/login_f.js';
import Header from './comp/Header/header.js';
import Register from './comp/login/Register.js';

import  { useState } from 'react';
import Footer from './comp/Footer/footer.jsx';





function App() {
  const userRole = "admin";
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');}
  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
      <Header toggleTheme={toggleTheme}/>
      <Sidebar role={userRole}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

        </Routes>
      </Sidebar>
      <Footer/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;

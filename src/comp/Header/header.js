import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { IoIosNotifications } from "react-icons/io";
import './style.css';
import img1 from './sies_gst_logo-removebg-preview.png'

const Header = ({ toggleTheme }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleRedirect = () => {
    if (user) {
      if (user.role === 'teacher') {
        navigate('/event-creation');
      } else if (user.role === 'student') {
        navigate('/feedback');
      }
    }
  };
  
  return (
    <header>
      <div className='head'>
      <img src={ img1 }/>
        <h1 className='head_text'>SIES Graduate School of Technology </h1>
        <button className='button_head'>
          <FaUserCircle  size={50} style={{color:'white'}}/>
          <div className='hover_head'>
            <div className='contant_button'>
              <div className="login-card">
                {user ? (
                  <div>
                    <p style={{ fontSize: '25px', marginBottom: '5px', color:'black' }}>Welcome, {user.username}!</p>
                    {/* <p style={{ fontSize: '16px', marginBottom: '10px', color:'black' }}>Your role: {user.role}</p> */}
                    <button
  onClick={handleLogout}
  style={{
    padding:'10px',
    font_size:'17px',
    width:'70%',
    margin_top:'15px',
    border:'2px solid transparent',
    border_radius:'20px',
    background_color: '#1b77da',
    color: '#f2f2f2',
    font_weight: 'bold',
    font_family: 'sans-serif',
    transition: 'background-color 0.2s, color 0.2s, border-color 0.2s', 
    border_color: '#1b77da',
  }}
>
                      Logout
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className='wel'>Welcome, Guest!</h3>
                    <button className="normal-signin" onClick={() => navigate('/login')}>Login</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </button>
        <IoIosNotifications onClick={handleRedirect} size={50} style={{color:'white', margin:'5px' , marginRight:'20px'}}/>
        <div className="toggle-switch">
          <label className="switch">
            <input type="checkbox" onClick={toggleTheme} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;

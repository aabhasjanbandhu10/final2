import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost/login.php', formData)
            .then(response => {
                const res = response.data;
                if (res.status === 'success') {
                 navigate('/');
                } else {
                    alert(res.message);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    const handleRegisterClick = () => {
        navigate('/register'); // Update this path as needed
    };

    return (
        <form onSubmit={handleSubmit} style={{marginTop:'350px',marginLeft:'43%' ,marginBottom:'350px',border:'2px solid', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '300px'}}>
            <div style={{ marginBottom: '15px', width: '100%' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Email" 
                    onChange={handleChange} 
                    required 
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
                />
            </div>
            <div style={{ marginBottom: '15px', width: '100%' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Password" 
                    onChange={handleChange} 
                    required 
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} 
                />
            </div>
           <div> 
            <button 
                type="submit" 
                style={{ padding: '10px 15px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', fontSize: '16px' }}
            >
                Login
            </button>
            <button 
                type="button" 
                onClick={handleRegisterClick}
                style={{marginLeft:'25px' ,padding: '10px 15px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', fontSize: '16px' }}
            >
                Register
            </button>
            </div>
        </form>
    );
};

export default Login;

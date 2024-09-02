import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        PRN: '',
        email: '',
        password: '',
        role: 'student'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost/register.php', formData)
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

    return (
        <form onSubmit={handleSubmit} style={{
            marginTop:'300px',
            marginBottom:'300px',
            border:'2px solid',
            marginLeft:'37%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            width: '75%',
            maxWidth: '600px'
        }}>
            <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                }} 
            />
            <input 
                type="text" 
                name="PRN" 
                placeholder="PRN" 
                value={formData.PRN}
                onChange={handleChange}
                required
                style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                }} 
            />
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                }} 
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password}
                onChange={handleChange}
                required
                style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                }} 
            />
            <select 
                name="role" 
                value={formData.role}
                onChange={handleChange}
                style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                }}
            >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
            </select>
            <button 
                type="submit" 
                style={{
                    padding: '10px 15px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                Register
            </button>
        </form>
    );
};

export default Register;

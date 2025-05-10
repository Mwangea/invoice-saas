import axios from 'axios';

const API = axios.create({
    // Use import.meta.env for Vite or use direct environment variables for Create React App
    baseURL: import.meta.env?.VITE_API_URL || 
             (typeof process !== 'undefined' && process.env?.REACT_APP_API_URL) || 
             'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json'
    },
});

// Add authorization token to requests
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
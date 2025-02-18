import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5000" });

export const registerUser = (data) => API.post('/register', data);
export const loginUser = (data) => API.post('/login', data);

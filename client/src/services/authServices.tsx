import axios from 'axios';

const api = axios.create({
  baseURL: '/api/auth',
});

export const login = (email: string, password: string) => api.post('/login', { email, password });
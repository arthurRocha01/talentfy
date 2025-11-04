import axios from 'axios';

const api = axios.create({
  baseURL: '/api/auth',
});

export const login = (form) => api.post('/login', form);

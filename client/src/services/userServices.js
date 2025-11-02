import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/users'
});

export const getUsers = () => api.get('/');
export const getUserById = (id) => api.get(`/${id}`);
export const createUser = (data) => api.post('/', data);
export const updateUser = (id, data) => api.put(`/${id}`, data);
export const deleteUser = (id) => api.delete(`/${id}`);

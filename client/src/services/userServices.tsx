import axios from 'axios';

const api = axios.create({
  baseURL: '/api/users',
});

export const getUsers = () => api.get('/');
export const getUserById = (id: string) => api.get(`/${id}`);
export const createUser = (data: object) => api.post('/', data);
export const updateUser = (id: string, data: object) => api.put(`/${id}`, data);
export const deleteUser = (id: string) => api.delete(`/${id}`); 
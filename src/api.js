// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // URL вашего Nest.js сервера
});

export const getUsers = async () => {
  const response = await api.get('/user');
  return response.data;
};

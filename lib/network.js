import axios from 'axios';

// const getToken = localStorage ? localStorage.getItem('token') : undefined;

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Accept: 'application/json',
    authorization: `Bearer`
  }
});

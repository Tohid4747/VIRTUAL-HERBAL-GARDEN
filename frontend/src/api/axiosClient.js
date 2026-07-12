import axios from 'axios';

const axiosClient = axios.create({
  // This expects Vite to proxy requests, or you can hardcode 'http://localhost:5000/api' for local dev
  baseURL: 'http://localhost:5000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to attach the token to every request
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// EXPORT: This is the line that was missing or cut off!
export default axiosClient;
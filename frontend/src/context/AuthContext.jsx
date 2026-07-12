import { createContext, useState, useEffect, useContext } from 'react';
import axiosClient from '../api/axiosClient';

const AuthContext = createContext(null);

// EXPORT #1: This wraps our app in main.jsx
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if a user is already logged in when the app starts up
  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const res = await axiosClient.get('/auth/me');
        setUser(res.data);
      } catch (err) {
        localStorage.removeItem('token');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkLoggedIn();
  }, []);

  // Register Handler
  const register = async (name, email, password) => {
    const res = await axiosClient.post('/auth/register', { name, email, password });
    localStorage.setItem('token', res.data.token);
    setUser({ _id: res.data._id, name: res.data.name, email: res.data.email, role: res.data.role });
    return res.data;
  };

  // Login Handler
  const login = async (email, password) => {
    const res = await axiosClient.post('/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    setUser({ _id: res.data._id, name: res.data.name, email: res.data.email, role: res.data.role });
    return res.data;
  };

  // Logout Handler
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// EXPORT #2: This lets us use the auth state in App.jsx and other components
export const useAuth = () => useContext(AuthContext);
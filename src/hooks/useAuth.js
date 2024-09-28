// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setIsAuthenticated(true);
      setUserId(storedUserId);
    }
  }, []);

  const login = (id) => {
    localStorage.setItem('userId', id);
    setIsAuthenticated(true);
    setUserId(id);
  };

  const logout = () => {
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
    setUserId(null);
  };

  return { isAuthenticated, userId, login, logout };
};

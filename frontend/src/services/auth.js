// src/services/auth.js
import api from "./api";

// Register new user
export const register = async (userData) => {
  const response = await api.post("accounts/register/", userData);
  return response.data;
};

// Login user
export const login = async (credentials) => {
  const response = await api.post("accounts/login/", credentials);

  // Save tokens in localStorage
  localStorage.setItem("access", response.data.access);
  localStorage.setItem("refresh", response.data.refresh);

  return response.data;
};

// Logout user
export const logout = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};

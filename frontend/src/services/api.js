// src/services/api.js
import axios from "axios";

// Base API instance
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // Django backend
});

// Attach token to every request if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

import axios from "axios";

axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token');
  token && (config.headers.token = token);
  return config;
}, (error) => {
  Promise.reject(error);
})

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  Promise.reject(error);
})
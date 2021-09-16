import axios from "axios";

const service = axios.create({
    baseURL: process.env.VITE_API_URL
})

export default service;
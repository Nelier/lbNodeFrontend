import axios from 'axios';

const api = axios.create({
    baseURL: 'https://18.231.70.81:3333/',
});

export default api;
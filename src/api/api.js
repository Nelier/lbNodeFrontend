import axios from 'axios';

const api = axios.create({
    baseURL: 'https://leancodeapi.com/',
});

export default api;
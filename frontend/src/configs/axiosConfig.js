import axios from 'axios';
import localStorageService from './localStorageService';

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
});

instance.interceptors.request.use(
    config => {
        config.headers['Authorization'] = localStorageService.getToken();
        config.headers['Auth-type'] = 'token';

        return config;
    },
    error => {
        return error;
    });

export default instance;
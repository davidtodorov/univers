/* eslint-disable no-debugger */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:9999/api',
});

instance.interceptors.request.use((config) => {
    config.url = `${config.url}`

    return config;
});

instance.defaults.withCredentials = true;

export default instance;
import axios from 'axios';

const clientAxios = axios.create({
    baseURL: REACT_APP_BASE_URL,
    timeout: 5000,
});

export default clientAxios;

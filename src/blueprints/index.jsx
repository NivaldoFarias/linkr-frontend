import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000',
});

export default Axios;

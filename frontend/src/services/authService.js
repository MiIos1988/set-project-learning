import axios from 'axios';

export const loginUser = (data) => axios.post('/auth/login', data);
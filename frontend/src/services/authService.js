import axios from 'axios';

export const loginUser = (data) => axios.post('/auth/login', data);

export const setUserToLocalStorage = (userObj) => localStorage.setItem("zu", JSON.stringify(userObj))
// Authentication Service
// Uses Axios for Http requests and Local Storage for user information & JWT.
// Provides the following important functions:
    // -login(): POST request {username, password} & save JWT to local storage.
    // -logout(): remove JWT from local storage.
    // -register(): POST request {username, email, password} & save JWT to local storage.
    // -getCurrentUser(): GET stored information for user (including JWT).
import axios from 'axios';

const API_URL = 'http://localhost:8090/api/auth';

const register = (username, email, password) => {
    return axios.post(API_URL + 'signup', {username, email, password});
};

const login = (username, password) => {
    return axios.post(API_URL + 'signin', {username, password}).then((response) => {
        if(response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser
};

export default AuthService;

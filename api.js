import axios from "axios";

const API = "http://localhost:8000";

// function login user
export const Login = async (payload) => {
    try {
        const response = await axios.get(`${API}/api/login`, payload);
        return response;
    } catch (error) {
        return error;
    }
}

// function register new user
export const Register = async (payload) => {
    try {
        const response = await axios.post(`${API}/api/register`, payload);
        return response;
    } catch (error) {
        return error;
    }
}
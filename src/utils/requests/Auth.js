import Axios from 'axios'
import { AuthAPI } from '../Api'

// Login to account
const Login = async (data) => {
    return await Axios.post(`${AuthAPI}login`, data)
}

// Register an account
const Register = async (data) => {
    return await Axios.post(`${AuthAPI}register`, data)
}

// Reset password
const Reset = async (data) => {
    return await Axios.post(`${AuthAPI}reset`)
}

export const Auth = {
    Login,
    Register,
    Reset
}
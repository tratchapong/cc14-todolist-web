/* eslint-disable no-unused-vars */
import axios from 'axios'

const todoApi = axios.create({
  baseURL : 'http://localhost:8080',
})

const addToken = (token) => ({
  headers : {
    Authorization: `Bearer ${token}`
  }
})

export const register = (input) => {
  return axios.post('http://localhost:8080/auth/register', input)
}

export const login = (input) => {
  return axios.post('http://localhost:8080/auth/login', input)
}

export const getMe = (token) => {
    return axios.get('http://localhost:8080/auth/getMe', addToken(token))
}

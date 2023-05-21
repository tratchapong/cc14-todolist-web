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
  return todoApi.post('/auth/register', input)
}

export const login = (input) => {
  return todoApi.post('/auth/login', input)
}

export const getMe = (token) => {
    return todoApi.get('/auth/getMe', addToken(token))
}

export const getJobs = (token) => {
    return todoApi.get('/todos', addToken(token))
}

export const getSummary = (token) => {
  return todoApi.get('/todos/summary', addToken(token))
}

export const addTodo = (input, token) => {
  return todoApi.post('/todos',input, addToken(token))
}
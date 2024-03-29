/* eslint-disable no-unused-vars */
import axios from 'axios'

const todoApi = axios.create({
  baseURL : 'https://dev.rt-lab.co/services',
  // baseURL : 'http://139.5.146.109:8080',
  // baseURL : 'http://localhost:8080',
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

export const getJob = (id, token) => {
  return todoApi.get(`/todos/${id}`, addToken(token))
}

export const updateTodo = (id, input, token) => {
  return todoApi.put(`/todos/${id}`, input, addToken(token))
}

export const deleteTodo = (id, token) => {
  return todoApi.delete(`/todos/${id}`, addToken(token))
}

export const updateProfile = (input, token) => {
  return todoApi.put('/user', input, addToken(token))
}
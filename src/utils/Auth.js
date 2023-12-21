import { checkResponse } from './CheckResponse.js'
import { baseUrl } from '../utils/const'

export const register = async (name, email, password) => {
  const response = await fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
  })
  const res = await response.json()
  return checkResponse(response.ok, res)
}

export const login = async (email, password) => {
  const response = await fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
  const res = await response.json()
  return checkResponse(response.ok, res)
}

export const checkToken = async (token) => {
  const response = await fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    }
  })
    const res = await response.json()
    return checkResponse(response.ok, res)
}
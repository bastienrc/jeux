import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { getItem, addItem, removeItem } from './LocaleStorage'

const BASE_URL = process.env.REACT_APP_BASE_URL
const USER_API_BASE_URL = BASE_URL + '/user'

export function hasAuthenticated () {
  const token = getItem('jeuxToken')
  const result = token ? tokenIsValid(token) : false

  if (result === false) {
    removeItem('jeuxToken')
  }

  return result
}

export function login (credentials) {
  return axios
    .post(USER_API_BASE_URL + '/login', credentials)
    .then(response => response.data.token)
    .then(token => {
      addItem('jeuxToken', token)
      return true
    })
}

export function logout () {
  removeItem('jeuxToken')
}

function tokenIsValid (token) {
  const { exp: expiration } = jwtDecode(token)

  if (expiration * 1000 > new Date().getTime()) {
    return true
  }

  return false
}

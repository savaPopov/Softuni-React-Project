import  { api } from "./requester";

const BASE_URL = 'http://localhost:3030/users/'

export async function login(email, password) {
  const result = await api.post(`${BASE_URL}/login`, { email, password })

  return result
}

export async function register(email, password) {
  const result = await api.post(`${BASE_URL}/register`, { email, password })

  return result
}

export async function logout() {
  await api.get(`${BASE_URL}/logout`)
}
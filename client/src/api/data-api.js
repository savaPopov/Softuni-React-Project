import { api } from "./requester";

const BASE_URL = 'http://localhost:3030/data/hikes'

export async function getAllRecent() {
  const result = await api.get('http://localhost:3030/data/hikes?sortBy=_createdOn%20desc')
  // const result = await api.get('/data/hikes?sortBy=_createdOn%20desc')

  const hikes = Object.values(result)

  return hikes

}
export async function getAll() {
  const result = await api.get(BASE_URL)


  const hikes = Object.values(result)

  return hikes

}



export async function getById(hikeId) {
  const result = await api.get(`${BASE_URL}/${hikeId}`)

  return result
}


export async function create(gameData) {
  api.post(`http://localhost:3030/data/games`, gameData)
}
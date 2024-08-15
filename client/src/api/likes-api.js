import { api } from "./requester";
const BASE_URL = 'http://localhost:3030/data/likes'



export async function like(hikeId) {


  const result = await api.post(BASE_URL, { hikeId })

  console.log('result', result)

  return result
}

export function getAllLikes(hikeId) {
  const params = new URLSearchParams({
    where: `hikeId="${hikeId}"`,
    load: `author=_ownerId:users`,
  })
  let result = api.get(`${BASE_URL}?${params.toString()}`)

  return result
}
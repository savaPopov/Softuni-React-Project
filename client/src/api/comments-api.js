import { api } from "./requester";
const BASE_URL = 'http://localhost:3030/data/comments'



export async function createComment(hikeId, text) {

  const result = await api.post(BASE_URL, { hikeId, text })

  return result
}

export function getAllComments(hikeId) {
  const params = new URLSearchParams({
    where: `hikeId="${hikeId}"`,
    load: `author=_ownerId:users`,
  })
  let result = api.get(`${BASE_URL}?${params.toString()}`)

  return result
}
import { getAccessToken } from "../util.js"

export default async function requester(method, url, data) {
  const options = {}

  const accessToken = getAccessToken()
  // const accessToken = ''

  if (accessToken) {
    options.headers = {
      ...options.headers,
      'X-Authorization': accessToken,
    }
  }
  if (method != 'GET') {
    options.method = method
  }

  if (data) {
    options.headers = {
      ...options.headers,
      "Content-Type": 'application/json',
    }

    options.body = JSON.stringify(data)
  }

  console.log('Access Token---', accessToken)
  const response = await fetch(url, options)

  if (response.status == 204) {
    return
  }

  const result = await response.json()

  if (!response.ok) {
    console.log(result)
    throw result
  }

  return result
}

function get(url) {
  return requester('GET', url)
}
function post(url, data) {
  return requester('POST', url, data)
}
function put(url, data) {
  return requester('PUT', url, data)
}
function del(url) {
  return requester('DELETE', url)
}

export const api = {
  get,
  post,
  put,
  del
}
import { useEffect, useReducer } from "react"
import { getAllComments } from "../api/comments-api"

function commentsReducer(state, action) {
  switch (action.type) {
    case 'GET_ALL':
      return action.payload.slice()
    case 'ADD_COMMENT':
      return [...state, action.payload]
    default:
      return state
  }
}

export function useGetAllComments(hikeId) {
  const [comments, dispatch] = useReducer(commentsReducer, [])

  useEffect(() => {
    async function fetchData() {
      const result = await getAllComments(hikeId)
      dispatch({ type: 'GET_ALL', payload: result })
    }
    fetchData()


  }, [hikeId])

  return [comments, dispatch]
}
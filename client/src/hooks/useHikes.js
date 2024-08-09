import { useEffect, useState } from "react"
import { getById } from "../api/data-api"

export function useGetOneHike(hikeId) {
  const [hike, setHike] = useState({
    title: '',
    elavation: '',
    distance: '',
    imageUrl: '',
    mountain: '',
    description:'',
    lat:'',
    lng:''
  })
  
  useEffect(() => {
    async function fetchData() {
      const data = await getById(hikeId)
      // console.log(data)
      setHike(data)
      // console.log(games)
    }
    fetchData()

  }, [hikeId])
  

  return [hike, setHike]
}
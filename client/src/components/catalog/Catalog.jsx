import { useEffect, useState } from "react";
import { getAll } from "../../api/data-api";
import CatalogItem from "./catalogItem/CatalogItem";


export default function Catalog() {
  const [hikes, setHikes] = useState([])
  useEffect(() => {
    async function fetchData() {
      const data = await getAll()
      // console.log(data)
      setHikes(data)
      // setGames(data)
      // console.log(games)
    }
    fetchData()

    // console.log(data)
    // fetchData
  }, [])
  console.log(hikes)
  return (
    <div id="main">
      {/* Post */}
      {hikes.length > 0 ? hikes.map(hike => <CatalogItem key={hike._id} {...hike} />) : <p className="no-articles">No Hikes yet</p>}
     

    </div>
  )
}
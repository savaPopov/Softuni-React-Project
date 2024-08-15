import { useEffect, useState } from "react";
import { getAll } from "../../api/data-api";
import CatalogItem from "./catalogItem/CatalogItem";


export default function Catalog() {
  const [hikes, setHikes] = useState([])
  useEffect(() => {
    async function fetchData() {
      const data = await getAll()

      setHikes(data)

    }
    fetchData()

  }, [])

  return (
    <div id="main">

      {hikes.length > 0 ? hikes.map(hike => <CatalogItem key={hike._id} {...hike} />) : <p className="no-articles">No Hikes yet</p>}
     

    </div>
  )
}
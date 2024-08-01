import { useParams } from "react-router-dom"
import { getById } from "../../api/data-api"
import { useEffect, useState } from "react"
import { convertTime } from "../../util"


export default function Details() {
  const { hikeId } = useParams()
  const [hike, setHike] = useState({})
  useEffect(() => {
    async function fetchData() {
      const data = await getById(hikeId)
      // console.log(data)
      setHike(data)
      // console.log(games)
    }
    fetchData()

  }, [])
  const formattedTime = convertTime(hike._createdOn)

  console.log(hike)
  return (
    <div id="main">
      {/* Post */}
      <article className="post">
        <header>
          <div className="title">
            <h2>
              {hike.title}
            </h2>
            <p>{hike.mountain}</p>
          </div>
          <div className="meta">
            <time className="published" dateTime="2015-11-01">
              {formattedTime}
            </time>
            {/* <a href="#" className="author">
              <span className="name">Jane Doe</span>
              <img src="images/avatar.jpg" alt="" />
            </a> */}
          </div>
        </header>
        <span className="image featured">
          <img src={hike.imageUrl} alt="" />
        </span>
        <p>
          {hike.description}
        </p>
        <p>
          Elavation:{hike.elavation}m
        </p>
        <p>
          Distance:{hike.distance}hours
        </p>
        <footer>
          <ul className="stats">
            <li>
              <a href="#">General</a>
            </li>
            <li>
              <a href="#" className="icon solid fa-heart">
                28
              </a>
            </li>
            <li>
              <a href="#" className="icon solid fa-comment">
                128
              </a>
            </li>
          </ul>
        </footer>
      </article>
    </div>
  )
}
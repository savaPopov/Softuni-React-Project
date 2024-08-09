import { Link, useNavigate, useParams } from "react-router-dom"
import { getById, remove } from "../../api/data-api"
import { useEffect, useState } from "react"
import { convertTime } from "../../util"
import GoogleMaps from "./googleMaps/GoogleMaps"
import styles from './Details.module.css'
import { useAuthContext } from "../../contexts/AuthContext"


export default function Details() {
  const navigate = useNavigate()
  const { email, userId } = useAuthContext()
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

  async function deleteHandler() {
    const isConfirmed = confirm(`Are you sure you want to delete this ${hike.title} ?`)

    if (isConfirmed) {
      try {
        await remove(hikeId)

        navigate('/')

      } catch (err) {
        alert(err.message)
      }
    }
  }

  console.log(hike._ownerId)
  console.log(userId)
  const isOwner = userId == hike._ownerId
  const hasLiked = false;


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
            {/* <span className="name">Created by: {email}</span> */}
            {/* <a href="#" className="author">
     
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
        <div className="buttons">
          {isOwner ? (
            <>
              <h1><Link className={styles.buttonLink} to={`/edit/${hikeId}`}>Edit</Link></h1>
              <h1><a className={styles.buttonLink} onClick={deleteHandler} href="#">Delete</a></h1>
            </>
          ) : hasLiked ?
            <h1>You have already Liked this post</h1> :
            (
              <h1><a className={styles.buttonLink} href="#">Like</a></h1>
            )}

        </div>

        <div className="details-comments">
          <h2>Comments:</h2>

          <ul>


            <li className="comment">
              <p>admin@abv.bg: Nice Hike</p>
            </li>

            <li className="comment">
              <p>admin@abv.bg: Nice Hike</p>
            </li>

            <li className="comment">
              <p>admin@abv.bg: Nice Hike</p>
            </li>

            {/* list all comments for current game (If any) */}

          </ul>
          {/* Display paragraph: If there are no games in the database */}
          {/* {comments.length == 0 && <p className="no-comment">No comments.</p>} */}
        </div>

        <label>Add new comment:</label>

        <form className="form" >

          <textarea
            name="comment"
            placeholder="Comment......"

          />

          <input
            className="btn submit"
            type="submit"
            defaultValue="Add Comment"
          />

        </form>




        <footer>
          {<GoogleMaps {...hike} />}
          {/* <ul className="stats">
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
          </ul> */}
        </footer>

      </article>
    </div>
  )
}
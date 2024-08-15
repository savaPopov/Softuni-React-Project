import { Link, useNavigate, useParams } from "react-router-dom"
import { getById, remove } from "../../api/data-api"
import { useEffect, useState } from "react"
import { convertTime } from "../../util"
import GoogleMaps from "./googleMaps/GoogleMaps"
import styles from './Details.module.css'
import { useAuthContext } from "../../contexts/AuthContext"
import { useForm } from "../../hooks/useForm"
import { useGetAllComments } from "../../hooks/useComments"
import { createComment } from "../../api/comments-api"
import DeleteConfirmationModal from "./deleteConfirmModal/DeleteConfirmationModal"
import { getAllLikes, like } from "../../api/likes-api"

const initialValues = {
  comment: ''
}

export default function Details() {
  const navigate = useNavigate()
  const { email, userId, isAuthenticated } = useAuthContext()
  const { hikeId } = useParams()
  const [hike, setHike] = useState({})
  const [comments, dispatch] = useGetAllComments(hikeId)
  const [commentErr, setCommentErr] = useState('')
  const [isModalOpen, setModalOpen] = useState(false)
  const [likes, setLikes] = useState([])



  useEffect(() => {
    async function fetchData() {
      const result = await getAllLikes(hikeId)
      setLikes(result)
    }


    fetchData()
  }, [])

  async function handleLikes() {
    const newLike = await like(hikeId)
    setLikes(state => [...state, newLike])
  }


  async function commentHandler({ comment }) {
    console.log(values)
    try {
      const newComment = await createComment(hikeId, comment)

      dispatch({ type: 'ADD_COMMENT', payload: { ...newComment, author: { email } } })
    } catch (err) {
      setCommentErr(err.message)
    }
  }

  const { changeHandler, submitHandler, values } = useForm(initialValues, commentHandler)

  useEffect(() => {
    async function fetchData() {
      const data = await getById(hikeId)
      setHike(data)
    }
    fetchData()

  }, [])


  const formattedTime = convertTime(hike._createdOn)


  async function deleteHandler() {

    try {
      await remove(hikeId)

      navigate('/')
      setModalOpen(false)
    } catch (err) {
      alert(err.message)
    }
  }

  const isOwner = userId == hike._ownerId

  let hasLiked = likes.some((x) => x._ownerId == userId)

  return (

    <div id="main">
      <article className="post">
        <header>
          <div className="title">
            <h2>
              {hike.title}
            </h2>
            <p className={styles['large-gray-text']}>{hike.mountain}</p>
          </div>

          <div className="meta">
            Created On:
            <time className="published" dateTime="2015-11-01">

              {formattedTime}
            </time>
          </div>
        </header>
        <span className="image featured">
          <img src={hike.imageUrl} alt="" />
        </span>
        <p>
          <b>Description:</b> {hike.description}
        </p>
        <p>

          <b> Total elavation:</b> {hike.elavation}m
        </p>
        <p>
          <b>Distance:</b>{hike.distance}hours
        </p>

        <span className="buttons" style={{ display: "inline" }}>
          <DeleteConfirmationModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onConfirm={deleteHandler} />
          {isOwner
            ? (
              <div className={styles['inline-buttons']}>

                <h1><Link className={styles.buttonLink} to={`/edit/${hikeId}`}>Edit</Link></h1>

                <h1><a className={styles.buttonLink} onClick={() => setModalOpen(true)} href="#">Delete</a></h1>

              </div>

            )
            : isAuthenticated
              ? (hasLiked)
                ? <h1 className={styles['error-message']}>You have already Liked this post</h1>
                : (
                  <h1><a className={styles.buttonLink} href="#" onClick={handleLikes}>Like</a></h1>
                )
              : ''
          }

        </span>
        <h2>Likes:{likes.length}</h2>
        <div className="details-comments">
          <h2>Comments:</h2>

          <ul>
            {comments.map(comment => (
              <li key={comment._id} className="comment">
                <p><b> {comment.author.email}:</b><i> {comment.text}</i></p>

              </li>
            ))}


          </ul>
          {comments.length == 0 && <h4 className="no-comment">No comments.</h4>}
        </div>

        {isAuthenticated && (<article className="create-comment">
          <label>Add new comment:</label>
          <form className="form" onSubmit={submitHandler}>

            <textarea
              name="comment"
              placeholder="Comment......"
              onChange={changeHandler}
              value={values.comment}
            />

            <input
              className="btn submit"
              type="submit"
              defaultValue="Add Comment"
            />

            {commentErr && (
              <p className={styles['error-message']}>{commentErr}</p>)}
          </form>

        </article>
        )}





        <footer>
          {<GoogleMaps {...hike} />}
        </footer>

      </article>
    </div>
  )
}
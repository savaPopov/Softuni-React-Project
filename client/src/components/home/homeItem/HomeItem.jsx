import { Link } from "react-router-dom"
import { convertTime } from "../../../util"
export default function HomeItem({ _id, title, imageUrl, _createdOn }) {

  const formattedTime = convertTime(_createdOn)
  return (
    <article className="mini-post">
      <header>
        <h3>
          <Link to={`/details/${_id}`}>{title}</Link>
        </h3>
        <time className="published" dateTime="2015-10-17">
          {formattedTime}
        </time>
      </header>
      <Link to={`/details/${_id}`} className="image">
        <img src={imageUrl} alt="" />
      </Link>
    </article>

  )
}
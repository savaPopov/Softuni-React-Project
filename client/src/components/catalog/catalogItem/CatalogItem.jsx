import { Link } from "react-router-dom"
import { convertTime } from "../../../util"

export default function CatalogItem({ title, description, mountain, _createdOn, imageUrl, _id }) {
  const formattedDate = convertTime(_createdOn)
  return (
    <article className="post">
      <header>
        <div className="title">
          <h2>
            <Link to={`/details/${_id}`}>{title}</Link>
          </h2>
          <p>{mountain}</p>
        </div>
        <div className="meta">
        Created On:
          <time className="published" dateTime="2015-11-01">
         
            {formattedDate}
          </time>

        </div>
      </header>
      <span className="image featured">
        <img src={imageUrl} alt="" />
      </span>
      <p>
        {description}
      </p>

      <footer>

      </footer>
    </article>
  )
}

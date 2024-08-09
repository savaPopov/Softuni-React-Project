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
          <time className="published" dateTime="2015-11-01">
            {formattedDate}
          </time>
          {/* <a href="#" className="author">
            <span className="name">Jane Doe</span>
            <img src="images/avatar.jpg" alt="" />
          </a> */}
        </div>
      </header>
      <span className="image featured">
        <img src={imageUrl} alt="" />
      </span>
      <p>
        {description}
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
  )
}

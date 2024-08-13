import { Link } from "react-router-dom";
import { getAllRecent } from "../../api/data-api";
import HomeItem from "./homeItem/HomeItem";
import { useState, useEffect } from "react";


export default function Home() {
  const [hikes, setHikes] = useState([])
  useEffect(() => {
    async function fetchData() {
      const data = await getAllRecent()
      // console.log(data)
      setHikes(data)

    }
    fetchData()

    // console.log(data)
    // fetchData
  }, [])
  console.log(hikes)
  return (
    <>
      <section className="blurb">
        <h1>About</h1>
        <i> <h3 className="big-text">
          Hiking is best enjoyed together, as the joy of discovery grows when shared. The breathtaking Bulgarian mountains offer views that inspire awe, and these wonders are meant to be experienced by all. With every step, the connection deepens, not only with nature but with those who walk beside you. The trails lead to stunning vistas that deserve to be seen, reminding us that nature's beauty is a gift. The mountains call out, inviting everyone to explore, to share, and to cherish the splendor they offer.
        </h3></i>
        <ul className="actions">
          <li>
            <Link to="/about" className="button">
              Learn More about us
            </Link>
          </li>
        </ul>
      </section>

      <section id="sidebar">
        {/* Intro */}
        <section id="intro">
          <a href="#" className="logo">
            <img src="images/logo.jpg" alt="" />
          </a>
          <header>
            <h2>The fun of a lifetime!</h2>
            <p>
              Recent Hiking Trails
              {/* <a href="http://html5up.net">HTML5 UP</a> */}
            </p>
          </header>
        </section>
        {/* Mini Posts */}
        <section>
          <div className="mini-posts">

            {hikes.length > 0 ? hikes.map(hike => <HomeItem key={hike._id} {...hike} />) : <p className="no-articles">No Hikes yet</p>}

          </div>
        </section>

      </section>
    </>
  )
}
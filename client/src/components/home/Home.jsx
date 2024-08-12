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
        <h2>About</h2>
        <p className="big-text">
          Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed
          mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna
          enim, ac accumsan tortor cursus at phasellus sed ultricies.
        </p>
        <ul className="actions">
          <li>
            <a href="#" className="button">
              Learn More
            </a>
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
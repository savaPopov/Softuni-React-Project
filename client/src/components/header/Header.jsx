import { Link } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext"

export default function Header() {
  console.log('sava')

  const { isAuthenticated } = useAuthContext()
  return (
    <header id="header">
      <h1>
        <Link to="/">Hiking Fun!</Link>
      </h1>
      <nav className="links">
        <ul>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          
          {isAuthenticated
            ? (<>
              <li><Link to="/logout">Logout</Link></li>
              <li><Link to="/create">Create Hike!</Link></li>
            </>)
            : (<>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>)
            }

          <li>
            <a href="#">About Us</a>
          </li>




        </ul>
      </nav>
      <nav className="main">
        <ul>
          <li className="search">
            <a className="fa-search" href="#search">
              Search
            </a>
            <form id="search" method="get" action="#">
              <input type="text" name="query" placeholder="Search" />
            </form>
          </li>
          <li className="menu">
            <a className="fa-bars" href="#menu">
              Menu
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
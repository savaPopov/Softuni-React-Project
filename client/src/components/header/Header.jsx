import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext"
import { useLogout } from "../../hooks/useAuth"
import { useEffect } from "react"

export default function Header() {
  const navigate = useNavigate('/')
  const logout = useLogout()

  async function logoutHandler() {


    await logout()
    navigate('/')
  }

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
              <li><a href="#" onClick={logoutHandler}>Logout</a></li>
              {/* <li><Link to="/logout">Logout</Link></li> */}
              <li><Link to="/create">Create Hike!</Link></li>
            </>)
            : (<>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>)
          }

          <li><Link to="/about">About Us</Link></li>





        </ul>

      </nav>

      <nav className="main">
        <ul>
          <li><Link className="fa-search" to="/search" >Search</Link></li>
        </ul>
      </nav>

    </header>
  )
}
import About from "./components/about/About"
import Catalog from "./components/catalog/Catalog"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Register from "./components/register/Register"
import Login from "./components/login/Login"
import Logout from "./components/logout/Logout"
import Details from "./components/details/Details"
import Create from "./components/create/Create"
import Edit from "./components/edit/Edit"
import AuthGuard from "./components/common/AuthGuard"
import GuestGuard from "./components/common/GuestGuard"
import Search from "./components/search/Search"

import { AuthContextProvider } from "./contexts/AuthContext"
import { Routes, Route } from "react-router-dom"

function App() {


  return (

    <AuthContextProvider>
      <div id="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />

          <Route element={<GuestGuard />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/details/:hikeId" element={<Details />} />
          <Route path="/search" element={<Search />} />
          <Route element={<AuthGuard />}>
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:hikeId" element={<Edit />} />
            <Route path="/logout" element={<Logout />} />

          </Route>

        </Routes>

      </div>

    </AuthContextProvider>
  )
}

export default App

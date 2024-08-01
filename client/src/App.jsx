import About from "./components/about/About"
import Catalog from "./components/catalog/Catalog"
import Footer from "./components/footer/Footer"

import Header from "./components/header/Header"


import Menu from "./components/menu/Menu"
import Home from "./components/home/Home"

import { Routes, Route } from "react-router-dom"
import Register from "./components/register/Register"
import Login from "./components/login/Login"
import { AuthContextProvider } from "./contexts/AuthContext"
import Logout from "./components/logout/Logout"

function App() {


  return (

    <AuthContextProvider>
      <div id="wrapper">
        <Header />
        {/* Header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
        {/* <Form /> */}
      </div>

    </AuthContextProvider>
  )
}

export default App

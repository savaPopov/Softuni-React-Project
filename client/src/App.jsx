import About from "./components/about/About"
import Catalog from "./components/catalog/Catalog"
import Footer from "./components/footer/Footer"
import Form from "./components/form/Form"
import Header from "./components/header/Header"


import Menu from "./components/menu/Menu"
import Home from "./components/home/Home"

import { Routes, Route } from "react-router-dom"

function App() {


  return (


    <div id="wrapper">
      <Header />
      {/* Header */}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />

        {/* <About/> */}
        {/* <Catalog /> */}
        {/* <Home/> */}
        {/* <Menu/> */}
        {/* <Footer/> */}
      </Routes>
      {/* <Form /> */}
      


    </div>


  )
}

export default App

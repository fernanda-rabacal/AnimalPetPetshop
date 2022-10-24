import { Navigate, Route, Routes } from "react-router-dom"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { About } from "../pages/About"
import { Error } from "../pages/Error"
import { Home } from "../pages/Home"
import { Login } from "../pages/CompleteOrder"
import { OurProducts } from "../pages/OurProducts"

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}> 
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path='*' element={<Error />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-products" element={<OurProducts />} />
      </Route>
    </Routes>
  )
}
import { Navigate, Route, Routes } from "react-router-dom"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { About } from "../pages/About"
import { Error } from "../pages/Error"
import { Home } from "../pages/Home"
import { OurProducts } from "../pages/OurProducts"
import { CompleteOrderPage } from "../pages/CompleteOrder"
import { OrderConfirmedPage } from "../pages/OrderConfirmed"
import { ProductDetails } from "../pages/ProductDetails"
import { ServicesPage } from "../pages/Services"
import { LoginPage } from "../pages/Login"

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}> 
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path='*' element={<Error />} />
        <Route path="/complete-order" element={<CompleteOrderPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/products" element={<OurProducts />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/confirmed-order" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  )
}
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../../contexts/CartContext"
import { Error } from "../Error"

export function ProductDetails() {
  const {products} = useContext(CartContext)
  const {id} = useParams()

  const product = products.find(product => {
    return product.id === id
  })

  if(product === undefined) {
    return <Error />
  }

  return(
    <h1>{product.name}</h1>
  )
}
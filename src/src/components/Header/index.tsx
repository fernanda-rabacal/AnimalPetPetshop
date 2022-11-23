import { MapPin, ShoppingCart } from "phosphor-react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../../contexts/CartContext"
import { CartWrapper, HeaderButtonsContainer, HeaderContainer, PagesNavigators } from "./styles"


export function Header(){
  const { cartQuantity } = useContext(CartContext)

  return(
    <HeaderContainer>
      <NavLink to="/">
        <h1>AnimalPet</h1>
      </NavLink>
        
      <PagesNavigators>
        <NavLink to="/home">
         <p>Home</p> 
        </NavLink>
        <NavLink to="/about">
          <p>Sobre</p>
        </NavLink>
        <NavLink to="/products">
          <p>Produtos</p>
        </NavLink>
        <NavLink to="/services">
          <p>Serviços</p>
        </NavLink>
      </PagesNavigators>

      <HeaderButtonsContainer>
        <CartWrapper>
          <MapPin size={20} weight="fill" />
            Salvador, BA
        </CartWrapper>
        <CartWrapper>
        {cartQuantity >= 1 && <span>{cartQuantity}</span>}
          <NavLink to="/complete-order">
          <ShoppingCart size={32} weight="fill" />
          </NavLink>
        </CartWrapper>

      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}
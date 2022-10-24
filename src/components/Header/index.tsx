import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom"
import { CartWrapper, HeaderButtonsContainer, HeaderContainer, PagesNavigators } from "./styles"


export function Header(){
  return(
    <HeaderContainer>
      <h1>AnimalPet</h1>
        
      <PagesNavigators>
        <NavLink to="/home">
         <p>Home</p> 
        </NavLink>
        <NavLink to="/about">
          <p>Sobre</p>
        </NavLink>
        <NavLink to="/our-products">
          <p>Produtos</p>
        </NavLink>
      </PagesNavigators>

      <HeaderButtonsContainer>
        <CartWrapper>
          <MapPin size={20} weight="fill" />
            Salvador, BA
        </CartWrapper>
        <CartWrapper>
          <NavLink to="/complete-order">
          <ShoppingCart size={32} weight="fill" />
          </NavLink>
        </CartWrapper>

      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}
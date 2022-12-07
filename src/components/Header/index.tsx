import { ShoppingCartSimple, User } from "phosphor-react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../../contexts/CartContext"
import { CartWrapper, HeaderButtonsContainer, HeaderContainer, LoginDialog, LoginWrapper, PagesNavigators } from "./styles"


export function Header(){
  const { cartQuantity } = useContext(CartContext)

  return(
    <HeaderContainer>
      <NavLink to="/">
        <h1>AnimalPet</h1>
      </NavLink>
        
      <PagesNavigators>
        <NavLink to="/home">
         <p>Início</p> 
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
          <LoginWrapper>
            <User size={32} weight="bold" />
              <p>Entrar</p>
          </LoginWrapper>
          <LoginDialog className="dialog active"> 
            <NavLink to="/login" >
              <button>
                Entrar
              </button>
            </NavLink>
            <p>Não tem cadastro? <NavLink to="/register">Criar conta</NavLink></p>
          </LoginDialog>
        <CartWrapper>
          {cartQuantity >= 1 && <span>{cartQuantity}</span>}
          <NavLink to="/complete-order">
            <ShoppingCartSimple size={32} weight="bold" />
          </NavLink>
        </CartWrapper>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}
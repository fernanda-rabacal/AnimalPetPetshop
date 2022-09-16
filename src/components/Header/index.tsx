import { NavLink } from "react-router-dom"
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react"
import { HeaderContainer, PagesNavigators, SocialLinks } from "./styles"


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
        <NavLink to="/login">
          <p>Login</p>
        </NavLink>
        <NavLink to="/register">
          <p>Cadastro</p>
        </NavLink>
      </PagesNavigators>

        <SocialLinks>
          <a rel='noreferrer' target="_blank" 
            href="https://www.instagram.com/animalpetsalvador">
            <InstagramLogo size={32}/>
            </a>
          <a rel='noreferrer' target="_blank" 
            href="https://www.facebook.com/animalpetsalvador">
              <FacebookLogo size={32}/>
            </a>
          <a rel='noreferrer' target="_blank" 
            href="https://wa.me/5571993172074" >
              <WhatsappLogo size={32}/>
            </a>
        </SocialLinks>
    </HeaderContainer>
  )
}